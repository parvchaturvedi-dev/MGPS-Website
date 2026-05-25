import { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import PopupImage from "../assets/popup.jpg";
import { Link } from "react-router-dom";

const Popup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000); // ⏳ 1 sec delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <Motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Popup Box */}
          <Motion.div
            initial={{ scale: 0.7, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="relative bg-white rounded-xl overflow-hidden w-80 md:w-100 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={PopupImage} // 👈 apni image daal
              alt="popup"
              className="w-full"
            />

            {/* Button */}
            <Link to="/admission-form">
              <button className="bg-yellow-500 text-white px-6 py-3 rounded-md mx-auto block my-4 hover:bg-yellow-600 transition">
                Register Now
              </button>
            </Link>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
