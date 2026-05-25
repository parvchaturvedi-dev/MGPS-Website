import React from "react";
import { Typography, Row, Col } from "antd";
import { motion as Motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
import CoFounder from '../assets/deputy_director.jpeg';


const { Title, Paragraph, Text } = Typography;

const OurCofounder = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Main Section */}
      <section className="pt-40 pb-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <Row gutter={[80, 40]} align="middle" direction="row-reverse">
            
            {/* Image Column */}
            <Col xs={24} lg={10} className="lg:order-2 grayscale">
              <Motion.div 
                initial={{ opacity: 0, x: 30 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white relative">
                  <img 
                    src={CoFounder} 
                    alt="Mrs. Manju Chaturvedi" 
                    className="w-full h-full object-cover"
                  />
                  {/* Floating Accent */}
                  <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
                </div>
              </Motion.div>
            </Col>

            {/* Text Column */}
            <Col xs={24} lg={14} className="lg:order-1">
              <Motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6" // Using flex instead of Space to avoid AntD warnings
              >
                <div>
                  <Text className="text-blue-600 font-mono uppercase tracking-[0.4em] font-bold text-[10px] block mb-4">
                    Strength & Compassion
                  </Text>
                  <Title className="!text-5xl md:!text-6xl tracking-tighter !mb-0">
                    Mrs. Manju Chaturvedi <br />
                    <span className="italic font-serif text-blue-600">The Nurturer</span>
                  </Title>
                </div>

                

                <div className="space-y-4">
                  <Paragraph className="text-lg text-gray-500 font-light leading-relaxed">
                    Mrs. Manju Chaturvedi, Deputy Director of Marigold Secondary School, has been a constant source of support, strength, and dedication since the institution’s beginning.
                  </Paragraph>
                  <Paragraph className="text-gray-500 font-light leading-relaxed">
                    With her nurturing vision and unwavering commitment to students’ well-being, she played a key role in shaping the school’s culture of discipline, care, and moral values. Her focus remains on creating a learning environment that feels supportive, secure, and inspiring.
                  </Paragraph>
                </div>

                {/* Message Box */}
                <div className="my-6 p-10 bg-blue-600 rounded-[2rem] text-white shadow-xl shadow-blue-100 relative overflow-hidden">
                  <div className="relative z-10">
                    <Paragraph className="text-xl md:text-2xl font-light italic leading-relaxed !text-white !mb-6">
                      “Every child deserves guidance, care, and opportunity. May each student grow with confidence, kindness, and a strong foundation for a bright future.”
                    </Paragraph>
                    <div className="flex items-center gap-4">
                      <div className="h-[1px] w-8 bg-blue-300" />
                      <Text className="text-blue-100 font-mono uppercase tracking-widest text-xs">
                        Message from the Co-Founder
                      </Text>
                    </div>
                  </div>
                  {/* Decorative background circle */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                </div>
              </Motion.div>
            </Col>
          </Row>
        </div>
      </section>

      <Marquee />
      <Footer />
    </div>
  );
};

export default OurCofounder;