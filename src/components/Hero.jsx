import Building from "../assets/side.webp";
import { Link } from "react-router-dom";
import Breakpoint from "./Breakpoint";

const Hero = () => {
  const scrollToWhyUs = () => {
    const element = document.getElementById("why-choose-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-11 md:py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col">
          {/* Tagline Animation */}
          <p className="text-red-500 mb-3 font-medium tracking-wide animate-text-reveal">
            Welcome to Marigold Secondary School Behror
          </p>

          {/* Main Heading Animation */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate-text-reveal [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            A world-class education for Behror students to build a brighter
            future
          </h1>

          {/* Button & Links Animation */}
          <div className="animate-text-reveal [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards]">
            <Link to="/admission-form">
              <button className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg">
                Admission Open 2026-27 →
              </button>
            </Link>

            <div className="flex flex-wrap gap-6 mt-8 text-gray-600 font-medium">
              <Link to="/about-us">
                <span className="hover:text-black cursor-pointer transition-colors flex items-center gap-1">
                  26 Years Of Superiority <span className="text-red-500">→</span>
                </span>
              </Link>
              <br />
              <span
                onClick={scrollToWhyUs}
                className="hover:text-black cursor-pointer transition-colors flex items-center gap-1"
              >
                Explore More... <span className="text-red-500">→</span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Image with Scale-in animation) */}
        <div className="relative flex justify-center items-center animate-text-reveal [animation-delay:700ms] opacity-0 [animation-fill-mode:forwards]">
          {/* Blue Decorative Box */}
          <div className="absolute w-[90%] h-[95%] bg-[#0c2d48] rounded-2xl top-6 left-6 z-0"></div>

          {/* Main Image */}
          <img
            src={Building}
            alt="School Building"
            className="relative z-10 rounded-2xl shadow-2xl w-[90%] object-cover hover:rotate-1 transition-transform duration-500"
          />
        </div>
      </div>
      <Breakpoint />
    </section>
  );
};

export default Hero;
