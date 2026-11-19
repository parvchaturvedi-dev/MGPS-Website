import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const faqs = [
  {
    question: "Which is a good school in Behror?",
    answer:
      "The right school depends on a family's needs and the child’s learning style. Marigold Secondary School in Behror describes its approach as balancing academics, creativity, discipline and values. Its website lists smart classrooms, arts and culture activities, sports and student-focused teaching. Families can contact the school or arrange a visit to confirm current facilities and decide whether it is a suitable fit.",
    link: "/about-us",
    linkText: "Explore the school",
  },
  {
    question: "Where is Marigold Secondary School located?",
    answer:
      "Marigold Secondary School is located near Bypass Chowk on Hamindpur Road in Behror, Rajasthan 301701, India. For directions or to confirm the best entrance before travelling, call the school at +91-9414638988. The Contact Us page also includes a map and the school's email address for general and admission enquiries.",
    link: "/contact-us",
    linkText: "View contact details and map",
  },
  {
    question: "What classes are offered at Marigold Secondary School?",
    answer:
      "The school website describes its academic programme as running from Pre-Nursery to Grade 10. The curriculum page explains the school's focus on strong subject fundamentals, age-appropriate learning goals, conceptual understanding and student development. Contact the school directly to confirm which specific grades have seats available for the current academic session.",
    link: "/curriculum",
    linkText: "Read about the curriculum",
  },
  {
    question: "What is the admission process at Marigold School?",
    answer:
      "Families can obtain an admission form from the school office or download it from the website when applications open. Submit the completed form with the required documents, including a birth certificate, previous report card, transfer certificate and photographs. Primary applicants have an interaction; senior applicants may take a written test or interview. Selection is merit-based, and selected candidates receive an offer letter. Confirm current requirements with the school.",
    link: "/admission-process",
    linkText: "See the admission steps",
  },
  {
    question: "What is the fee structure?",
    answer:
      "The website's 2027–28 fee page lists tuition fees of ₹26,000 for Nursery–UKG, ₹28,500 for Classes 1–5, ₹31,500 for Classes 6–8 and ₹35,500 for Classes 9–10. Other charges are listed as per schedule, and fees may change each academic year. Contact the school to confirm the payable amount and payment schedule for a particular student.",
    link: "/fees",
    linkText: "View the fee table",
  },
  {
    question: "What facilities are available at the school?",
    answer:
      "The school website describes technology-supported smart classrooms, science laboratories, a spacious campus, greenery and safe play areas. These facilities are presented as part of an environment intended to support classroom learning and student well-being. Facilities and access can change, so families should contact the school or arrange a campus visit to verify what is currently available.",
    link: "/about-us",
    linkText: "Learn about the school",
  },
  {
    question: "Does Marigold School provide sports and extracurricular activities?",
    answer:
      "Yes. The school website describes sports infrastructure and coaching, alongside music, dance and fine arts programmes. It also mentions life-skills activities and student leadership opportunities, including investiture. The exact activities, schedules and availability may vary by class and academic session, so parents can contact the school to ask which options are currently offered.",
    link: "/about-us",
    linkText: "Explore school offerings",
  },
  {
    question: "How can parents contact the school?",
    answer:
      "Parents can call Marigold Secondary School at +91-9414638988 or email marigoldvijay@gmail.com. The school is near Bypass Chowk, Hamindpur Road, Behror, Rajasthan 301701. The Contact Us page provides the location map and additional information for admission questions, general enquiries and planning a visit.",
    link: "/contact-us",
    linkText: "Open the Contact Us page",
  },
  {
    question: "What is the school's educational philosophy?",
    answer:
      "Marigold Secondary School describes its approach as combining academic learning with creativity, discipline, values and student development. Its curriculum page emphasizes subject fundamentals, conceptual understanding, analytical thinking, communication and age-appropriate learning. The stated aim is to help students build confidence and responsible habits alongside their academic progress.",
    link: "/curriculum",
    linkText: "Read about the curriculum",
  },
  {
    question: "How long has Marigold School been serving students?",
    answer:
      "Marigold Secondary School's history page states that the institution was established in 2000. It describes a journey from a small institution to a school with modern, technology-supported learning, updated infrastructure and teaching methods. The school marked 26 years since its establishment in 2026 and highlights its continued commitment to student learning and growth.",
    link: "/our-history",
    linkText: "Explore the school's history",
  },
  {
    question: "Is Marigold Secondary School affiliated with RBSE or CBSE?",
    answer:
      "The curriculum page identifies the Rajasthan Board (RBSE) as the school's curriculum framework and describes some teaching methods as inspired by the CBSE pattern. This wording refers to teaching approach, not CBSE affiliation. Families should contact the school to confirm the applicable board details and examination requirements for a particular grade and academic session.",
    link: "/curriculum",
    linkText: "Read about the curriculum",
  },
  {
    question: "What is the fee for Pre-Nursery?",
    answer:
      "The published 2027–28 fee table shows tuition amounts for Nursery–UKG and Classes 1–10, but does not list a separate Pre-Nursery amount. Because the admission form includes Pre-Nursery, families should contact the school office to confirm the class-specific tuition, other charges and payment schedule before making a payment.",
    link: "/fees",
    linkText: "Review fee information",
  },
  {
    question: "Does the school publish examination results or topper lists online?",
    answer:
      "The school website does not currently publish verified class-wise result sheets, named toppers or pass-percentage data. For official examination information, parents or guardians can contact the school and mention the relevant class and academic session. Avoid sharing a student's marks or personal documents in public comments or social-media posts.",
    link: "/exam-result",
    linkText: "Read result enquiry information",
  },
  {
    question: "How can I confirm admission requirements for the current year?",
    answer:
      "Admission dates, seat availability, age criteria and assessment arrangements can vary by session and class. The website describes the general application steps, supporting documents and selection process, but families should confirm the current requirements with the school office before applying. Contact the school directly for the latest form, eligibility details and any additional documents.",
    link: "/admission-process",
    linkText: "Review the admission process",
  },
];

const FAQSection = () => (
  <section id="faqs" aria-labelledby="faq-heading" className="bg-slate-50 px-6 py-24">
    <div className="max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Text className="text-blue-600 font-mono uppercase tracking-[0.35em] text-[10px] font-bold">
          Helpful Information
        </Text>
        <Title id="faq-heading" level={2} className="!mt-3 !mb-4 !text-4xl md:!text-5xl tracking-tight">
          Frequently Asked Questions
        </Title>
        <Paragraph className="text-gray-500 text-lg">
          Clear answers about admissions, academics, fees and life at Marigold Secondary School, Behror.
        </Paragraph>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-slate-200 bg-white px-6 md:px-8 py-5 shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg md:text-xl font-semibold text-slate-900 marker:content-none">
              {faq.question}
              <span
                aria-hidden="true"
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xl transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="pt-4 pr-2 md:pr-12">
              <Paragraph className="!mb-3 text-gray-600 leading-relaxed">
                {faq.answer}
              </Paragraph>
              <Link to={faq.link} className="font-semibold text-blue-600 hover:text-blue-800">
                {faq.linkText} →
              </Link>
            </div>
          </details>
        ))}
      </div>
    </div>

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      })}
    </script>
  </section>
);

export default FAQSection;
