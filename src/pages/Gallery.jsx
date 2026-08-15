import React, { useState } from "react";
import { Typography, Tag, Button } from "antd";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { CloseOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Marquee from "../components/Marquee";

const { Title, Text } = Typography;

const storageKey = "marigold-gallery-items";

const galleryImages = [
  "img (1).jpeg",
  "img (2).jpeg",
  "img (3).jpeg",
  "img (4).jpeg",
  "img (5).jpeg",
  "img (6).jpeg",
  "img (7).jpeg",
  "img (8).jpeg",
  "img (9).jpeg",
  "img (10).jpeg",
  "img (11).jpeg",
  "img (12).jpeg",
  "img (13).jpeg",
  "img (14).jpeg",
  "img (15).jpeg",
  "img (16).jpeg",
  "img (17).jpeg",
  "img (18).jpeg",
  "img (19).jpeg",
  "img (20).jpeg",
  "img (21).jpeg",
  "img (22).jpeg",
  "img (23).jpg",
  "img(24).jpg",
  "img(25).jpg",
  "img.jpg",
  "popup.jpg",
  "side.webp",
  "muthoot (1).png",
  "muthoot (2).png",
  "muthoot (3).png"
];

const getCategory = (fileName, index) => {
  const normalized = fileName.toLowerCase();
  if (normalized.includes("popup") || normalized.includes("event") || normalized.includes("fest")) {
    return "Events";
  }
  if (normalized.includes("typing") || normalized.includes("lab") || normalized.includes("science") || normalized.includes("book") || normalized.includes("library")) {
    return "Academics";
  }
  if (normalized.includes("sport") || normalized.includes("football") || normalized.includes("match") || normalized.includes("athletic")) {
    return "Sports";
  }
  if (normalized.includes("side") || normalized.includes("img") || normalized.includes("campus") || normalized.includes("main")) {
    return "Campus";
  }
  if (index < 5) return "Campus";
  if (index < 10) return "Sports";
  if (index < 15) return "Academics";
  if (index < 21) return "Events";
  return "Campus";
};

const defaultMediaItems = galleryImages.map((fileName, index) => ({
  id: index + 1,
  type: "image",
  category: getCategory(fileName, index),
  url: new URL(`../assets/${fileName}`, import.meta.url).href,
  title: fileName.replace(/[-_]/g, " ").replace(/\.[^/.]+$/, ""),
}));

const getInitialMediaItems = () => {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length) {
        return parsed;
      }
    }
  } catch (error) {
    console.warn("Could not load gallery data from local storage.", error);
  }

  return defaultMediaItems;
};

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null); // Track index for Swiper
  const [mediaItems] = useState(getInitialMediaItems);

  const categories = ["All", ...Array.from(new Set(defaultMediaItems.map((item) => item.category)))];

  const filteredItems = filter === "All"
    ? mediaItems
    : mediaItems.filter((item) => item.category === filter);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Text className="text-blue-600 font-mono uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Visual Journey</Text>
            <Title className="text-5xl! md:text-7xl! tracking-tighter m-0!">Life at <span className="italic font-serif text-blue-600">Marigold</span></Title>
          </Motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-slate-100 sticky top-20 bg-white/80 backdrop-blur-md z-40 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <Tag
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 rounded-full cursor-pointer transition-all border-none text-sm font-medium ${
                filter === cat ? "bg-blue-600 text-white shadow-lg" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {cat}
            </Tag>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredItems.map((item, index) => (
              <Motion.div
                key={item.id}
                layout
                whileHover={{ y: -10 }}
                onClick={() => setSelectedIndex(index)} // Open Lightbox
                className="relative group overflow-hidden rounded-[2.5rem] bg-slate-100 cursor-pointer"
              >
                {item.type === "video" ? (
                  <video className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700">
                    <source src={item.url} type="video/mp4" />
                  </video>
                ) : (
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                )}
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white border border-white/30">
                     {item.type === "video" ? "▶ Play Video" : "View Photo"}
                   </div>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* FULL SCREEN LIGHTBOX (Swiper + Framer Motion) */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <Motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black flex items-center justify-center"
          >
            {/* Close Button */}
            <Button 
              type="text" 
              icon={<CloseOutlined className="text-white text-2xl" />} 
              className="absolute top-10 right-10 z-110"
              onClick={() => setSelectedIndex(null)}
            />

            <div className="w-full h-full flex items-center justify-center p-4 md:p-20">
              <Swiper
                initialSlide={selectedIndex}
                modules={[Navigation, Pagination, A11y]}
                navigation={true}
                pagination={{ clickable: true, type: 'fraction' }}
                className="w-full h-full rounded-3xl overflow-hidden"
              >
                {filteredItems.map((item) => (
                  <SwiperSlide key={item.id} className="flex items-center justify-center bg-black">
                    <div className="max-w-5xl w-full h-full flex flex-col items-center justify-center gap-4">
                      {item.type === "video" ? (
                        <video controls autoPlay className="max-h-[70vh] rounded-2xl shadow-2xl">
                          <source src={item.url} type="video/mp4" />
                        </video>
                      ) : (
                        <img src={item.url} className="max-h-[70vh] object-contain rounded-2xl shadow-2xl" />
                      )}
                      <div className="text-center mt-4">
                        <Title level={3} className="text-white! m-0!">{item.title}</Title>
                        <Text className="text-slate-400">{item.category}</Text>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
      <Marquee text="Admissions Open for 2026-27 | Join Marigold's Legacy of Excellence!" />
      <Footer />
    </div>
  );
};

export default Gallery;
