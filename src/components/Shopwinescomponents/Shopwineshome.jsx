import React from "react";

const Shopwineshome = () => {
  return (
    <div className="bg-[url('/Images/Homepage/wine-bg-sky.avif')] h-screen w-full bg-cover bg-bottom-center relative">
      {/* Clouds */}
      <div className="absolute w-full flex flex-col items-center pointer-events-none z-10 px-4">
        <img
          src="/Images/Homepage/home-wine-cloud-2.webp"
          alt="cloud"
          className="w-[280px] md:w-[600px] mt-6 cloud-move"
        />
        <img
          src="/Images/Homepage/home-wine-cloud-2.webp"
          alt="cloud"
          className="hidden md:block w-[600px] ml-96 mt-10 cloud-move-reverse"
        />
      </div>

      <div className="absolute w-full flex flex-col items-center pointer-events-none z-10">
        <img
          src="/Images/Homepage/home-wine-cloud-3.webp"
          alt="cloud"
          className="w-[280px] md:w-[600px] mt-6 cloud-move"
        />
      </div>

      {/* Main centered text container */}
      <div
        className="relative z-30 py-32 md:py-48 lg:py-60 flex flex-col items-center justify-start h-full text-white"
        style={{ fontFamily: "ReginaBlack" }}
      >
        <h3 className="text-center text-white text-base md:text-xl uppercase tracking-wide">
          Wines for All
        </h3>
        <h1 className="text-center text-white text-4xl sm:text-7xl lg:text-8xl uppercase my-4">Shop Wines</h1>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 text-white text-sm sm:text-lg md:text-xl uppercase font-semibold mt-10 px-6">
          <p className="cursor-pointer border-b-2 border-transparent hover:border-white transition-all">
            Lefty Wines
          </p>
          <p className="cursor-pointer border-b-2 border-transparent hover:border-white transition-all">
            Fun Wines
          </p>
          <p className="cursor-pointer border-b-2 border-transparent hover:border-white transition-all">
            Family Wines
          </p>
          <p className="cursor-pointer border-b-2 border-transparent hover:border-white transition-all">
            Love Wines
          </p>
          <p className="cursor-pointer border-b-2 border-transparent hover:border-white transition-all">
            Velvet Glove
          </p>
          <p className="cursor-pointer border-b-2 border-transparent hover:border-white transition-all">
            Large Format
          </p>
          <p className="cursor-pointer border-b-2 border-transparent hover:border-white transition-all">
            Event Tickets
          </p>
        </div>
      </div>

      {/* Flowers positioned absolutely in corners */}
      <img
        src="/Images/Homepage/figure-left-flowers-white.webp"
        alt="left flowers"
        className="absolute bottom-0 left-0 w-[35%] sm:w-[25%] lg:w-[20%] max-w-[250px] pointer-events-none select-none z-20"
      />

      <img
        src="/Images/Homepage/figure-right-flowers-white.webp"
        alt="right flowers"
        className="absolute bottom-0 right-0 w-[35%] sm:w-[25%] lg:w-[20%] max-w-[250px] pointer-events-none select-none z-20"
      />
    </div>
  );
};

export default Shopwineshome;
