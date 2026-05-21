import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="relative w-full flex items-center justify-between px-6 md:px-10 py-4">

        {/* LEFT — MENU BUTTON & NAV */}
        <div className="flex items-center gap-4 lg:gap-8">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-[65px] h-[65px] lg:w-[85px] lg:h-[85px] rounded-full bg-[#e54a1a] hover:bg-[#c93f14] transition-colors duration-200 flex items-center justify-center text-white font-bold text-[14px] lg:text-[18px] tracking-wide cursor-pointer z-50 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>

          {/* LEFT NAV LINKS — HIDE ON MOBILE */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-semibold text-[15px] uppercase">
            <Link to="/shopwines" className="hover:text-[#FEBE10] transition-colors duration-200">Shop Wines</Link>
            <Link to="/cellardoors" className="hover:text-[#FEBE10] transition-colors duration-200">Cellar Door</Link>
          </nav>
        </div>

        {/* CENTER LOGO — ALWAYS VISIBLE & ABSOLUTELY CENTERED */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-[100px] md:w-[130px] lg:w-[160px]">
          <Link to="/" className="flex justify-center">
            <img
              src="/Images/Homepage/logo.svg"
              alt="Mollydooker Logo"
              className="w-full object-contain"
            />
          </Link>
        </div>

        {/* RIGHT AREA */}
        <div className="flex items-center gap-3 md:gap-4 lg:gap-8 z-50">
          {/* NAV LINKS RIGHT — HIDE ON MOBILE */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-semibold text-[15px] uppercase lg:mr-4">
            <Link to="/mollyclubs" className="hover:text-[#FEBE10] transition-colors duration-200">Mollyclub</Link>
            <Link to="/events" className="hover:text-[#FEBE10] transition-colors duration-200">Events</Link>
          </nav>

          {/* LANG SWITCH — HIDE ON MOBILE */}
          <div className="hidden lg:flex items-center gap-2 text-white font-semibold text-[13px] uppercase lg:mr-4">
            <span className="hover:text-[#FEBE10] cursor-pointer">AUS</span>
            <span className="opacity-60">|</span>
            <span className="underline decoration-[#FEBE10] decoration-2 underline-offset-4 cursor-pointer">USA</span>
          </div>

          {/* USER ICON */}
          <div className="w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
            <img
              src="/Images/Homepage/icon-shop-user.svg"
              className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]"
              alt="User account"
            />
          </div>

          {/* CART ICON */}
          <div className="relative cursor-pointer">
            <div className="w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <img
                src="/Images/Homepage/icon-shop-cart.svg"
                className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]"
                alt="Shopping cart"
              />
            </div>

            {/* CART COUNT */}
            <span className="absolute -top-1 -right-1 bg-[#F4B816] text-black text-[10px] lg:text-xs font-bold rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY — SLIDES IN FROM THE LEFT */}
      <div
        className={`fixed inset-y-0 left-0 w-full h-full bg-[#0c0c0c]/98 backdrop-blur-lg z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-center px-6">
          <nav className="flex flex-col gap-6 text-white font-bold text-[32px] md:text-[40px] uppercase tracking-wide">
            <Link 
              to="/shopwines" 
              className="hover:text-[#FEBE10] transition-colors duration-200"
              style={{ fontFamily: "ReginaBlack" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Shop Wines
            </Link>
            <Link 
              to="/cellardoors" 
              className="hover:text-[#FEBE10] transition-colors duration-200"
              style={{ fontFamily: "ReginaBlack" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Cellar Door
            </Link>
            <Link 
              to="/mollyclubs" 
              className="hover:text-[#FEBE10] transition-colors duration-200"
              style={{ fontFamily: "ReginaBlack" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Mollyclub
            </Link>
            <Link 
              to="/events" 
              className="hover:text-[#FEBE10] transition-colors duration-200"
              style={{ fontFamily: "ReginaBlack" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
          </nav>

          {/* LANG SWITCH FOR MOBILE */}
          <div className="flex items-center gap-4 text-white font-semibold text-[16px] uppercase mt-10">
            <span className="hover:text-[#FEBE10] cursor-pointer">AUS</span>
            <span className="opacity-40">|</span>
            <span className="underline decoration-[#FEBE10] decoration-2 underline-offset-4 cursor-pointer">USA</span>
          </div>

          <div className="mt-8 text-[#FEBE10] text-xs tracking-widest font-semibold uppercase opacity-80">
            Where Wine Goes To Have Fun
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
