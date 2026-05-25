import React, { useRef, useEffect } from "react";
import { motion as Motion, useInView, useSpring, useTransform } from "framer-motion";

// --- Counter Component for Antigravity Feel ---
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const display = useTransform(spring, (current) => 
    Math.round(current).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <Motion.span ref={ref}>{display}</Motion.span>;
};

const stats = [
  { label: "Years of Excellence", value: 25, suffix: "+" },
  { label: "Students", value: 12000, suffix: "+", delay: 3 },
  { label: "Qualified Educators", value: 50, suffix: "+" },
  { label: "Board Results", value: 100, suffix: "%" },
];

const StatsSection = () => {
  return (
    <section className="relative bg-white py-32 px-6 overflow-hidden">
      {/* Background Tech Mesh (Subtle Antigravity Touch) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', size: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center ${
                index !== stats.length - 1 ? "lg:border-r border-gray-100" : ""
              }`}
            >
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="space-y-2"
              >
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-black">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-blue-600 font-bold">
                  {stat.label}
                </p>
              </Motion.div>
            </div>
          ))}
        </div>

        {/* --- Trust Badge --- */}
        <Motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 flex justify-center"
        >
          <div className="inline-flex items-center gap-4 bg-gray-50 px-8 py-4 rounded-full border border-gray-100">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="parent" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-gray-600">
              Trusted by <span className="text-black font-bold">5,500+ Parents</span> across Behror
            </p>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
