import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { motion as Motion } from "framer-motion";
import { FileSearchOutlined, SendOutlined, TeamOutlined, TrophyOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';

const { Title, Paragraph, Text } = Typography;

const AdmissionProcess = () => {
  const steps = [
    { icon: <FileSearchOutlined />, title: "Form Collection", desc: "Obtain the form from the school office or download it from our website at the start of the session." },
    { icon: <SendOutlined />, title: "Form Submission", desc: "Submit the filled form with birth certificate, previous report card, TC, and photographs." },
    { icon: <TeamOutlined />, title: "Interaction/Exam", desc: "Primary classes have an interaction, while senior classes undergo a written test or interview." },
    { icon: <TrophyOutlined />, title: "Shortlisting", desc: "Candidates are shortlisted based on merit and their performance in the entrance test." },
    { icon: <CheckCircleOutlined />, title: "Confirmation", desc: "Selected candidates receive an offer letter. Pay the first installment to confirm admission." },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Text className="text-blue-600 font-mono uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Step-by-Step Guide</Text>
            <Title className="text-5xl! md:text-7xl! tracking-tighter m-0!">Admission <span className="italic font-serif text-blue-600">Process</span></Title>
          </Motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-12">
            {steps.map((step, index) => (
              <Motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-8 group"
              >
                <div className="w-20 h-20 rounded-3xl bg-blue-600 text-white flex items-center justify-center text-3xl shadow-xl shadow-blue-100 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="grow text-center md:text-left">
                  <Title level={3} className="mb-2!">{index + 1}. {step.title}</Title>
                  <Paragraph className="text-gray-500 text-lg font-light leading-relaxed">{step.desc}</Paragraph>
                </div>
              </Motion.div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-blue-50 rounded-[3rem] border border-blue-100">
            <Title level={4} className="text-blue-600!">Important Note</Title>
            <Paragraph className="text-gray-600 font-light">
              Admissions are open to all irrespective of caste, creed, or race. A child must have completed 3 years on July 1st for L.K.G. Admission is granted only on the basis of Entrance Test and Merit.
            </Paragraph>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <section aria-labelledby="admission-documents-heading" className="rounded-3xl border border-slate-200 p-8">
              <Title id="admission-documents-heading" level={2}>Documents to prepare</Title>
              <Paragraph className="text-gray-600 leading-relaxed">
                The published admission guidance asks families to submit the
                application with supporting documents. Prepare the following
                and confirm with the school whether any additional or updated
                documents are needed for the student’s class and session.
              </Paragraph>
              <ul className="list-disc space-y-2 pl-6 text-gray-600">
                <li>Student’s birth certificate</li>
                <li>Previous school report card, where applicable</li>
                <li>Transfer Certificate (TC), where applicable</li>
                <li>Student photographs</li>
              </ul>
            </section>

            <section aria-labelledby="admission-assessment-heading" className="rounded-3xl border border-slate-200 p-8">
              <Title id="admission-assessment-heading" level={2}>Age and assessment</Title>
              <Paragraph className="text-gray-600 leading-relaxed">
                The current admission page states that an LKG applicant must
                have completed three years by 1 July. It describes an
                interaction for primary classes and a written test or
                interview for senior classes. Ask the office to confirm the
                applicable age cut-off, assessment format and grade placement
                for the 2027–28 session.
              </Paragraph>
              <Paragraph className="!mb-0 text-gray-600 leading-relaxed">
                The school states that selection is based on merit and
                assessment performance. Applying does not guarantee a seat;
                availability and final requirements should be confirmed with
                the school.
              </Paragraph>
            </section>
          </div>

          <section aria-labelledby="admission-faq-heading" className="mt-12">
            <Title id="admission-faq-heading" level={2}>Admission questions</Title>
            <div className="mt-5 space-y-3">
              <details className="rounded-2xl border border-slate-200 p-5">
                <summary className="cursor-pointer font-semibold text-slate-900">
                  Where can I get the admission form?
                </summary>
                <p className="mb-0 mt-3 leading-relaxed text-gray-600">
                  The school’s published process says families may obtain a
                  form from the school office or use the online admission form
                  when applications open. Contact the school to confirm that
                  applications are currently being accepted.
                </p>
              </details>
              <details className="rounded-2xl border border-slate-200 p-5">
                <summary className="cursor-pointer font-semibold text-slate-900">
                  What happens after a student is selected?
                </summary>
                <p className="mb-0 mt-3 leading-relaxed text-gray-600">
                  The published process says selected candidates receive an
                  offer letter. The family should follow the instructions in
                  that communication and confirm the current fee amount and
                  payment schedule with the school before paying.
                </p>
              </details>
              <details className="rounded-2xl border border-slate-200 p-5">
                <summary className="cursor-pointer font-semibold text-slate-900">
                  How do I confirm fees and seat availability?
                </summary>
                <p className="mb-0 mt-3 leading-relaxed text-gray-600">
                  Fees and available seats may change by session and grade.
                  Review the published{" "}
                  <Link className="font-semibold text-blue-700 underline" to="/fees">
                    fee information
                  </Link>{" "}
                  and contact the office for the amount payable for a specific
                  student.
                </p>
              </details>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/admission-form"
                className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
              >
                Open admission form
              </Link>
              <Link
                to="/admission-policy"
                className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
              >
                Read admission policy
              </Link>
            </div>
          </section>
        </div>
      </section>
      <Marquee text="Admissions Open for 2027-28 | Apply Now to Join Marigold's Legacy of Excellence!" />
      <Footer />
    </div>
  );
};

export default AdmissionProcess;