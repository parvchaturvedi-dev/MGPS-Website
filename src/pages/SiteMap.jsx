import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    title: "School information",
    description: "Learn about the school, its people and campus life.",
    links: [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about-us" },
      { label: "Our History", path: "/our-history" },
      { label: "Our Founder", path: "/our-founder" },
      { label: "Our Co-founder", path: "/our-cofounder" },
      { label: "Gallery", path: "/gallery" },
      { label: "Contact Us", path: "/contact-us" },
    ],
  },
  {
    title: "Academics",
    description: "Explore curriculum, examination information and student guidance.",
    links: [
      { label: "Curriculum", path: "/curriculum" },
      { label: "Board Results: Classes 5, 8 & 10", path: "/exam-result" },
      { label: "Rules & Discipline", path: "/discipline" },
    ],
  },
  {
    title: "Admissions and support",
    description: "Find application steps, policies and family support information.",
    links: [
      { label: "Admission Process", path: "/admission-process" },
      { label: "Admission Policy", path: "/admission-policy" },
      { label: "Admission Form", path: "/admission-form" },
      { label: "Fees", path: "/fees" },
      { label: "Scholarships", path: "/scholarships" },
    ],
  },
  {
    title: "Website policies",
    description: "Read policies covering website use and privacy.",
    links: [
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Cookie Policy", path: "/cookie-policy" },
      { label: "Terms of Use", path: "/terms" },
    ],
  },
];

const SiteMap = () => (
  <div className="flex min-h-screen flex-col bg-white">
    <Navbar />
    <main className="grow px-6 pb-20 pt-36">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
            Marigold Secondary School · Behror, Rajasthan
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Website sitemap
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Browse the official school website by topic. Find school
            information, academics, admissions and policies using the
            categorized page links below.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <section
              key={section.title}
              aria-labelledby={`sitemap-${section.title.toLowerCase().replaceAll(" ", "-")}`}
              className="rounded-3xl border border-slate-200 p-6 md:p-8"
            >
              <h2
                id={`sitemap-${section.title.toLowerCase().replaceAll(" ", "-")}`}
                className="text-2xl font-bold text-slate-950"
              >
                {section.title}
              </h2>
              <p className="mt-2 leading-relaxed text-slate-600">
                {section.description}
              </p>
              <ul className="mt-5 divide-y divide-slate-100">
                {section.links.map((link) => (
                  <li key={link.path} className="py-3 first:pt-0 last:pb-0">
                    <Link
                      to={link.path}
                      className="flex items-center justify-between gap-4 font-semibold text-blue-800 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                    >
                      <span>{link.label}</span>
                      <span aria-hidden="true">View page</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-slate-500">
          Search engines and crawlers can use the{" "}
          <a
            href="/sitemap.xml"
            className="font-semibold text-blue-700 underline underline-offset-4"
          >
            XML sitemap
          </a>
          . It lists the website URLs for automated discovery.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default SiteMap;
