import React from "react";
import { Row, Col, Typography, Space } from "antd";
import { motion as Motion } from "framer-motion";
import {
  ThunderboltOutlined,
  SafetyCertificateOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
// Make sure this path is correct based on your folder structure
import Logo from "../assets/logo.png";

const { Title, Paragraph, Text } = Typography;

const AboutUs = () => {
  const stats = [
    {
      label: "Established",
      value: 2000,
      suffix: "",
      icon: <SafetyCertificateOutlined />,
    },
    {
      label: "School levels",
      value: "Pre-Nursery–10",
      suffix: "",
      icon: <ThunderboltOutlined />,
    },
    {
      label: "Curriculum",
      value: "RBSE",
      suffix: "",
      icon: <UsergroupAddOutlined />,
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Row
          gutter={[40, 60]}
          align="middle"
          className="flex-col-reverse lg:flex-row"
        >
          {/* --- LEFT: IMAGE COMPOSITION (Responsive Fix) --- */}
          <Col xs={24} lg={11}>
            <div className="relative w-full px-2 mb-12 lg:mb-0">
              {/* Main Image Container */}
              <Motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-3xl md:rounded-[2.5rem] overflow-hidden border-[6px] md:border-12px border-white shadow-2xl mx-auto"
              >
                <img
                  src={Logo}
                  alt="Marigold Secondary School logo"
                  /* MOBILE: h-auto aur aspect-square taaki image cut na ho. 
           DESKTOP: h-[500px] maintain kiya hai. 
        */
                  className="w-full h-auto aspect-square md:aspect-auto md:h-125 object-contain object-center"
                />
              </Motion.div>

              {/* Floating Stat Card (Adjusted for Mobile) */}
              <Motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                /* Mobile par scale thoda chhota kiya hai taaki screen se bahar na jaye
                 */
                className="absolute -bottom-4 -right-2 md:-bottom-10 md:-right-10 z-20 bg-blue-600 p-4 md:p-8 rounded-[1.2rem] md:rounded-4xl shadow-xl text-white transform scale-90 md:scale-100"
              >
                <Title
                  level={2}
                  className="text-white m-0! tracking-tighter text-lg md:text-3xl"
                >
                  2000
                </Title>
                <Text className="text-blue-100 font-mono uppercase tracking-widest text-[8px] md:text-[10px] block">
                  Established Year
                </Text>
              </Motion.div>

              {/* Decorative background element (Hidden on smallest phones to avoid overflow) */}
              <div className="absolute -top-4 -left-4 md:-top-10 md:-left-10 w-24 h-24 md:w-64 md:h-64 bg-gray-50 rounded-full z-0 hidden xs:block" />
            </div>
          </Col>

          {/* --- RIGHT: CONTENT --- */}
          <Col xs={24} lg={13}>
            <Space direction="vertical" size="large" className="w-full">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Text className="text-blue-600 font-mono uppercase tracking-[0.2em] md:tracking-[0.4em] font-bold text-[10px] md:text-xs block mb-3 md:mb-4">
                  Legacy in Behror
                </Text>
                <Title
                  level={1}
                  className="text-3xl! md:text-5xl! lg:text-6xl! tracking-tighter mb-6! md:mb-8!"
                >
                  Nurturing Minds, <br className="hidden md:block" />
                  Empowering Futures
                </Title>

                <div className="space-y-4 md:space-y-6">
                  <Paragraph className="text-base md:text-lg text-gray-500 font-light leading-relaxed">
                    Marigold Secondary School is an educational institution in
                    Behror, established in 2000. The school describes its
                    approach as combining academic learning with student
                    development and a technology-supported learning
                    environment.
                  </Paragraph>

                  <Paragraph className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                    The school aims to support the development of every child,
                    helping students grow into{" "}
                    <Text italic>
                      confident, responsible, and compassionate
                    </Text>{" "}
                    individuals ready to meet the challenges of the future.
                  </Paragraph>
                </div>
              </Motion.div>

              {/* Grid Stats */}
              <div className="pt-6 md:pt-8 border-t border-gray-100 mt-4">
                {/* Gutter ko thoda kam kiya hai mobile ke liye taaki space bache */}
                <Row gutter={[8, 16]} justify="start">
                  {stats.map((item, index) => (
                    // xs={8} ka matlab hai 24/8 = 3 items per row
                    <Col xs={8} sm={8} key={index}>
                      <Motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {/* Mobile par Space vertical na ho isliye direction="horizontal" (default) rakhein */}
                        <Space
                          align="start"
                          size="middle"
                        >
                          <div className="text-blue-600 text-base md:text-xl mt-1">
                            {item.icon}
                          </div>
                          <div>
                            <div className="flex items-baseline gap-0.5 md:gap-1">
                              <span className="text-sm md:text-2xl font-bold tracking-tighter">
                                {item.value}
                              </span>
                              <span className="text-blue-600 font-bold text-[10px] md:text-base">
                                {item.suffix}
                              </span>
                            </div>
                            <Text className="text-[7px] md:text-[10px] uppercase tracking-tighter md:tracking-widest text-gray-400 font-mono block leading-tight">
                              {item.label}
                            </Text>
                          </div>
                        </Space>
                      </Motion.div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Space>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutUs;
