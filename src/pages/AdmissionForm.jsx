import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Typography,
  Input,
  Select,
  DatePicker,
  Radio,
  Upload,
  Button,
  Row,
  Col,
  message,
  ConfigProvider,
} from "antd";
import {
  InboxOutlined,
  SaveOutlined,
  SendOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { motion as Motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // EmailJS Import kiya
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";

const { Title, Text, Paragraph } = Typography;
const { Dragger } = Upload;

const AdmissionForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      dob: null,
      gender: "male",
      class: "",
      fatherName: "",
      phone: "",
      email: "",
    },
  });

  // --- YE WALA FUNCTION BADLA HAI ---
  const onSubmit = async (data) => {
    setLoading(true);
    const currentYear = new Date().getFullYear();
    const nextYearShort = (currentYear + 1).toString().slice(-2);
    const dynamicSession = `${currentYear}-${nextYearShort}`;

    // EmailJS ke liye data taiyar kiya
    const templateParams = {
      fullName: data.fullName,
      session: dynamicSession,
      dob: data.dob ? data.dob.format("DD-MM-YYYY") : "Not Provided",
      gender: data.gender,
      class: data.class,
      fatherName: data.fatherName,
      phone: data.phone,
      email: data.email,
    };

    try {
      // EmailJS Call
      // Pehle 3 params apni EmailJS dashboard se replace karein
      await emailjs.send(
        "service_wavhq1z", // <--- Apni Service ID yahan dalein
        "template_up33a8s", // <--- Apni Template ID yahan dalein
        templateParams,
        "rXZe0qP89fPZViTtU", // <--- Apni Public Key yahan dalein
      );

      messageApi.success(
        "Application submitted successfully! Check your email for confirmation.",
      );
      reset(); // Form clear kar dega
    } catch (error) {
      console.error("Form Error:", error);
      messageApi.error("Submission failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const classes = [
    "Nursery",
    "LKG",
    "UKG",
    ...Array.from({ length: 10 }, (_, i) => (i + 1).toString()),
  ];

  const inputStyle =
    "h-12 rounded-xl border-slate-200 hover:border-blue-400 focus:border-blue-500 transition-all";

  return (
    <ConfigProvider
      theme={{ token: { colorPrimary: "#2563eb", borderRadius: 12 } }}
    >
      {contextHolder}
      <div className="bg-white min-h-screen">
        <Navbar />

        <section className="pt-32 pb-16 bg-linear-to-b from-slate-50 to-white px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Text className="text-blue-600 font-mono uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">
                Direct Email Enrollment
              </Text>
              <Title className="text-5xl! md:text-6xl! tracking-tight m-0! font-black!">
                Admission{" "}
                <span className="italic font-serif text-blue-600 font-light">
                  Portal
                </span>
              </Title>
              <Paragraph className="mt-4 text-gray-500 font-light text-lg">
                Academic Session 2026-27
              </Paragraph>
            </Motion.div>
          </div>
        </section>

        <section className="pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100"
            >
              {/* --- Student Info --- */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8 border-b pb-4">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <UserOutlined />
                  </div>
                  <Title level={4} className="m-0!">
                    Student Information
                  </Title>
                </div>

                <Row gutter={24}>
                  <Col xs={24} md={12} className="mb-4">
                    <label className="block mb-2 font-medium">Full Name</label>
                    <Controller
                      name="fullName"
                      control={control}
                      rules={{ required: "Full name is required" }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="As per Birth Certificate"
                          className={inputStyle}
                          status={errors.fullName ? "error" : ""}
                        />
                      )}
                    />
                    {errors.fullName && (
                      <Text type="danger" className="text-xs">
                        {errors.fullName.message}
                      </Text>
                    )}
                  </Col>

                  <Col xs={24} md={12} className="mb-4">
                    <label className="block mb-2 font-medium">
                      Date of Birth
                    </label>
                    <Controller
                      name="dob"
                      control={control}
                      rules={{ required: "DOB is required" }}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          className="w-full h-12 rounded-xl"
                          status={errors.dob ? "error" : ""}
                          disabledDate={(current) =>
                            current && current > new Date()
                          }
                        />
                      )}
                    />
                    {errors.dob && (
                      <Text type="danger" className="text-xs block">
                        {errors.dob.message}
                      </Text>
                    )}
                  </Col>
                </Row>

                <Row gutter={24}>
                  <Col xs={24} md={12} className="mb-4">
                    <label className="block mb-2 font-medium">Gender</label>
                    <Controller
                      name="gender"
                      control={control}
                      render={({ field }) => (
                        <Radio.Group
                          {...field}
                          optionType="button"
                          buttonStyle="solid"
                          className="w-full flex"
                        >
                          <Radio value="male" className="flex-1 text-center">
                            Male
                          </Radio>
                          <Radio value="female" className="flex-1 text-center">
                            Female
                          </Radio>
                          <Radio value="other" className="flex-1 text-center">
                            Other
                          </Radio>
                        </Radio.Group>
                      )}
                    />
                  </Col>

                  <Col xs={24} md={12} className="mb-4">
                    <label className="block mb-2 font-medium">
                      Class Applying For
                    </label>
                    <Controller
                      name="class"
                      control={control}
                      rules={{ required: "Please select a class" }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          placeholder="Select level"
                          className="w-full h-12"
                          status={errors.class ? "error" : ""}
                        >
                          {classes.map((cls) => (
                            <Select.Option key={cls} value={cls}>
                              Grade {cls}
                            </Select.Option>
                          ))}
                        </Select>
                      )}
                    />
                    {errors.class && (
                      <Text type="danger" className="text-xs">
                        {errors.class.message}
                      </Text>
                    )}
                  </Col>
                </Row>
              </div>

              {/* --- Guardian Contact --- */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8 border-b pb-4">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <PhoneOutlined />
                  </div>
                  <Title level={4} className="m-0!">
                    Guardian Contact
                  </Title>
                </div>

                <Row gutter={24}>
                  <Col xs={24} md={12} className="mb-4">
                    <label className="block mb-2 font-medium">
                      Primary Guardian Name
                    </label>
                    <Controller
                      name="fatherName"
                      control={control}
                      rules={{ required: "Guardian name is required" }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="Father/Mother name"
                          className={inputStyle}
                          status={errors.fatherName ? "error" : ""}
                        />
                      )}
                    />
                    {errors.fatherName && (
                      <Text type="danger" className="text-xs">
                        {errors.fatherName.message}
                      </Text>
                    )}
                  </Col>

                  <Col xs={24} md={12} className="mb-4">
                    <label className="block mb-2 font-medium">
                      Contact Number
                    </label>
                    <Controller
                      name="phone"
                      control={control}
                      rules={{
                        required: "Phone is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Must be 10 digits",
                        },
                      }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          prefix={<span className="text-gray-400">+91</span>}
                          className={inputStyle}
                          status={errors.phone ? "error" : ""}
                        />
                      )}
                    />
                    {errors.phone && (
                      <Text type="danger" className="text-xs">
                        {errors.phone.message}
                      </Text>
                    )}
                  </Col>
                </Row>

                <div className="mb-4">
                  <label className="block mb-2 font-medium">
                    Email Address
                  </label>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email",
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        prefix={<MailOutlined className="text-gray-300" />}
                        placeholder="email@domain.com"
                        className={inputStyle}
                        status={errors.email ? "error" : ""}
                      />
                    )}
                  />
                  {errors.email && (
                    <Text type="danger" className="text-xs">
                      {errors.email.message}
                    </Text>
                  )}
                </div>
              </div>

              {/* --- Buttons --- */}
              <div className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    icon={<SendOutlined />}
                    className="flex-2 h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-lg text-lg font-bold"
                  >
                    Submit Form
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <Marquee text="Admissions Open for 2026-27 | Fast-Track Email Enrollment Active!" />
        <Footer />
      </div>
    </ConfigProvider>
  );
};

export default AdmissionForm;
