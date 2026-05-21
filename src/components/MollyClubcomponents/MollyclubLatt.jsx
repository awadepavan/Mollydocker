import React from "react";

const MollyclubLatt = () => {
  return (
    <div className="bg-transparent relative w-full min-h-screen overflow-visible">

      {/* TOP RED STRIP */}
      <div className="absolute top-0 left-0 w-full h-[120px]" />

      {/* MAIN SECTION BACKGROUND */}
      <div
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center overflow-visible z-0"
        style={{ backgroundImage: "url('/Images/Homepage/events-cta-block-bg.webp')" }}
      >

        {/* ---------------- LEFT STACKED IMAGES ---------------- */}
        <div className="hidden lg:flex absolute left-0 top-0 h-full flex-col justify-start gap-10 pl-4 z-40 overflow-visible">

          {/* TOAD (50% outside) */}
          <img
            src="/Images/Homepage/figure-left-toad.webp"
            alt="toad"
            className="relative w-[250px] -translate-x-1/2 ml-24 -mt-[25%] z-50"
          />
        </div>

        {/* ---------------- RIGHT STACKED IMAGES ---------------- */}
        <div className="hidden lg:flex absolute right-0 top-0 h-full flex-col justify-center items-end gap-6 pr-4 z-40 overflow-visible">

          {/* PARROT */}
          <img
            src="/Images/Homepage/figure-right-parrot.webp"
            alt="parrot"
            className="relative w-[250px] translate-x-1/3 -mt-60 z-50"
          />

          {/* BLUE FLOWERS */}
          <img
            src="/Images/Homepage/figure-right-flowers-blue.webp"
            alt="flowers"
            className="relative w-[300px] translate-x-1/4 -mt-96 z-40 mr-14"
          />
        </div>

        {/* ---------------- CENTER CONTENT ---------------- */}
        <div
          className="relative z-30 flex flex-col items-center text-center w-full max-w-3xl px-6 pt-10 md:pt-20"
          style={{ fontFamily: "ReginaBlack" }}
        >
          <h1 className="text-white text-5xl sm:text-7xl lg:text-[110px] font-bold tracking-wide leading-none mt-10"  style={{ fontFamily: "ReginaBlack" }}>
            MOLLYCLUB
          </h1>

          <p className="text-white max-w-[900px] mt-8 text-base md:text-[21px] leading-normal md:leading-[32px] opacity-95"  style={{ fontFamily: "ReginaBlack" }}>
            Join us for an immersive tasting experience as your host guides you
            through the wonderful world of Mollydooker or simply enjoy a glass
            of wine and a platter as you take in our stunning 360 views of
            McLaren Vale. Either way, we’ll be here!
          </p>

          <button className="mt-10 px-8 py-3 md:px-12 md:py-4 bg-[#F4B816] text-black text-base md:text-[20px] font-semibold rounded-full hover:bg-[#e4a415] transition-all duration-300 shadow-lg"  style={{ fontFamily: "ReginaBlack" }}>
            VIEW EVENTS
          </button>
        </div>

      </div>
    </div>
  );
};

export default MollyclubLatt;
