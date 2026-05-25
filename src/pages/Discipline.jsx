import React from "react";
import { Typography } from "antd";
import { motion as Motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';

const { Title, Paragraph, Text } = Typography;

const Discipline = () => {
  const rules = [
    "Punctuality and regular attendance are mandatory.",
    "Neat and proper uniform must be worn at all times.",
    "Students must respect teachers, staff, and peers.",
    "Honesty, integrity, and responsibility toward studies are expected.",
    "Good manners, cleanliness, and care for school property must be observed."
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-40 pb-24 px-6 bg-slate-900 text-white text-center">
        <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Title className="!text-white !text-5xl md:!text-7xl tracking-tighter !mb-10">Rules & <span className="italic font-serif text-blue-400">Discipline</span></Title>
          <div className="h-px w-24 bg-blue-500 mx-auto mb-10" />
          <Paragraph className="text-xl md:text-2xl text-slate-400 font-light italic">
            "Discipline is the bridge between learning and excellence."
          </Paragraph>
        </Motion.div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-12">
            <div>
              <Title level={2} className="tracking-tighter !mb-6">Foundation of Character</Title>
              <Paragraph className="text-lg text-gray-500 font-light leading-relaxed">
                At Marigold Secondary School, discipline is an essential part of education. We firmly believe that a structured environment helps students learn better and develop strong moral character.
              </Paragraph>
            </div>

            <div className="grid gap-4">
              {rules.map((rule, index) => (
                <Motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold mt-1">
                    {index + 1}
                  </div>
                  <Text className="text-gray-700 font-medium text-base">{rule}</Text>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Marquee text="Admissions Open for 2026-27 | 25 Years of Excellence! | Apply Now!" />
      <Footer />
    </div>
  );
};

export default Discipline;