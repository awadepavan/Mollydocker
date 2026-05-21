import React from "react";

const CellDoorHero = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* SKY BACKGROUND & CONTAINER */}
      <div
        className="bg-[url('/Images/Homepage/home-visit-background-sky-scaled.jpg')]
        min-h-screen w-full bg-cover bg-center relative flex flex-col justify-between overflow-hidden"
      >
        {/* LEFT DECORATION LEAVES (Desktop only) */}
        <div className="hidden lg:block absolute left-0 top-1/4 z-20 pointer-events-none select-none">
          <img
            src="/Images/Homepage/figure-left-leaves-euc-1.webp"
            className="w-[300px] xl:w-[400px]"
            alt=""
          />
          <img 
            src="/Images/Homepage/figure-left-leaves-curved.webp" 
            className="w-[200px] xl:w-[250px] -mt-10 ml-10" 
            alt="" 
          />
        </div>

        {/* RIGHT DECORATION LEAVES (Desktop only) */}
        <div className="hidden lg:block absolute right-0 top-1/4 z-20 pointer-events-none select-none">
          <img
            src="/Images/Homepage/figure-right-leaves-euc.webp"
            className="w-[300px] xl:w-[400px]"
            alt=""
          />
        </div>

        {/* CENTER CONTENT */}
        <div
          className="relative z-30 flex flex-col items-center text-center w-full max-w-3xl px-6 mx-auto pt-24 md:pt-36 lg:pt-48"
          style={{ fontFamily: "ReginaBlack" }}
        >
          <h3 className="text-sm sm:text-lg md:text-xl text-[#e2451f] font-bold uppercase tracking-widest" style={{ fontFamily: "ReginaBlack" }}>
            McLaren Vale, South Australia
          </h3>
          <h1 className="text-5xl sm:text-7xl lg:text-[8rem] font-extrabold leading-none text-[#e2451f] mt-2" style={{ fontFamily: "ReginaBlack" }}>
            Cellar Door
          </h1>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-6 text-base sm:text-xl font-bold uppercase underline cursor-pointer text-[#e2451f]" style={{ fontFamily: "ReginaBlack" }}>
            <span style={{ fontFamily: "ReginaBlack" }}>Tastings</span>
            <span style={{ fontFamily: "ReginaBlack" }}>Experiences & Tours</span>
            <span style={{ fontFamily: "ReginaBlack" }}>Events</span>
          </div>
        </div>

        {/* LAND BACKGROUND + RIGHT KANGAROO */}
        <div className="w-full mt-auto pt-10">
          <div
            className="bg-[url('/Images/Homepage/home-visit-background-land-1.webp')]
            h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full bg-cover bg-center flex justify-end items-end z-10"
          >
            <img
              className="w-[50%] sm:w-[30%] h-auto max-h-[85%] object-contain"
              src="/Images/Homepage/figure-right-kangaroo-bush.webp"
              alt="Kangaroo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CellDoorHero;
