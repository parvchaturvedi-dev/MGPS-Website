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
                  The school’s published history records that Mr. V. K. Chaturvedi founded Marigold Secondary School in Behror in 2000. The institution describes its educational approach as combining academic learning with discipline, values and student development. Its current curriculum information identifies the Rajasthan Board (RBSE) framework and describes structured, concept-focused teaching.
                </Paragraph>
                <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
                  <Text className="!text-white font-mono text-xs uppercase tracking-widest">
                    School information
                  </Text>
                  <Paragraph className="!text-white !mt-3 !mb-0">
                    Marigold Secondary School serves learners from Pre-Nursery
                    through Grade 10 at its campus on Hamindpur Road, Behror.
                    Families can contact the school for current academic and
                    admission information.
                  </Paragraph>
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
