import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Herosection = () => {
  return (
    <div>
      <div className="relative bg-[url('/Images/Homepage/home-hero.png')] h-[1000px] w-full bg-cover bg-bottom-center flex items-center justify-center overflow-hidden z-30">
        {/* Left side images - visible on all screens, scaled down on mobile */}
        <div className="flex absolute left-0 top-0 w-[48%] sm:w-[28%] lg:w-[30%] h-full flex-col items-start justify-start gap-2 md:gap-4 pl-0 sm:pl-4">
          <img
            className="leftImg w-[130%] sm:w-[110%] lg:w-[80%] h-56 sm:h-64 lg:h-96 object-contain object-left sm:object-center max-w-none -ml-[25%] sm:-ml-10"
            src="/Images/Homepage/home-hero-left-euc-top-1.webp"
            alt="left top"
          />
          <img
            className="leftImg w-[130%] sm:w-[90%] lg:w-[50%] h-48 sm:h-48 lg:h-72 object-contain object-left sm:object-center max-w-none -mt-6 sm:-mt-16 lg:-mt-34 -ml-[25%] sm:-ml-10"
            src="/Images/Homepage/home-hero-left-white-flower.webp"
            alt="left middle"
          />
          <img
            className="leftImg w-[130%] sm:w-[90%] lg:w-[50%] h-48 sm:h-48 lg:h-72 object-contain object-left sm:object-center max-w-none -mt-6 sm:-mt-10 lg:-mt-30 -ml-[25%] sm:-ml-10"
            src="/Images/Homepage/home-hero-left-roses.webp"
            alt="left middle"
          />
          <img
            className="leftImg w-[130%] sm:w-[110%] lg:w-[70%] h-48 sm:h-48 lg:h-72 object-contain object-left sm:object-center max-w-none -mt-2 sm:-mt-4 lg:-mt-10 -ml-[25%] sm:-ml-10"
            src="/Images/Homepage/home-hero-left-jester.webp"
            alt="left middle"
          />
        </div>

        {/* Center text */}
        <div className="relative z-10 w-[60%] sm:w-[50%] max-w-3xl px-2 lg:w-[70%] flex items-center justify-center -mt-20 lg:-mt-[300px]">
          <h1
            className="heroTitle text-[#FEBE10] font-bold text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-center leading-tight"
            style={{ fontFamily: "ReginaBlack" }}
          >
            WHERE WINE GOES <br /> TO HAVE FUN
          </h1>
        </div>

        {/* Right side images — stacked vertically - visible on all screens, scaled down on mobile */}
        <div className="flex absolute right-0 top-0 w-[48%] sm:w-[28%] lg:w-[30%] h-full flex-col items-end justify-center gap-2 md:gap-8 pr-0 sm:pr-4">
          <img
            className="rightImg w-[130%] sm:w-[110%] lg:w-[90%] h-64 sm:h-64 lg:h-96 object-contain object-right sm:object-center max-w-none mt-0 -mr-[25%] lg:-mr-[29%]"
            src="/Images/Homepage/home-hero-right-rainbow-lorakeet.webp"
            alt="right top"
          />
          <img
            className="rightImg w-[130%] sm:w-[110%] lg:w-[90%] h-64 sm:h-64 lg:h-96 object-contain object-right sm:object-center max-w-none -mt-12 sm:-mt-20 lg:-mt-70 -mr-[25%] sm:-mr-[10%] lg:-mr-[23%]"
            src="/Images/Homepage/home-hero-right-peach.webp"
            alt="right bottom"
          />
          <img
            className="rightImg w-[130%] sm:w-[85%] lg:w-[60%] h-64 sm:h-64 lg:h-96 object-contain object-right sm:object-center max-w-none -mt-8 sm:-mt-10 lg:-mt-20 -mr-[25%] lg:-mr-[23%]"
            src="/Images/Homepage/home-hero-right-white-bird.webp"
            alt="right bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
