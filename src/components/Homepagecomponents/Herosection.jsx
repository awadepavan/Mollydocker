import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Herosection = () => {
  return (
    <div>
      <div className="relative bg-[url('/Images/Homepage/home-hero.png')] h-[1000px] w-full bg-cover bg-bottom-center flex items-center justify-center overflow-hidden z-30">
        {/* Left side images */}
        <div className="absolute left-0 top-0 w-[30%] md:w-[30%] h-full flex flex-col items-start justify-start gap-4 pl-4">
          <img
            className=" leftImg w-[99%] lg:w-[80%] lg:h-96 object-contain -ml-10  "
            src="/Images/Homepage/home-hero-left-euc-top-1.webp"
            alt="left top"
          />
          <img
            className=" leftImg w-[70%]  lg:w-[50%] h-80 lg:h-72 object-contain -mt-30 lg:-mt-34 -ml-6 lg:-ml-10"
            src="/Images/Homepage/home-hero-left-white-flower.webp"
            alt="left middle"
          />
          <img
            className=" leftImg w-[70%]  lg:w-[50%] lg:h-72 object-contain -mt-20 lg:-mt-30 -ml-6 lg:-ml-10"
            src="/Images/Homepage/home-hero-left-roses.webp"
            alt="left middle"
          />
          <img
            className="leftImg w-[99%]  lg:w-[70%] lg:h-72 object-contain lg:-mt-10 -ml-5 lg:-ml-10"
            src="/Images/Homepage/home-hero-left-jester.webp"
            alt="left middle"
          />
        </div>

        {/* Center text */}
        <div className="relative z-10 w-[70%] flex items-center justify-center -mt-[300px]">
          <h1
            className=" heroTitle text-[#FEBE10] font-bold text-6xl mg:text-7xl  lg:text-8xl   text-center leading-tight"
            style={{ fontFamily: "ReginaBlack" }}
          >
            WHERE WINE GOES <br /> TO HAVE FUN
          </h1>
        </div>

        {/* Right side images — stacked vertically */}
        <div className="absolute right-0 top-0 w-[30%] h-full flex flex-col items-end justify-center gap-8 pr-4">
          <img
            className=" rightImg  w-[90%] h-96 object-contain mt-0 -mr-[29%]"
            src="/Images/Homepage/home-hero-right-rainbow-lorakeet.webp"
            alt="right top"
          />
          <img
            className="rightImg  w-[90%] h-96 object-contain -mt-70 -mr-[23%]"
            src="/Images/Homepage/home-hero-right-peach.webp"
            alt="right bottom"
          />
          <img
            className="rightImg  w-[60%] h-96 object-contain -mt-20 -mr-[23%]"
            src="/Images/Homepage/home-hero-right-white-bird.webp"
            alt="right bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
