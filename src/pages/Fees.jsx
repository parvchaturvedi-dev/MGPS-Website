import React from "react";
import { Typography, Table } from "antd";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Marquee from "../components/Marquee";

const { Title, Text, Paragraph } = Typography;

const Fees = () => {
  const columns = [
    { title: 'Class', dataIndex: 'class', key: 'class', render: text => <Text className="font-bold">{text}</Text> },
    { title: 'Medium', dataIndex: 'medium', key: 'medium' },
    { title: 'Tuition Fee', dataIndex: 'fee', key: 'fee', render: text => <Text className="text-blue-600 font-mono">{text}</Text> },
    { title: 'Other Charges', dataIndex: 'other', key: 'other', render: () => <Text className="text-gray-400 italic text-xs">As per schedule</Text> },
  ];

  const data = [
    { key: '1', class: 'Nur. - UKG', medium: 'English', fee: '₹26,000/-' },
    { key: '2', class: 'Class 1 - 5', medium: 'English', fee: '₹28,500/-' },
    { key: '3', class: 'Class 6 - 8', medium: 'English', fee: '₹31,500/-' },
    { key: '4', class: 'Class 9 - 10', medium: 'English', fee: '₹35,500/-' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Title className="!text-5xl md:!text-7xl tracking-tighter !m-0">Fee <span className="italic font-serif text-blue-600">Structure</span></Title>
          <Paragraph className="mt-4 text-gray-400 font-mono text-xs uppercase tracking-widest">Session 2025-26</Paragraph>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Table 
            columns={columns} 
            dataSource={data} 
            pagination={false} 
            className="shadow-2xl shadow-slate-100 rounded-3xl overflow-hidden border border-slate-100"
          />
          <div className="mt-12 text-center">
            <Text className="text-gray-400 text-sm">Note: Fees are subject to change every academic year with prior notification.</Text>
          </div>
        </div>
      </section>
      <Marquee text="Admissions Open for 2026-27 | Join Marigold's Legacy of Excellence!" />
      <Footer />
    </div>
  );
};

export default Fees;