import { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import PrizeDistribution from "../assets/img (26).jpeg"
import Breakpoint2 from "./Breakpoint2";

const headingText = "Why Choose Us";
const paraText =
  "At Marigold School, we believe in nurturing young minds with a perfect balance of academics, creativity, discipline, and values. Our experienced faculty, modern infrastructure, and student-focused approach ensure that every child grows into a confident, capable, and responsible individual ready to face the future.";

const WhyChooseUs = () => {
  const ref = useRef(null);
  // once: true ensures the animation feels like a 'load' event rather than a recurring scroll trigger
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const headingWords = headingText.split(" ");
  const paraWords = paraText.split(" ");

  // Container variants to manage stagger timing
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.04, 
        delayChildren: 0.04 * i 
      },
    }),
  };

  // The "Antigravity" individual word animation
  const wordReveal = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 15,
      filter: "blur(8px)",
    },
  };

  return (
    <section
    id="why-choose-us"
      ref={ref}
      className="min-h-screen w-full flex flex-col justify-center bg-white px-8 md:px-24 py-2 pb-0 font-sans tracking-tight"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-start">
        
        <div className="space-y-12">
          {/* --- Heading Reveal --- */}
          <Motion.h1
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-4xl md:text-8xl font-medium text-black leading-[1.1] flex flex-wrap"
          >
            {headingWords.map((word, index) => (
              <Motion.span
                variants={wordReveal}
                key={index}
                className="mr-4 inline-block"
              >
                {word}
              </Motion.span>
            ))}
            <Motion.span
              variants={wordReveal}
              className="text-blue-600 inline-block"
            >
              ?
            </Motion.span>
          </Motion.h1>

          {/* --- Paragraph Reveal --- */}
          <Motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={15} // Delay relative to the heading
            className="flex flex-wrap max-w-xl"
          >
            {paraWords.map((word, index) => (
              <Motion.span
                variants={wordReveal}
                key={index}
                className="mr-1.5 mb-1 text-gray-500 text-xl md:text-2xl font-light leading-relaxed"
              >
                {word}
              </Motion.span>
            ))}
          </Motion.div>
        </div>

        {/* --- Minimalist Media Block --- */}
        <Motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.8 }}
          className="relative w-full aspect-square lg:aspect-auto lg:h-150 overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 shadow-sm"
        >
          <img
            src={PrizeDistribution}
            alt="Prize Distribution"
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
          />
        </Motion.div>

      </div>
      <Breakpoint2 />
    </section>
  );
};

export default WhyChooseUs;