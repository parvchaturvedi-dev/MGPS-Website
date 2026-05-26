import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Synchronized initial state with the useEffect logic (1210px)
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1210 : true,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1210);
      if (window.innerWidth >= 1210) setMenuOpen(false); // Close mobile menu if window scales up
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* 🔵 TOP BAR */}
      <div className="bg-[#0c2d48] text-white flex justify-between px-6 py-2 text-sm">
        <div className="flex gap-4">
          <a
            href="tel:+919414638988"
            className="hover:text-blue-500 transition-colors"
          >
            <span>+91-9414638988</span>
          </a>
        </div>
        <div>
          <span className="hidden sm:inline"><a
          href="mailto:marigoldvijay@gmail.com"
          className="hover:text-blue-500 transition-colors cursor-pointer"
        >
          marigoldvijay@gmail.com
        </a></span>
        </div>
        
          <a href="https://www.mghub.marigoldschoolbehror.com" className="cursor-pointer hover:underline">
            Login
          </a>
        
      </div>

      {/* 🧭 MAIN NAVBAR */}
      <div className="bg-white shadow-md relative z-50">
        <div className="flex justify-between items-center px-1 py-4 max-w-7xl mx-auto cursor-pointer ">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Marigold Secondary School logo"
              className="w-10 h-10 rounded-xl"
            />
            <div>
              <h1 className="font-bold text-lg leading-tight">
                Marigold Secondary School
              </h1>
              <p className="text-xs text-slate-500 uppercase tracking-[0.18em]">
                Behror, Rajasthan
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          {isDesktop && (
            <ul className="flex gap-6 xl:gap-8 font-medium items-center">
              <li>
                <Link to="/" className="hover:text-red-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-red-600">
                  About Us
                </Link>
              </li>

              <li className="relative group">
                <span className="cursor-pointer">Management ▾</span>
                <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl p-4 space-y-2 w-48 rounded-md border-t-2 border-red-600">
                  <li>
                    <Link
                      to="/our-history"
                      className="hover:text-red-600 block"
                    >
                      Our History
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/our-founder"
                      className="hover:text-red-600 block"
                    >
                      Our Director
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/our-cofounder"
                      className="hover:text-red-600 block"
                    >
                      Our Dept. Director
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="relative group">
                <span className="cursor-pointer">Academics ▾</span>
                <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl p-4 space-y-2 w-52 rounded-md border-t-2 border-red-600">
                  <li>
                    <Link to="/curriculum" className="hover:text-red-600 block">
                      Curriculum
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/exam-result"
                      className="hover:text-red-600 block"
                    >
                      Exams & Results
                    </Link>
                  </li>
                  <li>
                    <Link to="/discipline" className="hover:text-red-600 block">
                      Rules & Discipline
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="relative group">
                <span className="cursor-pointer">Admissions ▾</span>
                <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl p-4 space-y-2 w-56 rounded-md border-t-2 border-red-600">
                  <li>
                    <Link
                      to="/admission-process"
                      className="hover:text-red-600 block"
                    >
                      Admission Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admission-policy"
                      className="hover:text-red-600 block"
                    >
                      Admission Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/fees" className="hover:text-red-600 block">
                      Fees Structure
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/scholarships"
                      className="hover:text-red-600 block"
                    >
                      Scholarships
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/gallery" className="hover:text-red-600">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-red-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          )}

          {/* RIGHT BUTTON */}
          {isDesktop && (
            <Link
              to="/admission-form"
              className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Apply Now
            </Link>
          )}

          {/* 🍔 HAMBURGER */}
          {!isDesktop && (
            <div
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </div>
          )}
        </div>

        {/* 📱 MOBILE MENU */}
        {!isDesktop && menuOpen && (
          <div className="px-6 pb-6 space-y-4 font-medium bg-white border-t animate-fadeIn">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block pt-4 hover:text-red-600"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-red-600"
            >
              About Us
            </Link>

            <details className="group">
              <summary className="list-none flex justify-between items-center cursor-pointer group-open:text-red-600">
                Management <span>▾</span>
              </summary>
              <div className="pl-4 mt-2 space-y-2 text-gray-600">
                <Link
                  to="/our-history"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-red-600"
                >
                  Our History
                </Link>
                <Link
                  to="/our-founder"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-red-600"
                >
                  Our Founder
                </Link>
                <Link
                  to="/our-cofounder"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-red-600"
                >
                  Our Co-Founder
                </Link>
              </div>
            </details>

            <details className="group">
              <summary className="list-none flex justify-between items-center cursor-pointer group-open:text-red-600">
                Academics <span>▾</span>
              </summary>
              <div className="pl-4 mt-2 space-y-2 text-gray-600">
                <Link
                  to="/curriculum"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-red-600"
                >
                  Curriculum
                </Link>
                <Link
                  to="/exam-result"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-red-600"
                >
                  Exams & Results
                </Link>
                <Link
                  to="/disciplines"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-red-600"
                >
                  Rules & Discipline
                </Link>
              </div>
            </details>

            <details className="group">
              <summary className="list-none flex justify-between items-center cursor-pointer group-open:text-red-600">
                Admissions <span>▾</span>
              </summary>
              <div className="pl-4 mt-2 space-y-2 text-gray-600">
                <Link
                  to="/admission-process"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-red-600"
                >
                  Admission Process
                </Link>
                <Link
                  to="/admission-policy"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-red-600"
                >
                  Admission Policy
                </Link>
                <Link
                  to="/fees"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-red-600"
                >
                  Fees Structure
                </Link>
                <Link
                  to="/scholarships"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-red-600"
                >
                  Scholarships
                </Link>
              </div>
            </details>

            <Link
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-red-600"
            >
              Gallery
            </Link>
            <Link
              to="/contact-us"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-red-600"
            >
              Contact Us
            </Link>

            <Link
              to="/admission-form"
              onClick={() => setMenuOpen(false)}
              className="bg-red-600 text-white px-4 py-3 rounded-md w-full font-bold shadow-lg block text-center"
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
