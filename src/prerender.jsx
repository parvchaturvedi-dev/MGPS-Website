import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import CookieConsentProvider from "./components/CookieConsent";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AdmissionForm from "./pages/AdmissionForm";
import AdmissionPolicy from "./pages/AdmissionPolicy";
import AdmissionProcess from "./pages/AdmissionProcess";
import ContactUs from "./pages/ContactUs";
import Curriculum from "./pages/Curriculum";
import Discipline from "./pages/Discipline";
import ExamResult from "./pages/ExamResult";
import BoardClassResults from "./pages/BoardClassResults";
import Fees from "./pages/Fees";
import Gallery from "./pages/Gallery";
import OurCofounder from "./pages/OurCofounder";
import OurFounder from "./pages/OurFounder";
import OurHistory from "./pages/OurHistory";
import Scholarships from "./pages/Scholarships";
import SiteMap from "./pages/SiteMap";
import { CookiePolicy, PrivacyPolicy, TermsOfUse } from "./pages/LegalPages";
import { pageMetadata, siteUrl } from "./seoMetadata";

const pages = {
  "/": Home,
  "/about-us": AboutUs,
  "/admission-form": AdmissionForm,
  "/admission-policy": AdmissionPolicy,
  "/admission-process": AdmissionProcess,
  "/contact-us": ContactUs,
  "/curriculum": Curriculum,
  "/discipline": Discipline,
  "/exam-result": ExamResult,
  "/exam-result/class-5": () => <BoardClassResults gradeKey="class-5" />,
  "/exam-result/class-8": () => <BoardClassResults gradeKey="class-8" />,
  "/exam-result/class-10": () => <BoardClassResults gradeKey="class-10" />,
  "/fees": Fees,
  "/gallery": Gallery,
  "/our-cofounder": OurCofounder,
  "/our-founder": OurFounder,
  "/our-history": OurHistory,
  "/scholarships": Scholarships,
  "/sitemap": SiteMap,
  "/privacy-policy": PrivacyPolicy,
  "/cookie-policy": CookiePolicy,
  "/terms": TermsOfUse,
};

export const prerenderRoutes = Object.keys(pages);

function createPageHead(path) {
  const page = pageMetadata[path];
  const canonicalUrl = `${siteUrl}${path}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: page.title,
    description: page.description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#school` },
  };

  return {
    lang: "en-IN",
    title: page.title,
    elements: new Set([
      {
        type: "meta",
        props: { name: "description", content: page.description },
      },
      {
        type: "meta",
        props: { name: "robots", content: "index, follow" },
      },
      {
        type: "link",
        props: { rel: "canonical", href: canonicalUrl },
      },
      { type: "meta", props: { property: "og:type", content: "website" } },
      { type: "meta", props: { property: "og:title", content: page.title } },
      {
        type: "meta",
        props: { property: "og:description", content: page.description },
      },
      { type: "meta", props: { property: "og:url", content: canonicalUrl } },
      {
        type: "meta",
        props: {
          property: "og:image",
          content: `${siteUrl}/logo.png`,
        },
      },
      { type: "meta", props: { name: "twitter:card", content: "summary" } },
      { type: "meta", props: { name: "twitter:title", content: page.title } },
      {
        type: "meta",
        props: { name: "twitter:description", content: page.description },
      },
      {
        type: "meta",
        props: {
          name: "twitter:image",
          content: `${siteUrl}/logo.png`,
        },
      },
      {
        type: "script",
        props: {
          type: "application/ld+json",
          textContent: JSON.stringify(jsonLd),
        },
      },
    ]),
  };
}

export function prerender({ url }) {
  const Page = pages[url];
  if (!Page || !pageMetadata[url]) return null;

  const html = renderToString(
    <StaticRouter location={url}>
      <CookieConsentProvider>
        <Page />
      </CookieConsentProvider>
    </StaticRouter>,
  );

  return { html, head: createPageHead(url) };
}
