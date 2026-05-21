import React from 'react'

const Eventhome = () => {
  return (
    <div className="bg-[#304421] h-screen w-full flex flex-col items-center justify-center relative text-[#ffdbba] font-serif">

      {/* Left Side Illustration */}
      <img
        src="/Images/Homepage/figure-left-flower-red.webp"
        alt="red flower"
        className="absolute left-0 top-1/4 w-[300px]"
      />
      <img
        src="/Images/Homepage/figure-left-toad.webp"
        alt="toad"
        className="absolute left-0 top-1/2 w-[300px]"
      />

      {/* Right Side Illustration */}
      <img
        src="/Images/Homepage/figure-right-parrot.webp"
        alt="parrot"
        className="absolute right-0 top-1/4 w-[300px]"
      />
      <img
        src="/Images/Homepage/figure-right-flowers-blue.webp"
        alt="blue flowers"
        className=" relative  -mr-[1200px] right-0 top-1/2 w-[300px] z-10"
      />

      {/* Center Text */}
      <div className="text-center space-y-4 px-4 max-w-3xl -mt-[500px]" style={{ fontFamily: "ReginaBlack" }}>
        <h3 className="text-xl font-bold uppercase mb-2 tracking-widest">MOLLYDOOKER</h3>
        <h1 className="text-[8rem] font-extrabold leading-none">EVENTS</h1>
        <div className="flex justify-center gap-12 mt-4 text-xl font-bold uppercase underline cursor-pointer">
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
