import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import dayjs from "dayjs";
import {
  Typography,
  Input,
  Select,
  DatePicker,
  Radio,
  Checkbox,
  Button,
  Row,
  Col,
  message,
  ConfigProvider,
} from "antd";
import { SendOutlined, UserOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";

const { Title, Text, Paragraph } = Typography;
const ADMISSION_SESSION = "2027-28";
const ADMISSION_DRAFT_KEY = "marigold-admission-draft-v1";
const EMPTY_FORM_VALUES = {
  fullName: "",
  dob: null,
  gender: "male",
  class: "",
  fatherName: "",
  phone: "",
  email: "",
  guardianConsent: false,
};

function readAdmissionDraft() {
  if (typeof window === "undefined") {
    return { values: EMPTY_FORM_VALUES, error: null };
  }

  try {
    const storedDraft = sessionStorage.getItem(ADMISSION_DRAFT_KEY);
    if (!storedDraft) return { values: EMPTY_FORM_VALUES, error: null };

    const draft = JSON.parse(storedDraft);
    if (!draft || typeof draft !== "object" || Array.isArray(draft)) {
      throw new Error("Saved admission draft has an invalid format.");
    }

    return {
      values: {
        fullName: typeof draft.fullName === "string" ? draft.fullName : "",
        dob:
          typeof draft.dob === "string" && dayjs(draft.dob).isValid()
            ? dayjs(draft.dob)
            : null,
        gender: ["male", "female", "other"].includes(draft.gender)
          ? draft.gender
          : "male",
        class: typeof draft.class === "string" ? draft.class : "",
        fatherName: typeof draft.fatherName === "string" ? draft.fatherName : "",
        phone: typeof draft.phone === "string" ? draft.phone : "",
        email: typeof draft.email === "string" ? draft.email : "",
        guardianConsent: draft.guardianConsent === true,
      },
      error: null,
    };
  } catch (error) {
    try {
      sessionStorage.removeItem(ADMISSION_DRAFT_KEY);
    } catch (clearError) {
      console.error("Could not clear the invalid admission draft:", clearError);
    }
    return { values: EMPTY_FORM_VALUES, error };
  }
}

const AdmissionForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [draftState] = useState(readAdmissionDraft);
  const draftSaveErrorShown = useRef(false);

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: draftState.values });

  useEffect(() => {
    if (!draftState.error) return;

    console.error("Could not restore the saved admission draft:", draftState.error);
    messageApi.warning(
      "The saved draft could not be restored. Please enter your details again.",
    );
  }, [draftState.error, messageApi]);

  useEffect(() => {
    const subscription = watch((values) => {
      try {
        sessionStorage.setItem(
          ADMISSION_DRAFT_KEY,
          JSON.stringify({
            ...values,
            dob: values.dob?.isValid() ? values.dob.toISOString() : null,
          }),
        );
        draftSaveErrorShown.current = false;
      } catch (error) {
        console.error("Could not save the admission draft:", error);
        if (!draftSaveErrorShown.current) {
          messageApi.error(
            "Your draft could not be saved. Keep this tab open to avoid losing your entries.",
          );
          draftSaveErrorShown.current = true;
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [messageApi, watch]);

  const onSubmit = async (data) => {
    setLoading(true);

    const templateParams = {
      fullName: data.fullName,
      session: ADMISSION_SESSION,
      dob: data.dob ? data.dob.format("DD-MM-YYYY") : "Not Provided",
      gender: data.gender,
      class: data.class,
      fatherName: data.fatherName,
      phone: data.phone,
      email: data.email,
      guardianConsent: "Confirmed",
      consentTimestamp: new Date().toISOString(),
    };

    try {
      await emailjs.send(
        "service_cb2e2o9",
        "template_up33a8s",
        templateParams,
        "rXZe0qP89fPZViTtU",
      );

      messageApi.success(
        "Application submitted. The school will contact you using the details provided.",
      );
      reset(EMPTY_FORM_VALUES);
      try {
        sessionStorage.removeItem(ADMISSION_DRAFT_KEY);
      } catch (error) {
        console.error("Could not clear the submitted admission draft:", error);
        messageApi.warning(
          "The application was submitted, but the saved draft could not be cleared. Please close this tab.",
        );
      }
    } catch (error) {
      console.error("Form Error:", error);
      const errorDetails =
        typeof error === "string"
          ? error
          : error && typeof error === "object" && "text" in error
            ? String(error.text)
            : error instanceof Error
              ? error.message
              : "Please check your connection and try again.";
      messageApi.error(`Application could not be submitted. ${errorDetails}`);
    } finally {
      setLoading(false);
    }
  };

  const classes = [
    "Pre-Nursery",
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
                Academic Session {ADMISSION_SESSION}
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
              <p className="mb-8 rounded-xl bg-blue-50 px-4 py-3 text-sm leading-relaxed text-slate-600">
                Your entries are saved temporarily in this tab so they remain
                available after a refresh. They are sent only when you submit
                the form and are cleared after successful submission or when
                this tab session ends. Avoid using a shared device.
              </p>

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
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
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

              <div className="border-t border-slate-100 pt-6">
                <Controller
                  name="guardianConsent"
                  control={control}
                  rules={{
                    validate: (value) =>
                      value ||
                      "Please confirm that you are an adult applicant or the student's parent/legal guardian.",
                  }}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onChange={(event) => field.onChange(event.target.checked)}
                    >
                      <span className="whitespace-normal text-sm leading-relaxed text-slate-700">
                        I confirm that I am at least 18 years old, or I am the
                        applicant’s parent or legal guardian submitting this
                        application on their behalf. I am authorised to provide
                        this information and consent to its processing for
                        admission and related school communication.
                      </span>
                    </Checkbox>
                  )}
                />
                {errors.guardianConsent && (
                  <Text type="danger" className="mt-2 block text-sm">
                    {errors.guardianConsent.message}
                  </Text>
                )}
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  By submitting, you confirm that you have read the{" "}
                  <Link to="/privacy-policy" className="font-semibold text-blue-600 underline">
                    Privacy Policy
                  </Link>
                  . Application details are transmitted to the school through
                  EmailJS for admission processing.
                </p>
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
        <Marquee text="Admissions Open for 2027-28 | Fast-Track Email Enrollment Active!" />
        <Footer />
      </div>
    </ConfigProvider>
  );
};

export default AdmissionForm;
