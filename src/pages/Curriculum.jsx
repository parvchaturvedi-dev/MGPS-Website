import React from "react";
import { Typography, Row, Col } from "antd";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';

const { Title, Paragraph, Text } = Typography;

const Curriculum = () => {
  const features = [
    { title: "RBSE Framework", desc: "The school identifies the Rajasthan Board (RBSE) as its curriculum framework." },
    { title: "Concept-focused Teaching", desc: "Structured lessons aim to help learners understand ideas and build subject fundamentals." },
    { title: "Analytical Thinking", desc: "The stated learning priorities include reasoning, effective communication and disciplined study habits." },
    { title: "Values and Development", desc: "The school describes values, moral education and personality development as part of its wider approach." },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 bg-blue-50/50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Text className="text-blue-600 font-mono uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Academic Excellence</Text>
            <Title className="!text-5xl md:!text-7xl tracking-tighter !m-0">Our <span className="italic font-serif text-blue-600">Curriculum</span></Title>
          </Motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Row gutter={[60, 40]} align="middle">
            <Col xs={24} lg={12}>
              <div className="flex flex-col gap-6">
                <Title level={2} className="tracking-tighter text-4xl">Clarity, Concept & Academic Balance.</Title>
                <Paragraph className="text-lg text-gray-500 font-light leading-relaxed">
                    Marigold Secondary School describes its academic programme as following the Rajasthan Board (RBSE) framework, with structured teaching methods inspired by the CBSE pattern. RBSE names the curriculum framework; CBSE-inspired refers to teaching methods and should not be read as a claim that the school is affiliated with CBSE.
                </Paragraph>
                <Paragraph className="text-gray-500 font-light leading-relaxed">
                    The school states that its teaching is interactive, systematic and aligned with age-appropriate learning goals. Its published priorities include strong subject fundamentals, conceptual understanding, analytical thinking, effective communication and disciplined study habits. Smart classrooms are described as a way to make lessons more visual and interactive.
                  </Paragraph>
                  <Paragraph className="text-gray-500 font-light leading-relaxed">
                    The curriculum page also describes values, moral education and personality development as part of student growth. Families should contact the school for the current RBSE syllabus, class-wise subjects, academic calendar, assessment schedule and any learning-support arrangements for a specific grade.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="grid gap-4">
                {features.map((f, i) => (
                  <Motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all"
                  >
                    <Title level={4} className="!m-0 text-blue-600">{f.title}</Title>
                    <Text className="text-gray-400 text-sm">{f.desc}</Text>
                  </Motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section
        aria-labelledby="curriculum-priorities-heading"
        className="bg-slate-50 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <Text className="text-blue-600 font-mono uppercase tracking-[0.3em] text-xs font-bold">
              Learning approach
            </Text>
            <Title id="curriculum-priorities-heading" level={2} className="mt-3!">
              What the curriculum is designed to support
            </Title>
            <Paragraph className="text-gray-600 leading-relaxed">
              Across its stated curriculum approach, Marigold Secondary School
              emphasizes clear foundations and steady progress. The points below
              summarize the school’s published learning priorities; they are
              not a substitute for the official class-wise syllabus or board
              examination requirements.
            </Paragraph>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <Title level={3} className="!text-xl">Subject foundations</Title>
              <Paragraph className="!mb-0 text-gray-600 leading-relaxed">
                The school describes building strong fundamentals in every
                subject. A clear foundation helps students connect new lessons
                to concepts they have already studied and identify questions
                that need further explanation.
              </Paragraph>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <Title level={3} className="!text-xl">Conceptual understanding</Title>
              <Paragraph className="!mb-0 text-gray-600 leading-relaxed">
                Structured, interactive teaching is intended to support
                understanding rather than relying only on memorisation. Smart
                classroom technology is described as a visual aid for lessons;
                it complements, rather than replaces, classroom teaching.
              </Paragraph>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <Title level={3} className="!text-xl">Thinking and communication</Title>
              <Paragraph className="!mb-0 text-gray-600 leading-relaxed">
                Analytical thinking, effective communication and disciplined
                study habits are identified as learning goals. Families can
                ask teachers how these goals are practised in a particular
                class and how progress is communicated.
              </Paragraph>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <Title level={3} className="!text-xl">Values and personal growth</Title>
              <Paragraph className="!mb-0 text-gray-600 leading-relaxed">
                The school describes moral education, values and personality
                development as part of its broader approach to education.
                Current class-level activities and schedules can be confirmed
                directly with the school.
              </Paragraph>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <Link className="text-blue-700 underline" to="/admission-process">
              Read the admission process
            </Link>
            <Link className="text-blue-700 underline" to="/exam-result">
              Ask about exam results
            </Link>
            <Link className="text-blue-700 underline" to="/contact-us">
              Contact the school
            </Link>
          </div>
        </div>
      </section>

      <Marquee />
      <Footer />
    </div>
  );
};

export default Curriculum;