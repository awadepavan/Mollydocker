import React from "react";

const Shopwineshome = () => {
  return (
    <div className="bg-[url('/Images/Homepage/wine-bg-sky.avif')] h-screen w-full bg-cover bg-bottom-center relative">
      {/* Clouds */}
      <div className="absolute w-full flex flex-col items-center pointer-events-none z-10">
        <img
          src="/Images/Homepage/home-wine-cloud-2.webp"
          alt="cloud"
          className="w-[600px] mt-6 cloud-move"
        />
        <img
          src="/Images/Homepage/home-wine-cloud-2.webp"
          alt="cloud"
          className="w-[600px] ml-96 mt-10 cloud-move-reverse"
        />
      </div>

      <div className="absolute mr-96 w-full flex flex-col items-center pointer-events-none z-10">
        <img
          src="/Images/Homepage/home-wine-cloud-3.webp"
          alt="cloud"
          className="w-[600px] mt-6 cloud-move"
        />
      </div>

      {/* Main centered text container */}
      <div
        className="relative z-30 py-60 flex flex-col items-center justify-start h-full text-white"
        style={{ fontFamily: "ReginaBlack" }}
      >
        <h3 className="text-center text-white text-xl uppercase tracking-wide">
          Wines for All
        </h3>
        <h1 className="text-center text-white text-8xl uppercase my-4">Shop Wines</h1>

        <div className="flex flex-wrap justify-center gap-10 text-white text-xl uppercase font-semibold mt-10">
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

      {/* Corrected positioning for flowers */}
      <img
        src="/Images/Homepage/figure-left-flowers-white.webp"
        alt="left flowers"
        className="relative  -mt-[300px] bottom-0 left-0 w-[20%] pointer-events-none select-none"
      />

      <img
        src="/Images/Homepage/figure-right-flowers-white.webp"
        alt="right flowers"
        className="relative -mt-[400px] ml-[1210px] bottom-0 right-0 w-[20%] pointer-events-none select-none"
      />
    </div>
  );
};

export default Shopwineshome;
