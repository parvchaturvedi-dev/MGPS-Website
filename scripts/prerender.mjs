import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const rootDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = resolve(rootDirectory, "dist");
const routeHtmlTemplate = await readFile(
  resolve(outputDirectory, "index.html"),
  "utf8",
);
const buildManifest = JSON.parse(
  await readFile(resolve(outputDirectory, ".vite", "manifest.json"), "utf8"),
);
const builtAssetBySource = new Map(
  Object.entries(buildManifest)
    .filter(([, entry]) => entry.file)
    .map(([source, entry]) => [
      `/${decodeURIComponent(source)}`,
      `/${entry.file}`,
    ]),
);
const vite = await createServer({
  configFile: resolve(rootDirectory, "vite.config.js"),
  root: rootDirectory,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function serializeHeadElement({ type, props = {} }) {
  const attributes = Object.entries(props)
    .filter(([name, value]) => name !== "textContent" && value != null)
    .map(([name, value]) => `${name}="${escapeHtml(value)}"`)
    .join(" ");
  const openingTag = attributes ? `<${type} ${attributes}` : `<${type}`;

  if (["meta", "link", "base"].includes(type)) {
    return `${openingTag} />`;
  }

  return `${openingTag}>${props.textContent ?? ""}</${type}>`;
}

function replaceMeta(html, attribute, value, content) {
  const tag = `<meta ${attribute}="${escapeHtml(value)}" content="${escapeHtml(content)}" />`;
  const pattern = new RegExp(
    `<meta\\s+[^>]*${attribute}="${value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>`,
    "i",
  );

  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `  ${tag}\n</head>`);
}

function createRouteHtml(template, renderedPage) {
  const { html, head } = renderedPage;
  const titleTag = `<title>${escapeHtml(head.title)}</title>`;
  let routeDocument = template.replace(
    /<title>[\s\S]*?<\/title>/i,
    titleTag,
  );

  for (const element of head.elements) {
    const tag = serializeHeadElement(element);
    if (element.type === "meta") {
      const { name, property, content } = element.props;
      const key = name ? ["name", name] : ["property", property];
      routeDocument = replaceMeta(routeDocument, key[0], key[1], content);
    } else if (element.type === "link" && element.props.rel === "canonical") {
      const canonicalTag = serializeHeadElement(element);
      const canonicalPattern = /<link\s+[^>]*rel="canonical"[^>]*>/i;
      routeDocument = canonicalPattern.test(routeDocument)
        ? routeDocument.replace(canonicalPattern, canonicalTag)
        : routeDocument.replace("</head>", `  ${canonicalTag}\n</head>`);
    } else if (element.type === "script") {
      routeDocument = routeDocument.replace("</head>", `  ${tag}\n</head>`);
    }
  }

  const rootMarkup = '<div id="root"></div>';
  if (!routeDocument.includes(rootMarkup)) {
    throw new Error("Could not find the application root in the generated HTML.");
  }

  return routeDocument.replace(
    rootMarkup,
    `<div id="root">${html}</div>`,
  );
}

function replaceSourceAssetPaths(html) {
  return html.replace(/\/src\/assets\/[^"'?#\s]+/g, (sourcePath) => {
    const builtPath = builtAssetBySource.get(decodeURIComponent(sourcePath));
    if (!builtPath) {
      throw new Error(`No built asset was found for ${sourcePath}.`);
    }

    return builtPath;
  });
}

try {
  const { prerender, prerenderRoutes } = await vite.ssrLoadModule(
    "/src/prerender.jsx",
  );

  for (const route of prerenderRoutes) {
    const renderedPage = prerender({ url: route });
    if (!renderedPage) {
      throw new Error(`No prerender output was returned for ${route}.`);
    }

    const relativeDirectory = route.slice(1).replaceAll("/", sep);
    const routeDirectory = resolve(outputDirectory, relativeDirectory);
    const destination =
      route === "/"
        ? resolve(outputDirectory, "index.html")
        : resolve(routeDirectory, "index.html");

    if (!destination.startsWith(`${outputDirectory}${sep}`) && route !== "/") {
      throw new Error(`Invalid prerender output path for ${route}.`);
    }

    await mkdir(dirname(destination), { recursive: true });
    await writeFile(
      destination,
      replaceSourceAssetPaths(createRouteHtml(routeHtmlTemplate, renderedPage)),
      "utf8",
    );
    console.log(`Prerendered ${route}`);
  }
} finally {
  await vite.close();
}
