import React from "react";
import { Typography, Row, Col, Card, Button } from "antd";
import { motion as Motion } from "framer-motion";
import Marquee from "../components/Marquee";
import { Link } from "react-router-dom";

import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const { Title, Paragraph, Text } = Typography;

const ContactUs = () => {
  const contactInfo = [
    {
      icon: <EnvironmentOutlined className="text-blue-600 text-2xl" />,
      title: "School Address",
      content:
        "Near Nagarpalika Board, Hamindpur Road, Behror, Rajasthan 301701",
    },
    {
      icon: <PhoneOutlined className="text-blue-600 text-2xl" />,
      title: "Phone Numbers",
      content: (
        <a
          href="tel:+919414638988"
          className="hover:text-blue-500 transition-colors"
        >
          +91-9414638988
        </a>
      ),
    },
    {
      icon: <MailOutlined className="text-blue-600 text-2xl" />,
      title: "Email Address",
      content: (
        <a
          href="mailto:marigoldvijay@gmail.com"
          className="hover:text-blue-500 transition-colors cursor-pointer"
        >
          marigoldvijay@gmail.com
        </a>
      ),
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Header Section */}
      <section className="pt-40 pb-20 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Text className="text-blue-600 font-mono uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">
              Get In Touch
            </Text>
            <Title className="!text-5xl md:!text-7xl tracking-tighter !m-0">
              Contact{" "}
              <span className="italic font-serif text-blue-600">Us</span>
            </Title>
            <Paragraph className="mt-6 text-lg text-gray-500 font-light max-w-2xl mx-auto">
              We're here to answer your questions, provide information about
              admissions, or help with any other needs.
            </Paragraph>
          </Motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Row gutter={[40, 40]}>
            {/* Contact Details Column */}
            <Col xs={24} lg={10}>
              <div className="flex flex-col gap-8">
                {contactInfo.map((info, index) => (
                  <Motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-6 p-6 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-blue-50 transition-all bg-white"
                  >
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <Title level={4} className="!mb-1">
                        {info.title}
                      </Title>
                      <Text className="text-gray-500 whitespace-pre-line">
                        {info.content}
                      </Text>
                    </div>
                  </Motion.div>
                ))}

                {/* Admission CTA */}
                <Card className="bg-blue-600 rounded-[2rem] border-none shadow-2xl shadow-blue-200 overflow-hidden">
                  <div className="relative z-10">
                    <Title level={3} className="!text-white !mb-4">
                      Ready to Join?
                    </Title>
                    <Paragraph className="text-blue-100 mb-6">
                      Fill our admission form to start the enrollment process
                      today.
                    </Paragraph>
                    <Link to="/admission-form">
                      <Button
                        type="primary"
                        size="large"
                        icon={<FileTextOutlined />}
                        className="bg-white !text-blue-600 border-none hover:!bg-blue-50 h-12 rounded-full px-8 font-bold"
                      >
                        Admission Form
                      </Button>
                    </Link>
                  </div>
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                </Card>
              </div>
            </Col>

            {/* Map and Hours Column */}
            <Col xs={24} lg={14}>
              <div className="flex flex-col gap-8 h-full">
                {/* Google Maps Embed */}
                <div className="w-full h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-200">
                  <iframe
                    title="Marigold School Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.7547164475454!2d76.26345357596043!3d27.896772476075193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396daf4110060b03%3A0xf38792121128f2be!2sMarigold%20Secondary%20School!5e0!3m2!1sen!2sin!4v1716200000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Office Hours */}
                <div className="p-8 bg-dadada rounded-[2.5rem] text-white flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-4">
                    <ClockCircleOutlined className="text-3xl text-blue-400" />
                    <div>
                      <Text className="text-white font-mono text-[10px] uppercase tracking-widest block">
                        Operational Hours
                      </Text>
                      <Title level={4} className="!text-white !m-0">
                        Office Hours
                      </Title>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-center md:text-right">
                    <Text className="text-white">
                      Mon — Sat:{" "}
                      <span className="text-blue-400">8:00 AM - 4:00 PM</span>
                    </Text>
                    <Text className="text-white">
                      Sunday:{" "}
                      <span className="text-blue-400">8:00 AM - 6:00 PM</span>
                    </Text>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <Marquee text="Admissions Open for 2026-27 | Apply Now to Join Marigold's Legacy of Excellence!" />
      <Footer />
    </div>
  );
};

export default ContactUs;
