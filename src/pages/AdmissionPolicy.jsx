import React from "react";
import { Typography, Alert } from "antd";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee'
import Footer from '../components/Footer';

const { Title, Paragraph, Text } = Typography;

const AdmissionPolicy = () => {
  const policies = [
    "Fees once deposited will not be refunded in any case.",
    "A student must pay the fees until he gets T.C., even if he remains absent.",
    "A month's notice is required for the withdrawal of a student or else one month's fee will be charged.",
    "Fee for May and June is collected along with February and March respectively.",
    "If fees are not deposited by the end of the month, the student's name will be struck off the rolls."
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 bg-blue-600 px-6 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Title className="!text-white !text-5xl md:!text-7xl tracking-tighter !m-0">Admission <span className="italic font-serif opacity-70">Policy</span></Title>
            <Paragraph className="text-blue-100 text-xl mt-6 font-light">Transparent, fair, and merit-based enrollment.</Paragraph>
          </Motion.div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-10">
            <section aria-labelledby="admission-eligibility-heading" className="rounded-3xl border border-slate-200 p-8 md:p-10">
              <Title id="admission-eligibility-heading" level={2}>
                Admission eligibility and selection
              </Title>
              <Paragraph className="text-gray-600 leading-relaxed">
                The school states that admissions are open irrespective of
                caste, creed or race. Its published guidance specifies that an
                LKG applicant must have completed three years by 1 July. It
                describes interactions for primary classes and a written test
                or interview for senior classes, with selection based on merit
                and assessment performance. Confirm age criteria, grade
                placement, assessment arrangements and seat availability for
                the current session with the school.
              </Paragraph>
              <Paragraph className="!mb-0 text-gray-600 leading-relaxed">
                Families can review the{" "}
                <Link className="font-semibold text-blue-700 underline" to="/admission-process">
                  step-by-step admission process
                </Link>{" "}
                and contact the office before submitting documents or payment.
              </Paragraph>
            </section>

            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <Title level={2} className="!mb-6 tracking-tight">Financial & Administrative Guidelines</Title>
              <Paragraph className="text-gray-600 leading-relaxed">
                The following financial and administrative rules are published
                by the school. Families should request clarification from the
                office if a rule, date or charge is unclear before making a
                payment or requesting a transfer certificate.
              </Paragraph>
              <div className="flex flex-col gap-4">
                {policies.map((p, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <Text className="text-lg text-gray-600 leading-relaxed">{p}</Text>
                  </div>
                ))}
              </div>
            </div>
            
            <Alert 
              message="Seat Availability"
              description="The school accepts applications for a limited number of seats each academic session. Ensure all documents are submitted carefully at the school reception."
              type="info"
              showIcon
              className="rounded-2xl p-6"
            />

            <section aria-labelledby="policy-questions-heading" className="rounded-3xl bg-blue-50 p-8 md:p-10">
              <Title id="policy-questions-heading" level={2}>
                Need clarification before applying?
              </Title>
              <Paragraph className="text-gray-600 leading-relaxed">
                Fee amounts, payment dates, class availability and admission
                requirements can depend on the academic session and grade.
                Contact Marigold Secondary School directly to confirm the
                current terms. The published 2027–28 fee table and contact
                information are available online.
              </Paragraph>
              <div className="flex flex-wrap gap-5 text-sm font-semibold">
                <Link className="text-blue-700 underline" to="/fees">
                  View 2027–28 fees
                </Link>
                <Link className="text-blue-700 underline" to="/contact-us">
                  Contact the school
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Marquee text="Admissions Open for 2027-28 | Apply Now to Join Marigold's Legacy of Excellence!" />
      <Footer />
    </div>
  );
};

export default AdmissionPolicy;