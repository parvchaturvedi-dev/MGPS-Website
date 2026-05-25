import React from "react";
import { Typography } from "antd";
import { motion as Motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Marquee from "../components/Marquee";

const { Title, Text } = Typography;

const ExamResult = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-6 pt-20">
        <div className="text-center">
          <Motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            </div>
            <Title className="!text-5xl md:!text-7xl tracking-tighter !m-0">Exams & <br/><span className="italic font-serif text-blue-600">Results</span></Title>
            <div className="mt-6 py-2 px-6 bg-slate-900 text-white rounded-full inline-block">
              <Text className="text-white font-mono uppercase tracking-[0.3em] text-[10px]">Coming Soon</Text>
            </div>
          </Motion.div>
          <Text className="text-gray-400 block max-w-sm mx-auto">
            We are currently digitizing our academic records for the 2025-26 session. Please check back later for updates.
          </Text>
        </div>
      </main>
      <Marquee text="Admissions Open for 2026-27 | Join Marigold's Legacy of Excellence!" />
      <Footer />
    </div>
  );
};

export default ExamResult;