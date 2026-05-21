import React from "react";

const MollyClub = () => {
  return (
    <div className=" h-screen w-full bg-[#8d1a3a]">
        {/* MAIN SECTION */}
      <div className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-bottom overflow-visible">

        {/* LEFT cheta IMAGES - hidden on mobile/tablet */}
        <div className="hidden lg:flex absolute left-0 top-50 h-full flex-col justify-start gap-6 pl-4 z-40 overflow-visible">
          <img
            src="/Images/Homepage/figure-left-leaves-euc-2.webp"
            alt="koala"
            className="relative lg-[200px] w-[200px] lg:w-[350px] -translate-x-1/2 ml-16 lg:ml-34 -mt-[50%] lg:-mt-[50%] z-50"
          />
           <img
            src="/Images/Homepage/figure-left-panther.webp"
            alt="koala"
            className="relative w-[200px] lg:w-[350px] -translate-x-1/2 ml-20 lg:ml-30 -mt-[50%] lg:-mt-[50%] z-50"
          />

          <img
            src="/Images/Homepage/figure-left-leaves-2.webp"
            alt="flower"
            className=" w-[200px] lg:w-[350px] -translate-x-1/2 ml-20 lg:ml-40 -mt-30 lg:-mt-50"
          />
        </div>

        {/* TEXT  */}
        <div className="relative flex flex-col items-center text-center w-full max-w-2xl px-6 lg:w-[60%] z-30 mt-3 lg:mt-10" style={{ fontFamily: "ReginaBlack" }}>
          <h4
            className="uppercase tracking-widest mb-2 mt-20 lg:mt-52 text-[#f1904a] text-xs sm:text-sm"
          >
           Join the Bold Yet Elegant
          </h4>

          <h1
            className="text-5xl sm:text-7xl lg:text-[110px] font-bold text-[#f1904a] mt-2"
            style={{ fontFamily: "ReginaBlack" }}
          >
            MollyClub
          </h1>

          <p className="text-xs sm:text-sm text-[#f1904a] w-full md:w-[80%] lg:w-[70%] leading-relaxed mt-4">
          Six juicy wines delivered to your door, three times a year.
          </p>
        </div>

        {/* RIGHT pecock IMAGES - hidden on mobile/tablet */}
        <div className="hidden lg:flex absolute right-0 top-0 h-full flex-col justify-center items-end gap-10 pr-4 z-40 overflow-visible">
          <img
            src="/Images/Homepage/figure-peacock-chest.webp"
            alt="acrobats"
            className="relative mt-[420px] lg:mt-[560px] mr-[150px] lg:mr-[350px] w-[370px] lg:w-[750px] translate-x-1/3 z-50"
          />
        </div>
      </div>
    </div>
  );
};

export default MollyClub;
