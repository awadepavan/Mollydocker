import React from "react";

const CellDoorHero = () => {
  return (
    <div className="w-full h-screen overflow-visible">
      <div className=""></div>
      {/* SKY BACKGROUND */}
      <div
        className="bg-[url('/Images/Homepage/home-visit-background-sky-scaled.jpg')]
        h-screen w-full bg-cover bg-center overflow-visible  relative "
      >
        {/* AUSTRALIA MAP + TEXT */}

        {/* LAND BACKGROUND + RIGHT KANGAROO */}
        <div className="pt-64">
          <div
            className=" bg-[url('/Images/Homepage/home-visit-background-land-1.webp')]
          h-[70%] w-full bg-cover bg-center flex justify-end items-end z-20 overflow-visible"
          >
            <img
              className="w-[30%] h-[90%] mt-30"
              src="/Images/Homepage/figure-right-kangaroo-bush.webp"
              alt=""
            />
          </div>
        </div>

{/* central images and texts */}
        <div className=" -mt-[700px] relative flex items-center justify-end z-30">
          <div className="">
            <img
              src="/Images/Homepage/figure-left-leaves-euc-1.webp"
              className="w-[400px] -mt-[200px] -ml-[50px]"
              alt=""
            />
            <img src="/Images/Homepage/figure-left-leaves-curved.webp" className="-ml-3" alt="" />
          </div>
          <div
            className="text-center space-y-4 px-4 max-w-3xl -mt-[500px]"
            style={{ fontFamily: "ReginaBlack" }}
          >
            <h3 className="text-xl text-[#e2451f] font-bold uppercase mb-2 tracking-widest" style={{ fontFamily: "ReginaBlack" }}>
              McLaren Vale, South Australia
            </h3>
            <h1 className="text-[8rem] font-extrabold leading-none text-[#e2451f] " style={{ fontFamily: "ReginaBlack" }}>
              Cellar Door
            </h1>
            <div className="flex justify-center gap-12 mt-4 text-xl font-bold uppercase underline cursor-pointer text-[#e2451f] " style={{ fontFamily: "ReginaBlack" }}>
              <span style={{ fontFamily: "ReginaBlack" }}>Tastings</span>
              <span style={{ fontFamily: "ReginaBlack" }}>Experiences & Tours</span>
              <span style={{ fontFamily: "ReginaBlack" }}>Events</span>
            </div>
          </div>
          <div className=" ">
            <img
              src="/Images/Homepage/figure-right-leaves-euc.webp"
              className="w-[400px] -mt-[500px] -pr-30 "
              alt=""
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CellDoorHero;
