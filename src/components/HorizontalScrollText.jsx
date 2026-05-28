import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import videoSrc from "../assets/HorizontalTextBg.mp4";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollText = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const text = textRef.current;
      if (!text) return;

      const scrollWidth = text.offsetWidth - window.innerWidth;

      gsap.to(text, {
        x: -scrollWidth - 200,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${text.offsetWidth}`,
          pin: true,
          scrub: 1.5,
          invalidateOnRefresh: true,
          // --- SNAPPING LOGIC START ---
          snap: {
            snapTo: 1, // 1 ka matlab hai ki ye direct end point tak snap karega
            duration: { min: 2, max: 2.2 }, // Animation ki speed
            delay: 0.001, // Scroll rukne ke kitni der baad snap ho
            ease: "power2.inOut"
          }
          // --- SNAPPING LOGIC END ---
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-black flex items-center overflow-hidden"
    >
      {/* 🎥 Background Video Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale-40% brightness-60%"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* ✍️ Floating Content */}
      <div className="relative z-20 flex items-center">
        <h2
          ref={textRef}
          className="text-[50vw] font-bold text-white whitespace-nowrap leading-none tracking-tighter px-20 drop-shadow-2xl"
        >
          26 Years Of Excellence <span className="text-blue-500">.</span>
        </h2>
      </div>

      {/* 🛰️ UI Elements */}
      <div className="absolute top-10 left-10 z-20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.4em]">
            Scroll View // Keep Explore
          </span>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollText;