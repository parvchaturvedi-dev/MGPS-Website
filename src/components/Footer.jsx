import React from "react";
import {
  Row,
  Col,
  Typography,
  Space,
  Input,
  Button,
  Divider,
  ConfigProvider,
} from "antd";
import {
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const { Title, Text, Paragraph } = Typography;

const FullFooter = () => {
  const quickLinks = [
    {
      title: "Institution",
      links: [
        { label: "About Us", path: "/about-us" },
        { label: "Our Faculty", path: "/about-us" },
        { label: "Careers", path: "/contact-us" },
        { label: "News & Gallery", path: "/gallery" },
      ],
    },
    {
      title: "Academics",
      links: [
        { label: "Curriculum", path: "/curriculum" },
        { label: "Library", path: "/curriculum" },
        { label: "Labs & Facilities", path: "/curriculum" },
        { label: "Examinations", path: "/exam-result" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Admission Policy", path: "/admission-policy" },
        { label: "Fee Structure", path: "/fees" },
        { label: "Scholarships", path: "/scholarships" },
        { label: "Contact Us", path: "/contact-us" },
      ],
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2563eb",
          borderRadius: 8,
        },
      }}
    >
      <footer
        id="footer-section"
        className="bg-white pt-20 border-t border-gray-100 font-sans"
      >
        <div className="max-w-7xl mx-auto px-6">
          <Row gutter={[40, 40]}>
            {/* --- COLUMN 1: BRAND & NEWSLETTER --- */}
            <Col xs={24} lg={8}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <img
                    src={Logo}
                    alt="Marigold Secondary School Behror logo"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <Title
                      level={3}
                      className="m-0 tracking-tighter uppercase mb-0!"
                    >
                      Marigold Secondary School Behror
                    </Title>
                    <Text className="text-xs uppercase tracking-[0.25em] text-gray-500">
                      Behror, Rajasthan
                    </Text>
                  </div>
                </div>
                <Paragraph className="text-gray-500 font-light max-w-xs leading-relaxed">
                  Cultivating curiosity and character in every student since
                  2000. Join our elite community for weekly updates.
                </Paragraph>
                <div className="flex gap-2 max-w-sm">
                  <Input
                    placeholder="Your email"
                    variant="filled"
                    className="rounded-full h-12 bg-gray-50 border-none px-6 focus:bg-white transition-all"
                  />
                  <Link to="/admission-form">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<ArrowRightOutlined />}
                      className="h-12 w-12 bg-black hover:bg-blue-600! flex items-center justify-center border-none shadow-lg shadow-blue-200"
                    />
                  </Link>
                </div>
              </div>
            </Col>

            {/* --- QUICK LINKS --- */}
            {quickLinks.map((section, idx) => (
              <Col xs={12} md={8} lg={4} key={idx}>
                <h4 className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-blue-600 font-bold">
                  {section.title}
                </h4>
                <ul className="list-none p-0 space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Link
                          to={link.path}
                          className="text-gray-500! hover:text-black! transition-colors font-medium text-sm"
                        >
                          {link.label}
                        </Link>
                      </Motion.div>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}

            {/* --- ADDRESS --- */}
            <Col xs={24} md={12} lg={4}>
              <h4 className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-blue-600 font-bold">
                Address
              </h4>
              <Space
                orientation="vertical"
                size="large"
                className="text-gray-500"
              >
                <div className="flex gap-3">
                  <EnvironmentOutlined className="mt-1 text-black text-lg" />
                  <Text className="text-gray-500 text-sm">
                    Near Bypass Chowk, <br />
                    Hamindpur Road,
                    <br />
                    Behror (301701)
                  </Text>
                </div>
                <div className="flex gap-3">
                  <PhoneOutlined className="text-black text-lg" />
                  <a
                    href="tel:+919414638988"
                    className="hover:text-blue-500 transition-colors"
                  >
                    <Text className="text-gray-500 text-sm">
                      +91-9414638988
                    </Text>
                  </a>
                </div>
              </Space>
            </Col>
          </Row>

          {/* --- MAP SECTION --- */}
          <div className="mt-20 overflow-hidden rounded-4xl shadow-2xl border-8 border-white group relative">
            <div className="absolute inset-0 bg-blue-600/5 pointer-events-none group-hover:bg-transparent transition-colors z-10" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.1696199001794!2d76.26306727526094!3d27.89676767607446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d4d4110060bc3%3A0xf38792121129f28a!2sMarigold%20Secondary%20School!5e0!3m2!1sen!2sin!4v1776352141102!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <Divider className="my-12 opacity-50" />

          {/* --- BOTTOM BAR --- */}
          <div className="pb-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-8 items-center order-2 md:order-1">
              <Text className="text-[10px] font-mono uppercase tracking-widest text-gray-400 cursor-pointer select-none hover:text-gray-600 transition-colors">
                © 2026 Marigold Secondary School
              </Text>

              <div className="flex gap-4">
                <InstagramOutlined
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/marigoldschoolofficial/",
                      "_blank",
                    )
                  }
                  className="text-xl text-gray-300 hover:text-blue-600 cursor-pointer transition-all"
                />

                <FacebookOutlined
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/vijay.chaturvedi.56027/",
                      "_blank",
                    )
                  }
                  className="text-xl text-gray-300 hover:text-blue-600 cursor-pointer transition-all"
                />
              </div>
            </div>

            <div className="flex gap-6 order-1 md:order-2">
              {["Privacy", "Terms", "Sitemap"].map((item) => (
                <Text
                  key={item}
                  className="text-[10px] font-mono uppercase tracking-widest text-gray-400 cursor-pointer hover:text-black transition-colors"
                >
                  {item}
                </Text>
              ))}
            </div>
          </div>

          <div className="text-center text-[13px] uppercase tracking-[0.25em] text-gray-400 pb-8">
            Developed & Managed By Parv Chaturvedi
          </div>
        </div>

        {/* Color Strip */}
        <div className="h-1.5 w-full bg-linear-to-r from-blue-600 via-black to-blue-600" />
      </footer>
    </ConfigProvider>
  );
};

export default FullFooter;
