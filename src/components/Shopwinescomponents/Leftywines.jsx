import React from 'react';

const wines = [
  {
    year: 2022,
    name: "THE SCOOTER",
    type: "MERLOT",
    price: "$60 / BOTTLE",
    imgSrc: "/Images/Homepage/figure-bottle-boxer.webp",
  },
  {
    year: 2022,
    name: "THE MAITRE D'",
    type: "CABERNET SAUVIGNON",
    price: "$75 / BOTTLE",
    imgSrc: "/Images/Homepage/figure-bottle-boxer.webp",
    rating: 90,
  },
  {
    year: 2022,
    name: "TWO LEFT FEET",
    type: "SHIRAZ / MERLOT / CABERNET",
    price: "$60 / BOTTLE",
    imgSrc: "/Images/Homepage/figure-bottle-boxer.webp",
  },
  {
    year: 2022,
    name: "THE BOXER",
    type: "SHIRAZ",
    price: "$70 / BOTTLE",
    imgSrc: "/Images/Homepage/figure-bottle-boxer.webp",
  },
];

const Leftywines = () => {
  return (
    <section className="bg-[#8c9240] flex flex-col items-center py-20 px-8 min-h-screen font-serif" style={{ fontFamily: "ReginaBlack" }}>
      <h2 className="text-3xl md:text-5xl font-bold uppercase mb-10 md:mb-16 text-[#283618]">LEFTY WINES</h2>

      <div className="flex flex-wrap justify-center gap-16 max-w-7xl w-full">
        {wines.map((wine, idx) => (
          <div key={idx} className="flex flex-col items-center text-center max-w-xs">
            <div className="relative w-[220px] flex justify-center">
              <img 
                src={wine.imgSrc} 
                alt={wine.name} 
                className="h-[340px] w-[100px] mb-6"
              />
              {wine.rating && (
                <span className="absolute top-2 left-[125px] bg-white text-black font-bold text-[10px] leading-tight rounded-full px-3 py-1.5 whitespace-nowrap shadow-md border border-gray-200">
                  Wine Spectator <br /> {wine.rating} Points
                </span>
              )}
            </div>
            <p className="text-xs font-semibold text-[#283618] mb-1">{wine.year}</p>
            <h3 className="font-black text-xl text-[#283618] mb-2">{wine.name}</h3>
            <p className="text-sm font-medium text-[#283618] mb-1">{wine.type}</p>
            <p className="text-sm font-bold italic text-[#283618]">{wine.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leftywines;
