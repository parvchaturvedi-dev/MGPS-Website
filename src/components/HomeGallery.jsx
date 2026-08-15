import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import { motion as Motion } from "framer-motion";
import Projects from "../assets/img (2).jpeg";
import Culture from "../assets/muthoot (3).png";
import Sports from "../assets/img (4).jpeg";
import Arts from "../assets/img (6).jpeg";
import Achievements from "../assets/img (16).jpeg";
import Events from "../assets/img (8).jpeg";
import Events2 from "../assets/img (11).jpeg";
import { Link } from "react-router-dom";


// Swiper styles import
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const galleryImages = [
  Projects,
  Culture,
  Sports,
  Arts,
  Achievements,
  Events,
  Events2,
];

const Gallery = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-blue-600" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-600 font-bold">
              Visual Archive
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-black">
            The Gallery<span className="text-blue-600">.</span>
          </h2>
        </div>

        {/* --- Swiper Container --- */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="w-full py-12"
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide key={index} className="w-[300px] md:w-[500px]">
              <div className="relative group overflow-hidden rounded-[2rem] border border-gray-100 shadow-2xl">
                <img
                  src={src}
                  alt={`Marigold Moment ${index}`}
                  className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white font-mono text-xs uppercase tracking-widest">
                    Campus Life // Frame {index + 1}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- View All Button --- */}
        <div className="mt-20 flex justify-center">
          <Motion.button
            whileHover={{ y: -5 }}
            className="group relative px-12 py-4 rounded-full border border-gray-200 overflow-hidden"
          >
            <Link to="/gallery">
            <span className="relative z-10 text-xs font-mono uppercase tracking-widest text-black group-hover:text-white transition-colors duration-500">
              Explore All Moments
            </span>
            </Link>
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Motion.button>
        </div>

      </div>

      {/* Custom Styles for Swiper Pagination (Antigravity Blue) */}
      <style>{`
        .swiper-pagination-bullet {
          background: #e5e7eb !important;
          opacity: 1 !important;
          width: 12px !important;
          height: 4px !important;
          border-radius: 2px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 30px !important;
        }
      `}</style>
    </section>
  );
};

export default Gallery;