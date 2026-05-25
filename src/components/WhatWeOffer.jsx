import { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";

const offers = [
  {
    id: "01",
    title: "CBSE Curriculum",
    description: "A robust academic framework from Pre-Nursery to Grade 10, focusing on conceptual clarity and future-ready skills.",
    tag: "Academics"
  },
  {
    id: "02",
    title: "Cultured Infrastructure",
    description: "Modern facilities and a rich cultural environment that inspire learning and personal growth.",
    tag: "Infrastructure"
  },
  {
    id: "03",
    title: "Holistic Environment",
    description: "Spacious campus with lush greenery, safe play areas, and modern facilities that foster overall development and well-being.",
    tag: "Facilities"
  },
  {
    id: "04",
    title: "Arts & Culture",
    description: "Nurturing creativity through dedicated music, dance, and fine arts programs to build well-rounded individuals.",
    tag: "Creativity"
  },
  {
    id: "05",
    title: "Sporting Excellence",
    description: "Extensive sports infrastructure and professional coaching to instill discipline, teamwork, and physical fitness.",
    tag: "Athletics"
  },
  {
    id: "06",
    title: "Values & Leadership",
    description: "Life-skills programs and investiture opportunities that shape the responsible leaders of tomorrow.",
    tag: "Growth"
  }
];

const WhatWeOffer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section ref={ref} className="bg-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Section Header --- */}
        <div className="mb-20 space-y-4">
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-3 text-blue-600"
          >
            <span className="w-12 h-[1px] bg-blue-600" />
            <span className="text-xs font-mono uppercase tracking-[0.4em] font-bold">Offerings</span>
          </Motion.div>
          
          <Motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-semibold tracking-tighter text-black"
          >
            Nurturing Excellence <br />
            <span className="text-gray-300">Through Innovation.</span>
          </Motion.h2>
        </div>

        {/* --- Offerings Grid --- */}
        <Motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100"
        >
          {offers.map((offer) => (
            <Motion.div
              key={offer.id}
              variants={cardVariants}
              className="group relative bg-white p-10 flex flex-col justify-between min-h-[320px] hover:z-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                    {offer.tag}
                  </span>
                  <span className="text-4xl font-light text-gray-100 group-hover:text-blue-50 transition-colors duration-500">
                    {offer.id}
                  </span>
                </div>
                
                <h3 className="text-2xl font-medium text-black tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  {offer.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  {offer.description}
                </p>
              </div>

              <div className="mt-8 overflow-hidden h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700" />
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default WhatWeOffer;