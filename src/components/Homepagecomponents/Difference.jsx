import React from "react";

const Difference = () => {
  return (
    <div className="bg-[#FEBE10] min-h-screen w-full relative">

      {/* CLOUDS */}
      <div className="absolute w-full flex flex-col items-center pointer-events-none z-10">
        <img
          src="/Images/Homepage/home-wine-cloud-2.webp"
          alt="cloud"
          className=" w-[280px] lg:w-[600px] mt-6 cloud-move"
        />

        <img
          src="/Images/Homepage/home-wine-cloud-3.webp"
          alt="cloud"
          className="w-[280px] lg:w-[600px] mt-10 cloud-move-reverse"
        />
      </div>

      {/* MAIN SECTION */}
      <div className="relative w-full min-h-screen py-20 flex items-center justify-center bg-cover bg-bottom overflow-visible">

        {/* LEFT STACKED IMAGES - visible on all screens */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-start gap-2 sm:gap-6 pl-1 sm:pl-4 z-40 overflow-visible w-[20%] sm:w-[25%] lg:w-[30%]">
          <img
            src="/Images/Homepage/figure-left-koala.webp"
            alt="koala"
            className="relative w-[150px] sm:w-[200px] lg:w-[250px] -translate-x-1/2 ml-10 sm:ml-20 lg:ml-24 -mt-[30%] lg:-mt-[50%] z-50"
          />
           <img
            src="/Images/Homepage/figure-left-branches-gum-tree.webp"
            alt="koala"
            className="relative w-[100px] sm:w-[150px] lg:w-[200px] -translate-x-1/2 ml-8 sm:ml-16 lg:ml-20 -mt-[20%] lg:-mt-[50%] z-50"
          />

          <img
            src="/Images/Homepage/figure-left-flower-white-brown.webp"
            alt="flower"
            className="w-[100px] sm:w-[150px] lg:w-[200px] -translate-x-1/2 ml-10 sm:ml-16 lg:ml-20"
          />

          <img
            src="/Images/Homepage/figure-left-flowers-red.webp"
            alt="flowers"
            className="w-[100px] sm:w-[150px] lg:w-[200px] -translate-x-1/2 ml-8 sm:ml-16 lg:ml-20 -mt-10 lg:-mt-40"
          />
        </div>

        {/* TEXT + ISLAND */}
        <div className="relative flex flex-col items-center text-center w-[60%] sm:w-[50%] max-w-2xl px-2 lg:w-[60%] z-30 mt-10" style={{ fontFamily: "ReginaBlack" }}>
          <h4
            className="uppercase tracking-widest mb-2 mt-10 lg:mt-20 text-[#C93345] text-[10px] sm:text-sm"
          >
            THE MOLLYDOOKER
          </h4>

          <h1
            className="text-3xl sm:text-7xl lg:text-[110px] font-bold text-[#C93345] -mt-2 lg:-mt-6"
            style={{ fontFamily: "ReginaBlack" }}
          >
            DIFFERENCE
          </h1>

          <p className="text-[10px] sm:text-sm text-[#f96c7d] w-full md:w-[80%] lg:w-[70%] leading-relaxed mt-4">
            Our seriously fun, juicy wines are the result of what happens when
            you combine science, innovation and dedication to create wines with
            a difference.
          </p>

          <img
            src="/Images/Homepage/home-difference-island-2.webp"
            alt="island"
            className="w-full mt-10 max-w-[500px] lg:max-w-none"
          />
        </div>

        {/* RIGHT STACKED IMAGES - visible on all screens */}
        <div className="absolute right-0 top-0 h-full flex flex-col justify-center items-end gap-4 sm:gap-10 pr-1 sm:pr-4 z-40 overflow-visible w-[20%] sm:w-[25%] lg:w-[30%]">
          <img
            src="/Images/Homepage/figure-right-acrobats.webp"
            alt="acrobats"
            className="relative -mt-20 sm:-mt-40 mr-6 sm:mr-14 lg:mr-26 w-[150px] sm:w-[250px] lg:w-[350px] translate-x-1/3 z-50"
          />

          <img
            src="/Images/Homepage/figure-right-emu.webp"
            alt="emu"
            className="w-[150px] sm:w-[250px] lg:w-[350px] translate-x-1/4 mt-20 sm:mt-50 lg:mt-80 mr-4 sm:mr-8 lg:mr-18"
          />
        </div>
      </div>
    </div>
  );
};

export default Difference;
