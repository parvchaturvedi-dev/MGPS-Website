import React from "react";
import { Typography, Row, Col, Space } from "antd";
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
import Founder from '../assets/director.jpg';

const { Title, Paragraph, Text } = Typography;

const OurFounder = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Row gutter={[80, 40]} align="middle">
            <Col xs={24} lg={10}>
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white grayscale">
                <img src={Founder} alt="Founder" className="w-full h-full object-cover"/>
              </div>
            </Col>
            <Col xs={24} lg={14}>
              {/* FIXED: Using flex-col instead of Space direction if warnings persist */}
              <div className="flex flex-col gap-6">
                
                <Title className="!text-5xl md:!text-6xl tracking-tighter">Mr. V. K. Chaturvedi <br/><span className="italic font-serif text-blue-600">The Visionary</span></Title>
                <Paragraph className="text-lg text-gray-500 font-light leading-relaxed">
                  Marigold Secondary School owes its foundation and legacy to Mr. V. K. Chaturvedi, a visionary educationist whose commitment and determination transformed a dream into reality. With a forward-thinking mindset and a strong belief in the power of education, he established Marigold Secondary School as Behror’s first English medium institution, at a time when quality English education was limited and rarely accessible in the region.His mission was not only to build a school but to create a platform where children could receive modern education without losing their cultural values, discipline, and moral grounding. Through his persistent efforts, guidance, and leadership, the school grew from a modest beginning into a respected educational institution known for excellence, integrity, and student-focused learning.Today, Mr. Chaturvedi’s vision continues to guide the institution. His legacy lives on in every classroom, every achievement, and every student who walks forward confidently into the future. Marigold Secondary School stands as a proud reminder of his lifelong dedication to serving the community through education and empowering generations to grow, learn, and lead.
                </Paragraph>
                <div className="p-10 bg-slate-900 rounded-[2rem] text-white">
                  <Paragraph className="text-xl font-light italic !text-white !mb-4">
                    “Education is not just learning lessons, but shaping character.”
                  </Paragraph>
                  <Text className="!text-white font-mono text-xs uppercase tracking-widest">— Message from the Director</Text>
                </div>
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

export default OurFounder;
