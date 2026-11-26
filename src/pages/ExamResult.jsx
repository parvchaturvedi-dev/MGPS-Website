import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";

const boardClasses = [
  {
    grade: "Class 5",
    label: "Primary board class",
    path: "/exam-result/class-5",
    description:
      "Verified Class 5 student result cards will be listed here after the school checks every detail and confirms parent or guardian permission.",
  },
  {
    grade: "Class 8",
    label: "Middle-school board class",
    path: "/exam-result/class-8",
    description:
      "Verified Class 8 student result cards will be listed here after the school checks every detail and confirms parent or guardian permission.",
  },
  {
    grade: "Class 10",
    label: "Secondary board class",
    path: "/exam-result/class-10",
    description:
      "Verified Class 10 student result cards will be listed here after the school checks every detail and confirms parent or guardian permission.",
  },
];

const ExamResult = () => (
  <div className="flex min-h-screen flex-col bg-white">
    <Navbar />
    <main className="grow px-6 pb-20 pt-36">
      <article className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
            Academics · Marigold Secondary School, Behror, Rajasthan
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Board examination results
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Board result cards are organized for Classes 5, 8 and 10. Before
            publishing any student result, the school verifies the information
            against its records and obtains permission from the student's
            parent or guardian.
          </p>
        </header>

        <section aria-labelledby="board-classes-heading" className="mt-12">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Class-wise information
            </p>
            <h2
              id="board-classes-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-slate-950"
            >
              Select a board class
            </h2>
          </div>
          <ul className="grid gap-5 md:grid-cols-3">
            {boardClasses.map((item) => (
              <li
                key={item.grade}
                className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                  {item.label}
                </p>
                <h3 className="mt-3 text-3xl font-bold text-slate-950">
                  {item.grade}
                </h3>
                <p className="mt-4 grow leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <Link
                  to={item.path}
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-blue-700 px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-800"
                >
                  See The Results
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <aside className="mt-10 rounded-3xl bg-blue-50 p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-950">
            Verified results, published with permission
          </h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            Every student result detail displayed here is fully verified by
            the school against official records, and student cards are
            published only after parent or guardian permission. Public cards
            can show a student's name, photo, class and percentage. A
            student's home address and family members' personal details will
            not be displayed publicly.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="tel:+919414638988"
              className="rounded-full bg-slate-950 px-6 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Call +91-9414638988
            </a>
            <Link
              to="/curriculum"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
            >
              View curriculum
            </Link>
          </div>
        </aside>
      </article>
    </main>
    <Marquee />
    <Footer />
  </div>
);

export default ExamResult;
