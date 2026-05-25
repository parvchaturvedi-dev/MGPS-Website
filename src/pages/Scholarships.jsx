import React from "react";
import { Typography, Row, Col } from "antd";
import { motion as Motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Marquee from "../components/Marquee";

const { Title, Paragraph, Text } = Typography;

const Scholarships = () => {
  const types = [
    { title: "Merit-Based", desc: "For consistently high-performing students in academics." },
    { title: "Need-Based", desc: "For students from financially weaker backgrounds." },
    { title: "Sports & Cultural", desc: "For students excelling in extracurricular fields." }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-40 pb-24 px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <Motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <Title className="!text-white !text-5xl md:!text-7xl tracking-tighter !mb-6">Empowering <span className="italic font-serif text-blue-400">Excellence</span></Title>
            <Paragraph className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl mx-auto">
              We aim to nurture future leaders by rewarding hard work and ensuring that quality education has no financial barriers.
            </Paragraph>
          </Motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Row gutter={[40, 40]}>
            {types.map((t, i) => (
              <Col xs={24} md={8} key={i}>
                <Motion.div 
                  whileHover={{ y: -10 }}
                  className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-blue-50 transition-all h-full"
                >
                  <Text className="text-blue-600 font-mono text-[10px] uppercase tracking-widest block mb-4">Category {i+1}</Text>
                  <Title level={3} className="!mb-4">{t.title}</Title>
                  <Paragraph className="text-gray-500 font-light">{t.desc}</Paragraph>
                </Motion.div>
              </Col>
            ))}
          </Row>

          <div className="mt-20 p-12 bg-blue-50 rounded-[3rem] text-center">
            <Title level={2} className="!mb-6">How we award?</Title>
            <Paragraph className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              Scholarships are awarded based on Entrance Test performance and academic records from the previous school. Our committee ensures a fair selection to help talented students pursue their dreams.
            </Paragraph>
          </div>
        </div>
      </section>
      <Marquee text="Admissions Open for 2026-27 | Join Marigold's Legacy of Excellence!" />
      <Footer />
    </div>
  );
};

export default Scholarships;