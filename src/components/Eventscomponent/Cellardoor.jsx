import React from 'react';

const Cellardoor = () => {
  return (
    <div className="bg-[#324421] h-screen w-full flex flex-col items-center justify-center relative text-[#f3c9a6] font-serif" style={{ fontFamily: "ReginaBlack" }}>
      {/* Main Heading */}
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide select-none">
        CELLAR DOOR
      </h1>

      {/* Subheading */}
      <p className="mt-8 text-xl md:text-2xl font-semibold select-none">
        THERE ARE CURRENTLY NO EVENTS.
      </p>

      {/* Pagination dots on right side */}
      <div className="absolute top-1/2 right-8 flex flex-col space-y-2 transform -translate-y-1/2">
        <span className="w-3 h-3 bg-white rounded-full"></span>
        <span className="w-3 h-3 border-2 border-white rounded-full"></span>
        <span className="w-3 h-3 bg-white rounded-full"></span>
      </div>
    </div>
  );
};

export default Cellardoor;
