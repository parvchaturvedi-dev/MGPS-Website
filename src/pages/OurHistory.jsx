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
    { title: <Text className="font-bold text-blue-600">2000</Text>, children: 'Marigold Secondary School was established in Behror, Rajasthan.' },
    { title: <Text className="font-bold">Today</Text>, children: 'The school describes a learning approach based on the RBSE framework, structured concept-focused teaching, smart classrooms, values and student development.' },
    { title: <Text className="font-bold text-blue-600">2026</Text>, children: 'The school marked 26 years since its establishment in 2000.' },
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
                Marigold Secondary School was established in Behror in 2000. Its published history describes an ongoing development of classrooms, infrastructure and teaching methods. Today, the school describes its academic programme as following the RBSE framework, with structured teaching methods inspired by the CBSE pattern. The school states that its learning priorities include subject fundamentals, conceptual clarity, analytical thinking, communication, disciplined study habits, values and personality development.
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