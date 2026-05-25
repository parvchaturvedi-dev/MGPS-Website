import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const testimonials = [
  { name: "Dr. Ananya Sharma", role: "Parent", text: "The balance of academics and creativity at Marigold is truly weightless. My child feels empowered." },
  { name: "Rajesh Meena", role: "Parent", text: "Best infrastructure in the region. The digital classrooms have changed the way my son learns." },
  { name: "Sandeep Yadav", role: "Alumni Parent", text: "Second generation studying here. The trust remains as solid as it was 20 years ago." },
];

// const alumni = [
//   { name: "Vikram Rathore", meta: "Google // SDE", year: "2015", img: "https://i.pravatar.cc/150?u=1" },
//   { name: "Sanya Gupta", meta: "AIIMS // Resident", year: "2018", img: "https://i.pravatar.cc/150?u=2" },
//   { name: "Amit Verma", meta: "Entrepreneur", year: "2012", img: "https://i.pravatar.cc/150?u=3" },
//   { name: "Neha Chawla", meta: "Architect", year: "2019", img: "https://i.pravatar.cc/150?u=4" },
// ];

const LegacyAndVoices = () => {
  return (
    <section className="bg-white py-16 md:py-32 overflow-hidden border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid: Stacked on mobile (gap-16), Side-by-side on LG (gap-20) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* --- LEFT: Testimonials --- */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 md:w-12 h-[1px] bg-blue-600" />
                <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-blue-600 font-bold">The Voices</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter text-black leading-[1.1] lg:leading-[0.9]">
                What Parents <br className="hidden md:block" /> Experience.
              </h2>
            </div>

            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true, el: ".custom-pag-1" }}
              className="w-full"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i} className="pb-12 md:pb-16">
                  <div className="space-y-6 md:space-y-8">
                    <p className="text-lg md:text-3xl font-light text-gray-500 leading-snug md:leading-tight italic max-w-2xl">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center text-white font-mono text-[10px] md:text-xs">
                        {t.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm md:text-lg text-black">{t.name}</h4>
                        <p className="text-[9px] md:text-[10px] font-mono text-blue-600 uppercase tracking-widest">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="custom-pag-1 mt-6 md:mt-10" />
            </Swiper>
          </div>

          {/* --- RIGHT: Alumni (Glass Container) --- */}
          {/* <div className="lg:col-span-5 bg-gray-50 rounded-[2rem] md:rounded-[3.5rem] p-6 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 right-6 md:top-10 md:right-10 text-6xl md:text-8xl font-bold text-black/[0.02] pointer-events-none uppercase select-none">
              Legacy
            </div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="space-y-2 mb-8 md:mb-10">
                <span className="text-[9px] md:text-[10px] font-mono text-gray-400 uppercase tracking-[0.4em]">The Legacy</span>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Our Alumni.</h3>
              </div>

              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                autoplay={{ delay: 3000 }}
                modules={[EffectCoverflow, Autoplay]}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0, 
                  depth: 100,
                  modifier: 2,
                  slideShadows: false,
                }}
                breakpoints={{
                  // Adjust 3D effect based on screen size
                  320: { coverflowEffect: { stretch: 20, depth: 50 } },
                  768: { coverflowEffect: { stretch: 50, depth: 100 } },
                  1024: { coverflowEffect: { stretch: 80, depth: 200 } }
                }}
                className="w-full alumni-swiper"
              >
                {alumni.map((member, i) => (
                  <SwiperSlide key={i} className="w-[220px] md:w-[280px]">
                    <div className="bg-white p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 shadow-xl group transition-all duration-500">
                      <div className="w-full aspect-square overflow-hidden rounded-xl md:rounded-2xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-700">
                         <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="font-bold text-sm md:text-base text-black group-hover:text-blue-600 transition-colors">{member.name}</h4>
                      <p className="text-[8px] md:text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-1">{member.meta}</p>
                      <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
                         <span className="text-[8px] font-mono text-gray-300 italic">Class of {member.year}</span>
                         <span className="text-blue-600 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all text-xs md:text-base">→</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div> */}

        </div>
      </div>

      <style>{`
        .custom-pag-1 .swiper-pagination-bullet {
          background: #e5e7eb !important;
          opacity: 1 !important;
          width: 15px !important;
          height: 2px !important;
          border-radius: 0 !important;
          transition: all 0.4s ease !important;
        }
        @media (min-width: 768px) {
          .custom-pag-1 .swiper-pagination-bullet { width: 25px !important; }
        }
        .custom-pag-1 .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 40px !important;
        }
        @media (min-width: 768px) {
          .custom-pag-1 .swiper-pagination-bullet-active { width: 70px !important; }
        }
        .alumni-swiper { padding-bottom: 30px !important; padding-top: 10px !important; }
      `}</style>
    </section>
  );
};

export default LegacyAndVoices;