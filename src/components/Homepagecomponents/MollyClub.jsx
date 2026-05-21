import React from "react";

const MollyClub = () => {
  return (
    <div className=" h-screen w-full bg-[#8d1a3a]">
        {/* MAIN SECTION */}
      <div className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-bottom overflow-visible">

        {/* LEFT cheta IMAGES - visible on all screens */}
        <div className="flex absolute left-0 top-1/4 lg:top-50 h-full flex-col justify-start gap-2 sm:gap-6 pl-1 sm:pl-4 z-40 overflow-visible w-[32%] sm:w-[28%] lg:w-[30%]">
          <img
            src="/Images/Homepage/figure-left-leaves-euc-2.webp"
            alt="koala"
            className="relative w-[180px] sm:w-[250px] lg:w-[350px] -translate-x-1/2 ml-10 sm:ml-24 lg:ml-34 -mt-[30%] lg:-mt-[50%] z-50"
          />
           <img
            src="/Images/Homepage/figure-left-panther.webp"
            alt="koala"
            className="relative w-[180px] sm:w-[250px] lg:w-[350px] -translate-x-1/2 ml-10 sm:ml-20 lg:ml-30 -mt-[30%] lg:-mt-[50%] z-50"
          />

          <img
            src="/Images/Homepage/figure-left-leaves-2.webp"
            alt="flower"
            className="w-[180px] sm:w-[250px] lg:w-[350px] -translate-x-1/2 ml-10 sm:ml-24 lg:ml-40 -mt-10 lg:-mt-50"
          />
        </div>

        {/* TEXT  */}
        <div className="relative flex flex-col items-center text-center w-[60%] sm:w-[50%] max-w-2xl px-2 lg:w-[60%] z-30 mt-3 lg:mt-10" style={{ fontFamily: "ReginaBlack" }}>
          <h4
            className="uppercase tracking-widest mb-2 mt-20 lg:mt-52 text-[#f1904a] text-[10px] sm:text-sm"
          >
           Join the Bold Yet Elegant
          </h4>

          <h1
            className="text-3xl sm:text-7xl lg:text-[110px] font-bold text-[#f1904a] mt-2"
            style={{ fontFamily: "ReginaBlack" }}
          >
            MollyClub
          </h1>

          <p className="text-[10px] sm:text-sm text-[#f1904a] w-full md:w-[80%] lg:w-[70%] leading-relaxed mt-4">
          Six juicy wines delivered to your door, three times a year.
          </p>
        </div>

        {/* RIGHT pecock IMAGES - visible on all screens */}
        <div className="flex absolute right-0 top-0 h-full flex-col justify-center items-end gap-10 pr-1 sm:pr-4 z-40 overflow-visible w-[32%] sm:w-[28%] lg:w-[30%]">
          <img
            src="/Images/Homepage/figure-peacock-chest.webp"
            alt="acrobats"
            className="relative mt-[200px] sm:mt-[350px] lg:mt-[560px] mr-[50px] sm:mr-[200px] lg:mr-[350px] w-[260px] sm:w-[370px] lg:w-[750px] translate-x-1/3 z-50"
          />
        </div>
      </div>
    </div>
  );
};

export default MollyClub;
