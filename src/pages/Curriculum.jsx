import React from "react";
import { Typography, Row, Col } from "antd";
import { motion as Motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';

const { Title, Paragraph, Text } = Typography;

const Curriculum = () => {
  const features = [
    { title: "RBSE Framework", desc: "Rooted in the Rajasthan Board standards for academic excellence." },
    { title: "CBSE Pedagogy", desc: "Structured teaching methods inspired by CBSE for conceptual clarity." },
    { title: "Analytical Thinking", desc: "Moving beyond rote learning to deep subject understanding." }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 bg-blue-50/50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Text className="text-blue-600 font-mono uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Academic Excellence</Text>
            <Title className="!text-5xl md:!text-7xl tracking-tighter !m-0">Our <span className="italic font-serif text-blue-600">Curriculum</span></Title>
          </Motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Row gutter={[60, 40]} align="middle">
            <Col xs={24} lg={12}>
              <div className="flex flex-col gap-6">
                <Title level={2} className="tracking-tighter text-4xl">Clarity, Concept & Academic Balance.</Title>
                <Paragraph className="text-lg text-gray-500 font-light leading-relaxed">
                  At Marigold Secondary School, our curriculum follows the RBSE framework, strengthened with structured teaching methods inspired by the CBSE pattern to ensure clarity, concept understanding, and academic balance. We focus on building strong fundamentals in every subject, encouraging students to develop analytical thinking, effective communication, and disciplined study habits.
Classroom teaching is interactive, systematic, and aligned with age-appropriate learning goals, ensuring that students progress with confidence and clarity. Beyond academics, equal importance is given to values, moral education, and personality development, helping students grow into responsible individuals with a strong academic foundation and essential life skills.
                </Paragraph>
                <Paragraph className="text-gray-500 font-light leading-relaxed">
                  Beyond academics, equal importance is given to values, moral education, and personality development, helping students grow into responsible individuals.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="grid gap-4">
                {features.map((f, i) => (
                  <Motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all"
                  >
                    <Title level={4} className="!m-0 text-blue-600">{f.title}</Title>
                    <Text className="text-gray-400 text-sm">{f.desc}</Text>
                  </Motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <Marquee />
      <Footer />
    </div>
  );
};

export default Curriculum;