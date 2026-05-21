import React from 'react'

const Eventhome = () => {
  return (
    <div className="bg-[#304421] h-screen w-full flex flex-col items-center justify-center relative text-[#ffdbba] font-serif">

      {/* Left Side Illustration */}
      <img
        src="/Images/Homepage/figure-left-flower-red.webp"
        alt="red flower"
        className="hidden lg:block absolute left-0 top-1/4 w-[250px]"
      />
      <img
        src="/Images/Homepage/figure-left-toad.webp"
        alt="toad"
        className="hidden lg:block absolute left-0 top-1/2 w-[250px]"
      />

      {/* Right Side Illustration */}
      <img
        src="/Images/Homepage/figure-right-parrot.webp"
        alt="parrot"
        className="hidden lg:block absolute right-0 top-1/4 w-[250px]"
      />
      <img
        src="/Images/Homepage/figure-right-flowers-blue.webp"
        alt="blue flowers"
        className="hidden lg:block absolute right-0 top-1/2 w-[250px] z-10"
      />

      {/* Center Text */}
      <div className="text-center space-y-4 px-6 max-w-3xl z-20" style={{ fontFamily: "ReginaBlack" }}>
        <h3 className="text-sm sm:text-lg md:text-xl font-bold uppercase mb-2 tracking-widest">MOLLYDOOKER</h3>
        <h1 className="text-5xl sm:text-7xl lg:text-[8rem] font-extrabold leading-none">EVENTS</h1>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-4 text-base sm:text-xl font-bold uppercase underline cursor-pointer">
          <span>MOLLYCLUB EXCLUSIVE</span>
          <span>CELLAR DOOR</span>
        </div>
      </div>

      {/* Down arrow */}
      <div className="absolute bottom-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-[#ffdbba]" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      

    </div>
  )
}

export default Eventhome
