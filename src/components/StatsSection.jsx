import { Link } from "react-router-dom";

const schoolFacts = [
  {
    value: "2000",
    label: "Year established",
    description:
      "The school's published history records its establishment in 2000.",
  },
  {
    value: "Pre-Nursery–Grade 10",
    label: "School levels",
    description:
      "The website describes classes from Pre-Nursery through Grade 10.",
  },
  {
    value: "RBSE",
    label: "Curriculum framework",
    description:
      "The school curriculum page identifies the Rajasthan Board framework.",
  },
  {
    value: "Behror",
    label: "School location",
    description:
      "Marigold Secondary School is located on Hamindpur Road in Behror, Rajasthan.",
  },
];

const StatsSection = () => (
  <section
    aria-labelledby="school-facts-heading"
    className="bg-white px-6 py-24"
  >
    <div className="mx-auto max-w-7xl">
      <header className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
          Marigold Secondary School, Behror
        </p>
        <h2
          id="school-facts-heading"
          className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl"
        >
          School facts at a glance
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          A concise overview of the school's location, history, grade range and
          stated curriculum framework. Families can contact the school to
          confirm current admissions, facilities and session-specific details.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {schoolFacts.map((fact) => (
          <article
            key={fact.label}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
          >
            <p className="text-2xl font-bold tracking-tight text-slate-950">
              {fact.value}
            </p>
            <h3 className="mt-2 text-sm font-bold uppercase tracking-wide text-blue-700">
              {fact.label}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {fact.description}
            </p>
          </article>
        ))}
      </div>

      <nav
        aria-label="School information"
        className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold"
      >
        <Link className="text-blue-700 underline" to="/curriculum">
          Curriculum
        </Link>
        <Link className="text-blue-700 underline" to="/admission-process">
          Admission process
        </Link>
        <Link className="text-blue-700 underline" to="/fees">
          2027–28 fee structure
        </Link>
        <Link className="text-blue-700 underline" to="/contact-us">
          Contact and location
        </Link>
      </nav>
    </div>
  </section>
);

export default StatsSection;
