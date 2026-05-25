import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { motion as Motion } from "framer-motion";
import { FileSearchOutlined, SendOutlined, TeamOutlined, TrophyOutlined, CheckCircleOutlined } from "@ant-design/icons";
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
        </div>
      </section>
      <Marquee text="Admissions Open for 2026-27 | Apply Now to Join Marigold's Legacy of Excellence!" />
      <Footer />
    </div>
  );
};

export default AdmissionProcess;