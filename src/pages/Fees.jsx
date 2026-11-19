import React from "react";
import { Typography, Table } from "antd";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Marquee from "../components/Marquee";
import { Link } from "react-router-dom";

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
          <Paragraph className="mt-4 text-gray-400 font-mono text-xs uppercase tracking-widest">Session 2027-28</Paragraph>
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
            <Text className="text-gray-500 text-sm">
              The amounts above are the tuition fees published for 2027–28.
              Other charges are listed separately as “as per schedule.” Fees
              may change in a later academic session.
            </Text>
          </div>

          <section aria-labelledby="fee-details-heading" className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-8">
              <Title id="fee-details-heading" level={2}>How to read the fee table</Title>
              <Paragraph className="text-gray-600 leading-relaxed">
                The published table groups Nursery–UKG, Classes 1–5, Classes
                6–8, and Classes 9–10, and labels the listed amounts as tuition
                fees. It does not specify the amount or itemization of other
                charges, payment due dates, instalments, concessions or the
                total payable amount for an individual student.
              </Paragraph>
              <Paragraph className="!mb-0 text-gray-600 leading-relaxed">
                The form accepts Pre-Nursery applications, but the published
                fee table does not show a separate Pre-Nursery amount. Contact
                the school to confirm that class’s fee before making a payment.
              </Paragraph>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
              <Title level={2}>Fee questions for families</Title>
              <div className="space-y-4">
                <details className="border-b border-slate-200 pb-4">
                  <summary className="cursor-pointer font-semibold text-slate-900">
                    Are these the total admission charges?
                  </summary>
                  <p className="mb-0 mt-3 leading-relaxed text-gray-600">
                    The website labels the amounts as tuition fees and lists
                    other charges as per schedule. Ask the school for a
                    written, class-specific total before paying.
                  </p>
                </details>
                <details className="border-b border-slate-200 pb-4">
                  <summary className="cursor-pointer font-semibold text-slate-900">
                    How can I confirm the fee for a particular grade?
                  </summary>
                  <p className="mb-0 mt-3 leading-relaxed text-gray-600">
                    Call the school at +91-9414638988 or email
                    marigoldvijay@gmail.com. Confirm the session, class,
                    additional charges and payment schedule directly with the
                    office.
                  </p>
                </details>
                <details>
                  <summary className="cursor-pointer font-semibold text-slate-900">
                    Can the fees change?
                  </summary>
                  <p className="mb-0 mt-3 leading-relaxed text-gray-600">
                    The school notes that fees may change each academic year.
                    The amounts shown here are for 2027–28; contact the school
                    for a later session.
                  </p>
                </details>
              </div>
            </div>
          </section>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold">
            <Link className="text-blue-700 underline" to="/admission-process">
              Admission process
            </Link>
            <Link className="text-blue-700 underline" to="/admission-policy">
              Admission and fee policy
            </Link>
            <Link className="text-blue-700 underline" to="/contact-us">
              Contact the school
            </Link>
          </div>
        </div>
      </section>
      <Marquee text="Admissions Open for 2027-28 | Join Marigold's Legacy of Excellence!" />
      <Footer />
    </div>
  );
};

export default Fees;