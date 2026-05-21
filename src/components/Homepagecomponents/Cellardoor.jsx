import React from "react";

const Cellardoor = () => {
  return (
    <div className="w-full min-h-screen overflow-visible">
      {/* SKY BACKGROUND */}
      <div
        className="bg-[url('/Images/Homepage/home-visit-background-sky-scaled.jpg')]
        min-h-screen w-full bg-cover bg-center overflow-visible relative"
      >
        {/* MAP + TEXT */}
        <div className="
          absolute flex flex-col md:flex-row items-center justify-center 
          gap-6 md:gap-10
          w-full max-w-4xl px-6
          mt-16 md:mt-24
          left-1/2 transform -translate-x-1/2 
          z-30
        ">
          {/* MAP */}
          <img
            src="/Images/Homepage/home-visit-australia-map.webp"
            alt="Australia Map"
            className="w-[120px] md:w-[180px] object-contain"
          />

          {/* TEXT */}
          <div
            className="text-center md:text-left"
            style={{ fontFamily: "ReginaBlack" }}
          >
            <h3 className="text-xs sm:text-base lg:text-lg text-[#E2451f]"  style={{ fontFamily: "ReginaBlack" }}>
              McLaren Vale, South Australia
            </h3>

            <h1 className="
              text-4xl sm:text-6xl lg:text-7xl 
              text-[#E2451f] font-bold mt-1
            "  style={{ fontFamily: "ReginaBlack" }}>
              Cellar Door
            </h1>
          </div>
        </div>

        {/* LAND + KANGAROO */}
        <div className="pt-80 md:pt-96 lg:pt-28">
          <div
            className="
              bg-[url('/Images/Homepage/home-visit-background-land-1.webp')]
              h-[50vh] md:h-[60vh] lg:h-[70vh]
              w-full bg-cover bg-center 
              flex justify-end items-end 
              z-20 overflow-visible
            "
          >
            <img
              className="w-[50%] sm:w-[30%] h-auto max-h-[80%] mt-10"
              src="/Images/Homepage/figure-right-kangaroo-bush.webp"
              alt="Kangaroo"
            />
          </div>
        </div>

        {/* PEACOCK FRONDS */}
        <div className="relative w-full h-[100px] sm:h-[150px] z-40 overflow-visible -mt-10 sm:-mt-20">
          <img
            src="/Images/Homepage/home-club-peacock-fronds.png"
            className="relative w-full -translate-y-1/4 sm:-translate-y-1/2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Cellardoor;
