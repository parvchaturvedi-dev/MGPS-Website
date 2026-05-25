import React from "react";
import { Typography, Alert } from "antd";
import { motion as Motion } from "framer-motion";
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
            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <Title level={2} className="!mb-6 tracking-tight">Financial & Administrative Guidelines</Title>
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
          </div>
        </div>
      </section>
      <Marquee text="Admissions Open for 2026-27 | Apply Now to Join Marigold's Legacy of Excellence!" />
      <Footer />
    </div>
  );
};

export default AdmissionPolicy;