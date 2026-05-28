import React from "react";
import { Typography, Row, Col, Timeline } from "antd";
import { motion as Motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';

const { Title, Paragraph, Text } = Typography;

const OurHistory = () => {
  // FIXED: label -> title | children -> content (standard for v5.10+)
  const historyItems = [
    { title: <Text className="font-bold text-blue-600">2000</Text>, children: 'Foundation laid as Behror’s first English medium institution.' },
    { title: <Text className="font-bold">2010</Text>, children: 'Expansion of modern infrastructure and science laboratories.' },
    { title: <Text className="font-bold">2018</Text>, children: 'Integration of smart classes and technology-driven pedagogy.' },
    { title: <Text className="font-bold text-blue-600">2025</Text>, children: 'Celebrating 26 Years of educational superiority.' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Text className="text-blue-600 font-mono uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Legacy & Evolution</Text>
            <Title className="!text-5xl md:!text-7xl tracking-tighter !m-0">Our History <br /><span className="italic font-serif text-blue-600">Since 2000</span></Title>
          </Motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Row gutter={[60, 40]} align="middle">
            <Col xs={24} lg={12}>
              <Title level={2} className="tracking-tighter !mb-8 text-4xl">Building a Tradition of Excellence.</Title>
              <Paragraph className="text-lg text-gray-500 font-light leading-relaxed">
                Established in 2000, Marigold Secondary School, Behror began with a simple yet powerful vision—to provide quality education rooted in values, discipline, and academic excellence. What started as a small institution with limited resources has grown into a respected educational establishment known for its dedication, commitment, and student-centric approach.Over the past 26 Years, the school has continuously evolved to meet the changing needs of education. Classrooms, infrastructure, teaching methods, and learning environments have progressed from traditional systems to modern, technology-enabled education. Through persistent effort and strong leadership, Marigold Secondary School has built a strong foundation where students are encouraged to learn, explore, grow, and excel.Today, the institution stands as a symbol of trust in the community—proud of its journey, achievements, and the thousands of students who have walked through its doors and moved ahead to build successful futures.
              </Paragraph>
            </Col>
            <Col xs={24} lg={12}>
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100">
                {/* FIXED: mode="start" replaces mode="left" */}
                <Timeline mode="start" items={historyItems} />
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

export default OurHistory;