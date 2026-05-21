import React from 'react'

const Cell = () => {
  return (
     <div className="w-full h-screen overflow-visible">
      {/* SKY BACKGROUND */}
      <div
        className="bg-[url('/Images/Homepage/home-visit-background-sky-scaled.jpg')]
        h-screen w-full bg-cover bg-center overflow-visible  relative"
      >
        {/* AUSTRALIA MAP + TEXT */}
        <div className="absolute flex items-center justify-center h-[20%] w-[600px] mt-30 mb-60 ml-[400px] z-30">
          <img src="/Images/Homepage/home-visit-australia-map.webp" alt="" className='mt-50' />

          <div className="-ml-16" style={{ fontFamily: "ReginaBlack" }}>
            <h3 className="-ml-96 text-xl text-[#E2451f]">
              McLaren Vale, South Australia
            </h3>

            <h1 className="-ml-[450px] text-7xl text-[#E2451f]">Cellar Door</h1>
          </div>
        </div>

        {/* LAND BACKGROUND + RIGHT KANGAROO */}
        <div className="pt-28">
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

       
      </div>
    </div>
  )
}

export default Cell
