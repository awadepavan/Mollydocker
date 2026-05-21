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
          absolute flex flex-col sm:flex-row items-center justify-center 
          h-auto sm:h-[20%] 
          w-[250px] sm:w-[400px] lg:w-[600px]
          mt-10 sm:mt-30 mb-10 sm:mb-60 
          left-1/2 transform -translate-x-1/2 
          z-30
        ">
          {/* MAP */}
          <img
            src="/Images/Homepage/home-visit-australia-map.webp"
            alt=""
            className="w-[180px] hidden lg:block sm:w-auto sm:-ml-96 mt-4 sm:mt-50"
          />

          {/* TEXT */}
          <div
            className="mt-4 sm:mt-20 sm:ml-6 lg:-ml-16 text-center sm:text-left"
            style={{ fontFamily: "ReginaBlack" }}
          >
            <h3 className="text-sm sm:text-lg lg:text-xl text-[#E2451f] sm:-ml-78 lg:-ml-96"  style={{ fontFamily: "ReginaBlack" }}>
              McLaren Vale, South Australia
            </h3>

            <h1 className="
              text-3xl sm:text-5xl lg:text-7xl 
              text-[#E2451f] 
              -ml-0 sm:-ml-[300px] lg:-ml-[450px]
            "  style={{ fontFamily: "ReginaBlack" }}>
              Cellar Door
            </h1>
          </div>
        </div>

        {/* LAND + KANGAROO */}
        <div className="pt-60 sm:pt-96 lg:pt-28">
          <div
            className="
              bg-[url('/Images/Homepage/home-visit-background-land-1.webp')]
              h-[50vh] sm:h-[99%] lg:h-[70%]
              w-full bg-cover bg-center 
              flex justify-end items-end 
              z-20 overflow-visible
            "
          >
            <img
              className="w-[50%] sm:w-[30%] h-auto sm:h-[90%] mt-10 sm:mt-30"
              src="/Images/Homepage/figure-right-kangaroo-bush.webp"
              alt=""
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
