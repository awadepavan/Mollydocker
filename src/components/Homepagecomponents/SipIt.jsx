import React from "react";

const SipIt = () => {
  return (
    <section
      className="
        relative w-full min-h-screen 
        bg-[url('/Images/Homepage/sipitforward-bg-1.avif')] 
        bg-cover bg-center 
        flex items-center justify-center
      "
    >
      {/* RED OVERLAY */}
      <div className="absolute inset-0 bg-[#A11F2C]/70"></div>

      {/* CENTER TEXT */}
      <div className="relative z-30 text-center text-white px-4 sm:px-6">
        <p className="uppercase tracking-widest font-bold lg:font-semibold text-sm sm:text-base">
          WINE WITH PURPOSE
        </p>

        <div className="flex items-center justify-center mt-4 flex-wrap gap-3 sm:gap-4">

          {/* SIP IT (yellow box background) */}
          <span
            className="text-[28px] sm:text-[40px] lg:text-[80px] leading-none font-bold text-[#C93345] bg-[#FEBE10] px-3 sm:px-5 py-1 sm:py-2"
            style={{ fontFamily: "ReginaBlack" }}
          >
            SIP IT
          </span>

          {/* FORWARD */}
          <span
            className="text-[30px] sm:text-[45px] lg:text-[90px] leading-none font-bold"
            style={{ fontFamily: "ReginaBlack" }}
          >
            FORWARD
          </span>

          {/* ARROW CIRCLE */}
          <button className="w-10 h-10 sm:w-12 sm:h-12 border border-white rounded-full flex items-center justify-center text-xl sm:text-2xl hover:bg-white hover:text-black transition">
            →
          </button>
        </div>

        <p className="mt-6 text-sm sm:text-base max-w-md sm:max-w-3xl mx-auto px-2 sm:px-0">
          Every time you drink Mollydooker, you are helping to Sip It Forward by
          supporting our core social and environmental charities.
        </p>
      </div>
    </section>
  );
};

export default SipIt;
