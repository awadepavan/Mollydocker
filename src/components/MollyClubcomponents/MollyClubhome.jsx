import React from "react";

const MollyClubhome = () => {
  return (
    <div className="bg-[#8d1a3a] h-screen w-full flex flex-col items-center justify-center relative text-[#ffdbba] font-serif">
      {/* Left Side Illustration */}
      <img
        src="/Images/Homepage/figure-left-leaves-euc-2.webp"
        alt="red flower"
        className="hidden lg:block absolute left-0 top-0 w-[300px]"
      />
      <img
        src="/Images/Homepage/figure-left-panther.webp"
        alt="toad"
        className="hidden lg:block absolute left-0 top-50 w-[350px] h-auto"
      />

       <img
        src="/Images/Homepage/figure-left-leaves-2.webp"
        alt="toad"
        className="hidden lg:block absolute left-0 top-60 w-[400px]"
      />

      {/* Center Text */}
      <div
        className="text-center space-y-4 px-6 w-full max-w-2xl z-20"
        style={{ fontFamily: "ReginaBlack" }}
      >
        <p className="text-base md:text-lg text-[#f1904a]"  style={{ fontFamily: "ReginaBlack" }}>Join the Bold Yet Elegant</p>
        <h1 className="text-4xl sm:text-7xl lg:text-[6rem] text-[#f1904a] uppercase font-extrabold leading-none"  style={{ fontFamily: "ReginaBlack" }}> MollyClub</h1>
        <p className="text-[#ffe9b7] text-sm md:text-base"  style={{ fontFamily: "ReginaBlack" }}>
          6 juicy wines, delivered to your door 3 times a year plus 20% loyalty
          pricing all year round!
        </p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-4 text-base sm:text-xl font-bold uppercase underline cursor-pointer text-[#f1904a]"  style={{ fontFamily: "ReginaBlack" }}>
          <span  style={{ fontFamily: "ReginaBlack" }}>How it Works</span>
          <span  style={{ fontFamily: "ReginaBlack" }}>Benefits</span>
          <span  style={{ fontFamily: "ReginaBlack" }}>Account Login</span>
        </div>
      </div>

      {/* Down arrow */}
      <div className="absolute bottom-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 stroke-[#ffdbba]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default MollyClubhome;
