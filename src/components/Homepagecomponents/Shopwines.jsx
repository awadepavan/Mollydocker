import React from "react";

const Shopwines = () => {
  return (
    <div
      className="relative bg-[url('/Images/Homepage/wine-bg-sky.avif')] 
      h-[800px] w-full bg-cover bg-center overflow-hidden -mt-20"
    >
      <div className="relative text-center mt-[12%] z-10 ">
        <h4 className="text-white font-bold text-5xl lg:text-4xl">Wines for All</h4>
        <h1 className="text-white font-bold text-8xl lg:text-9xl">Shop Wines</h1>
      </div>

      {/* Clouds */}
      <div className="absolute top-0 left-0 w-full flex flex-col items-center z-0">
        <div className="flex items-center justify-center gap-10 mt-10 cloud-move">
          <img
            src="/Images/Homepage/home-wine-cloud-2.webp"
            alt="cloud"
            className="w-[400px] "
          />
          <img
            src="/Images/Homepage/home-wine-cloud-2.webp"
            alt="cloud"
            className="w-[800px]"
          />
        </div>

        <img
          src="/Images/Homepage/home-wine-cloud-3.webp"
          alt="cloud"
          className="w-[800px] mt-10 "
        />
      </div>

      {/* Wine Bottles Row */}
      <div className="absolute bottom-0 w-full flex items-end justify-center gap-8 z-10">
        {/* Each bottle → 50% below container using translate-y */}
        <img
          src="/Images/Homepage/figure-bottle-boxer.webp"
          className="w-20  lg:w-30 translate-y-1/2"
        />
        <img
          src="/Images/Homepage/figure-bottle-boxer.webp"
          className="w-20  lg:w-30 translate-y-1/3"
        />
        <img
          src="/Images/Homepage/figure-bottle-boxer.webp"
          className="w-20 lg:w-30 translate-y-1/2"
        />
        <img
          src="/Images/Homepage/figure-bottle-boxer.webp"
          className="w-20 lg:w-30 translate-y-1/3"
        />
        <img
          src="/Images/Homepage/figure-bottle-boxer.webp"
          className="w-20 lg:w-30 translate-y-1/2"
        />
        <img
          src="/Images/Homepage/figure-bottle-boxer.webp"
          className="w-20 lg:w-30 translate-y-1/3"
        />
        <img
          src="/Images/Homepage/figure-bottle-boxer.webp"
          className="w-20 lg:w-30 translate-y-1/2"
        />
        <img
          src="/Images/Homepage/figure-bottle-boxer.webp"
          className="w-20 lg:w-30 translate-y-1/3"
        />
        <img
          src="/Images/Homepage/figure-bottle-boxer.webp"
          className="w-20 lg:w-30 translate-y-1/2"
        />
        <img
          src="/Images/Homepage/figure-bottle-boxer.webp"
          className="w-20 lg:w-30 translate-y-1/3"
        />
        <img
          src="/Images/Homepage/figure-bottle-boxer.webp"
          className="w-20 lg:w-30 translate-y-1/2"
        />
        <img
          src="/Images/Homepage/figure-bottle-boxer.webp"
          className="w-20 lg:w-30 translate-y-1/3"
        />
        <img
          src="/Images/Homepage/figure-bottle-boxer.webp"
          className="w-20 lg:w-30 translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default Shopwines;
