import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";

const ExamResult = () => (
  <div className="flex min-h-screen flex-col bg-white">
    <Navbar />
    <main className="grow px-6 pb-20 pt-36">
      <article className="mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
          Marigold Secondary School, Behror
        </p>
        <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
          Examinations and results
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          This page explains how families can request official examination
          information from Marigold Secondary School. The website does not
          currently publish class-wise result sheets, named toppers or verified
          pass-percentage data, so no scores or student rankings are shown
          here.
        </p>

        <section aria-labelledby="result-enquiries-heading" className="mt-10 rounded-3xl bg-slate-50 p-8 md:p-10">
          <h2 id="result-enquiries-heading" className="text-2xl font-bold text-slate-950">
            Requesting result information
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            For an official result enquiry, contact the school and mention the
            relevant academic session and class. School staff can confirm what
            information is available and how it can be shared with a parent or
            guardian. Do not send a student’s marks or personal documents in a
            public comment or social-media post.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+919414638988"
              className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Call +91-9414638988
            </a>
            <a
              href="mailto:marigoldvijay@gmail.com"
              className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-white"
            >
              Email the school
            </a>
          </div>
        </section>

        <section aria-labelledby="results-faq-heading" className="mt-12">
          <h2 id="results-faq-heading" className="text-2xl font-bold text-slate-950">
            Examination and result questions
          </h2>
          <div className="mt-5 space-y-3">
            <details className="rounded-2xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Are student toppers or marks published on this website?
              </summary>
              <p className="mb-0 mt-3 leading-relaxed text-slate-600">
                No verified topper list or individual marks are currently
                published here. The school should confirm any result
                information directly before it is relied upon.
              </p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Where can I learn about the school’s academic framework?
              </summary>
              <p className="mb-0 mt-3 leading-relaxed text-slate-600">
                The{" "}
                <Link className="font-semibold text-blue-700 underline" to="/curriculum">
                  curriculum page
                </Link>{" "}
                describes the school’s stated RBSE framework and teaching
                approach. Contact the school for the current syllabus and
                class-specific assessment information.
              </p>
            </details>
          </div>
        </section>
      </article>
    </main>
    <Marquee />
    <Footer />
  </div>
);

export default ExamResult;
