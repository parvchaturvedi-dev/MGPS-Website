// import React, { useEffect, useLayoutEffect, useState } from "react";
import React, { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion as Motion } from "framer-motion";

// Components
// import SplashScreen from "./components/SplashScreen";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AdmissionForm from "./pages/AdmissionForm";
import AdmissionPolicy from "./pages/AdmissionPolicy";
import AdmissionProcess from "./pages/AdmissionProcess";
import ContactUs from "./pages/ContactUs";
import Curriculum from "./pages/Curriculum";
import Discipline from "./pages/Discipline";
import ExamResult from "./pages/ExamResult";
import Fees from "./pages/Fees";
import Gallery from "./pages/Gallery";
import OurCofounder from "./pages/OurCofounder";
import OurFounder from "./pages/OurFounder";
import OurHistory from "./pages/OurHistory";
import Scholarships from "./pages/Scholarships";

// GSAP Register
gsap.registerPlugin(ScrollTrigger);

const lenisOptions = {
  autoRaf: true,
  lerp: 0.08,
  smoothWheel: true,
  syncTouch: true,
};

// --- Lenis & GSAP Scroll Sync Manager ---
function LenisScrollManager() {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const handleScroll = () => {
      ScrollTrigger.update();
    };
    return lenis.on("scroll", handleScroll);
  }, [lenis]);

  useLayoutEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, { immediate: true });
    const rafId = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => window.cancelAnimationFrame(rafId);
  }, [lenis, location.pathname]);

  return null;
}

function App() {
  // const [showSplash, setShowSplash] = useState(true);

  return (
    <ReactLenis root options={lenisOptions}>
      <BrowserRouter>
        {/* Staircase Animation Wrapper */}
        <AnimatePresence mode="wait">
          {/* Splash screen disabled, kept commented for future use */}
          {/* {showSplash ? (
            <SplashScreen
              key="splash-screen"
              onLoadingComplete={() => setShowSplash(false)}
            />
          ) : ( */}
            <Motion.div
              key="main-app-content"
              initial={{ opacity: 0, y: 0 }} // Niche se reveal hone ka effect
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.33, 1, 0.68, 1], // Smooth deceleration
                delay: 0.1 
              }}
            >
              <LenisScrollManager />
              <Routes>
                {/* Public Website Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/admission-form" element={<AdmissionForm />} />
                <Route path="/admission-policy" element={<AdmissionPolicy />} />
                <Route path="/admission-process" element={<AdmissionProcess />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/curriculum" element={<Curriculum />} />
                <Route path="/discipline" element={<Discipline />} />
                <Route path="/exam-result" element={<ExamResult />} />
                <Route path="/fees" element={<Fees />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/our-cofounder" element={<OurCofounder />} />
                <Route path="/our-founder" element={<OurFounder />} />
                <Route path="/our-history" element={<OurHistory />} />
                <Route path="/scholarships" element={<Scholarships />} />



                {/* 404 Custom Page */}
                <Route
                  path="*"
                  element={
                    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-16">
                      <div className="max-w-xl text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-black font-sans tracking-tight">
                          Page not found
                        </h1>
                        <p className="mt-4 text-lg text-gray-500 font-light">
                          The requested URL does not exist on the Marigold Secondary School server.
                        </p>
                        <button 
                          onClick={() => window.location.href = '/'}
                          className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-medium"
                        >
                          Return Home
                        </button>
                      </div>
                    </main>
                  }
                />
              </Routes>
            </Motion.div>
          {/* )} */}
        </AnimatePresence>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;
