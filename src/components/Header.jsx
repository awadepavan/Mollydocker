import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="  lg:w-full flex items-center justify-between px-6 md:px-10 py-4">

        {/* LEFT — MENU BUTTON */}
        <div className="flex items-center gap-6">
          <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full bg-[#e54a1a] flex items-center justify-center text-white font-bold text-[18px] md:text-[22px] tracking-wide">
            MENU
          </div>

          {/* LEFT NAV LINKS — HIDE ON MOBILE */}
          <nav className="hidden lg:block items-center gap-10 text-white font-semibold text-[16px] uppercase ml-[50px] md:ml-[100px]">
            <a href="/shopwines">Shop Wines</a>
            <a href="/cellardoors" className="lg:ml-10">Cellar Door</a>
          </nav>
        </div>

        {/* CENTER LOGO — ALWAYS VISIBLE */}
        <div className=" hidden lg:block flex justify-center w-[200px] lg:ml-20">
          <a href="/">
            <img
              src="/Images/Homepage/logo.svg"
              alt="logo"
              className="w-[120px] md:w-[150px] object-contain"
            />
          </a>
        </div>

        {/* RIGHT AREA — HIDE ON MOBILE */}
        <div className=" md:flex items-center gap-8">
          {/* NAV LINKS RIGHT */}
          <nav className=" hidden lg:block lg:gap-10 flex items-center gap-10 text-white font-semibold text-[16px] uppercase mr-[150px]">
            <a href="/mollyclubs">Mollyclub</a>
            <a href="/events" className="lg:ml-10">Events</a>
          </nav>

          {/* LANG SWITCH */}
          <div className=" hidden lg:block flex items-center gap-2 text-white font-semibold text-[14px] uppercase">
            <span>AUS</span>
            <span className="opacity-60">|</span>
            <span className="underline">USA</span>
          </div>

          {/* USER ICON */}
          <div className="w-[45px] h-[45px] bg-white rounded-full flex items-center justify-center">
            <img
              src="/Images/Homepage/icon-shop-user.svg"
              className="w-[30px] h-[30px]"
              alt=""
            />
          </div>

          {/* CART ICON */}
          <div className="relative">
            <div className="w-[45px] h-[45px] bg-white rounded-full flex items-center justify-center">
              <img
                src="/Images/Homepage/icon-shop-cart.svg"
                className="w-[30px] h-[30px]"
                alt=""
              />
            </div>

            {/* CART COUNT */}
            <span className="absolute -top-1 -right-1 bg-[#F4B816] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
