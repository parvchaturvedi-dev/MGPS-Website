// import React, { useState, useEffect } from "react";
// import { motion as Motion } from "framer-motion";

// const SplashScreen = ({ onLoadingComplete }) => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(timer);
//           setTimeout(() => onLoadingComplete(), 800); // 100% ke baad exit delay
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 25);
//     return () => clearInterval(timer);
//   }, [onLoadingComplete]);

//   // Typing Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.05 }, // Har letter ke beech ka gap
//     },
//   };

//   const letterVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const textLines = [
//     "Hello User,",
//     "Welcome to the Website of",
//     "Marigold Secondary School Behror"
//   ];

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-transparent">
      
//       {/* --- STAIRCASE EXIT PANELS --- */}
//       {/* Ye 5 panels hain jo staggered tarike se upar jayenge */}
//       <div className="absolute inset-0 flex pointer-events-none">
//         {[...Array(5)].map((_, i) => (
//           <Motion.div
//             key={i}
//             initial={{ y: 0 }}
//             exit={{ y: "-100%" }}
//             transition={{
//               duration: 0.8,
//               ease: [0.645, 0.045, 0.355, 1], // Cubic-bezier for smooth slide
//               delay: i * 0.1, // Staircase delay
//             }}
//             className="h-full w-full bg-[#050505] border-r border-white/5"
//           />
//         ))}
//       </div>

//       {/* --- CONTENT LAYER --- */}
//       <div className="relative z-10 text-center px-6">
//         <Motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
//         >
//           {textLines.map((line, idx) => (
//             <div key={idx} className="overflow-hidden mb-1">
//               <Motion.span
//                 className={`block leading-tight ${
//                   idx === 2 ? "text-blue-500 font-bold text-2xl md:text-4xl uppercase tracking-tighter" : 
//                   idx === 1 ? "text-gray-500 font-light text-xl italic" : 
//                   "text-white text-3xl font-bold"
//                 }`}
//               >
//                 {line.split("").map((char, charIdx) => (
//                   <Motion.span key={charIdx} variants={letterVariants}>
//                     {char}
//                   </Motion.span>
//                 ))}
//               </Motion.span>
//             </div>
//           ))}
//         </Motion.div>
//       </div>

//       {/* --- PERCENTAGE (BOTTOM RIGHT) --- */}
//       <Motion.div 
//         exit={{ opacity: 0, scale: 0.5 }}
//         className="absolute bottom-10 right-10 z-20 text-right"
//       >
//         <div className="overflow-hidden">
//           <Motion.div 
//             animate={{ x: ["-100%", "0%"] }}
//             className="text-[10px] text-blue-500 font-mono tracking-[0.3em] uppercase mb-1 opacity-40"
//           >
//             SYSTEM_READY
//           </Motion.div>
//         </div>
//         <span className="font-mono text-7xl font-black text-white tabular-nums leading-none">
//           {progress}<span className="text-blue-600 text-2xl">%</span>
//         </span>
//       </Motion.div>
//     </div>
//   );
// };

// export default SplashScreen;