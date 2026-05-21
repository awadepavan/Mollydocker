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

        {/* LEFT STACKED IMAGES - hidden on mobile/tablet */}
        <div className="hidden lg:flex absolute left-0 top-0 h-full flex-col justify-start gap-6 pl-4 z-40 overflow-visible">
          <img
            src="/Images/Homepage/figure-left-koala.webp"
            alt="koala"
            className="relative w-[150px] lg:w-[250px] -translate-x-1/2 ml-15 lg:ml-24 -mt-[50%] lg:-mt-[50%] z-50"
          />
           <img
            src="/Images/Homepage/figure-left-branches-gum-tree.webp"
            alt="koala"
            className="relative w-[120px]  lg:w-[200px] -translate-x-1/2 ml-10 lg:ml-20 -mt-[30%] lg:-mt-[50%] z-50"
          />

          <img
            src="/Images/Homepage/figure-left-flower-white-brown.webp"
            alt="flower"
            className=" w-[150px] lg:w-[200px] -translate-x-1/2 ml-15 lg:ml-20"
          />

          <img
            src="/Images/Homepage/figure-left-flowers-red.webp"
            alt="flowers"
            className=" w-[150px] lg:w-[200px] -translate-x-1/2 ml-10 lg:ml-20 -mt-50 lg:-mt-40"
          />
        </div>

        {/* TEXT + ISLAND */}
        <div className="relative flex flex-col items-center text-center w-full max-w-2xl px-6 lg:w-[60%] z-30 mt-10" style={{ fontFamily: "ReginaBlack" }}>
          <h4
            className="uppercase tracking-widest mb-2 mt-10 lg:mt-20 text-[#C93345] text-xs sm:text-sm"
          >
            THE MOLLYDOOKER
          </h4>

          <h1
            className="text-4xl sm:text-7xl lg:text-[110px] font-bold text-[#C93345] -mt-2 lg:-mt-6"
            style={{ fontFamily: "ReginaBlack" }}
          >
            DIFFERENCE
          </h1>

          <p className="text-xs sm:text-sm text-[#f96c7d] w-full md:w-[80%] lg:w-[70%] leading-relaxed mt-4">
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

        {/* RIGHT STACKED IMAGES - hidden on mobile/tablet */}
        <div className="hidden lg:flex absolute right-0 top-0 h-full flex-col justify-center items-end gap-10 pr-4 z-40 overflow-visible">
          <img
            src="/Images/Homepage/figure-right-acrobats.webp"
            alt="acrobats"
            className="relative -mt-40 mr-14 lg:mr-26 w-[200px] lg:w-[350px] translate-x-1/3 z-50"
          />

          <img
            src="/Images/Homepage/figure-right-emu.webp"
            alt="emu"
            className=" w-[200px] lg:w-[350px] translate-x-1/4 mt-50 lg:mt-80 mr-8 lg:mr-18"
          />
        </div>
      </div>
    </div>
  );
};

export default Difference;
