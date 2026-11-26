import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";

const classResults = {
  "class-5": {
    grade: "Class 5",
    className: "Class 5",
  },
  "class-8": {
    grade: "Class 8",
    className: "Class 8",
  },
  "class-10": {
    grade: "Class 10",
    className: "Class 10",
  },
};

const resultsApiUrl =
  import.meta.env.VITE_RESULTS_API_URL ||
  "https://api.marigoldschoolbehror.com/api/public/web-results";

const BoardClassResults = ({ gradeKey }) => {
  const resultSet = classResults[gradeKey];
  const [results, setResults] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [currentSession, setCurrentSession] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const resultClassName = resultSet?.className;

  useEffect(() => {
    if (!resultClassName) return undefined;
    let active = true;
    const loadResults = async () => {
      setLoading(true);
      setError("");
      try {
        const url = new URL(resultsApiUrl);
        url.searchParams.set("className", resultClassName);
        if (selectedSession) url.searchParams.set("session", selectedSession);
        const response = await fetch(url, { headers: { Accept: "application/json" } });
        if (!response.ok) {
          throw new Error(`Result service returned status ${response.status}.`);
        }
        const data = await response.json();
        if (!Array.isArray(data.results) || !Array.isArray(data.sessions)) {
          throw new Error("Result service returned an invalid response.");
        }
        if (!active) return;
        setResults(data.results);
        setSessions(data.sessions);
        setCurrentSession(data.currentSession);
        if (!selectedSession) setSelectedSession(data.currentSession);
      } catch (loadError) {
        if (active) {
          setError(loadError.message || "Unable to load school results right now.");
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    loadResults();
    return () => {
      active = false;
    };
  }, [resultClassName, selectedSession]);

  if (!resultSet) {
    return <Navigate to="/exam-result" replace />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="grow px-6 pb-20 pt-36">
        <Motion.article
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-6xl"
        >
          <Link
            to="/exam-result"
            className="font-semibold text-blue-700 hover:text-blue-900"
          >
            Back to all board results
          </Link>
          <header className="mt-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              Marigold Secondary School · Behror, Rajasthan
            </p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
              {resultSet.grade} results
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              School-verified {resultSet.grade} results, published with parent
              or guardian permission.
            </p>
          </header>

          <section aria-label="Academic session" className="mt-10 rounded-3xl bg-slate-950 px-6 py-8 text-center text-white">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-200">
              Current academic session
            </p>
            <p className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              {currentSession || (loading ? "Loading…" : "Unavailable")}
            </p>
            {sessions.length > 1 && (
              <label className="mx-auto mt-6 flex max-w-sm flex-col gap-2 text-left">
                <span className="text-xs font-bold text-slate-300">View another session</span>
                <select
                  value={selectedSession}
                  onChange={(event) => setSelectedSession(event.target.value)}
                  className="rounded-xl border border-white/20 bg-white px-4 py-3 text-sm font-bold text-slate-900"
                >
                  {sessions.map((session) => <option key={session}>{session}</option>)}
                </select>
              </label>
            )}
            {selectedSession && selectedSession !== currentSession && (
              <p className="mt-4 text-sm font-semibold text-slate-300">
                Viewing results for session {selectedSession}
              </p>
            )}
          </section>

          <section aria-labelledby="student-results-heading" className="mt-12">
            <h2
              id="student-results-heading"
              className="text-2xl font-bold text-slate-950"
            >
              Verified student results
            </h2>
            {loading ? (
              <p role="status" className="mt-6 rounded-2xl bg-slate-50 p-6 font-semibold text-slate-600">
                Loading verified {resultSet.grade} results…
              </p>
            ) : error ? (
              <p role="alert" className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6 font-semibold text-red-800">
                {error}
              </p>
            ) : results.length ? (
              <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((student) => (
                  <li
                    key={student.id}
                    className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                  >
                    <img
                      src={new URL(student.photoUrl, resultsApiUrl).toString()}
                      alt={`${student.studentName}, ${resultSet.grade} student`}
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="p-6">
                      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                        {resultSet.grade}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-slate-950">
                        {student.studentName}
                      </h3>
                      <p className="mt-4 text-slate-600">
                        Percentage:{" "}
                        <span className="font-bold text-slate-950">
                          {student.percentage}%
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-slate-600">
                Verified {resultSet.grade} result cards will appear here when
                the school adds approved student records.
              </div>
            )}
          </section>

          <p className="mt-8 text-sm leading-relaxed text-slate-500">
          Student result cards are published only after school verification
          and recorded parent or guardian permission. Home addresses and
          family members’ personal details are not displayed publicly.
          </p>
        </Motion.article>
      </main>
      <Marquee />
      <Footer />
    </div>
  );
};

export default BoardClassResults;
