import React from "react";

const MollyClubWork = () => {
  return (
    <section className="w-full min-h-screen h-auto bg-[#8d1a3a] flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden">
      {/* INNER CONTAINER */}
      <div className="relative bg-[#670d25] w-full max-w-5xl rounded-3xl p-6 md:p-12 text-center shadow-xl z-20">

        {/* HEADING */}
        <h1
          className="text-4xl sm:text-5xl lg:text-[60px] text-[#FDBF63] font-bold mb-4"
          style={{ fontFamily: "ReginaBlack" }}
        >
          HOW IT WORKS
        </h1>

        <p className="text-white max-w-xl mx-auto text-sm leading-relaxed">
          As a MollyClub member, you can expect 6 juicy wines delivered
          straight to your door, three times per year.
        </p>

        {/* MAIN IMAGE */}
        <div className="mt-10 flex justify-center">
          <div className="border-4 border-[#FDBF63] rounded-md p-1 w-full max-w-[400px]">
            <img
              src="/Images/Homepage/pouring-red-wine.avif" 
              alt="how it works"
              className="w-full aspect-square object-cover rounded"
            />
          </div>
        </div>

        {/* ICONS ROW */}
        <div className="flex justify-center items-start gap-6 md:gap-10 mt-12 flex-wrap">

          {/* 1 — HOW MANY WINES */}
          <div className="flex flex-col items-center w-36 sm:w-40">
            <img src="/Images/Homepage/MD-Club-Bottles-Icon-Cream.webp" alt="" className="w-24 sm:w-32 mb-3" />
            <h3 className="text-[#FDBF63] font-bold text-sm">
              HOW MANY <br/> WINES?
            </h3>
            <p className="text-white text-xs mt-1">
              Six bottles, but you can always add more.
            </p>
          </div>

          <span className="hidden lg:inline text-[#FDBF63] text-3xl mt-6">›</span>

          {/* 2 — CUSTOMIZE YOUR WINES */}
          <div className="flex flex-col items-center w-36 sm:w-40">
            <img src="/Images/Homepage/MD-Club-BottleWine-Icon-Cream.webp" alt="" className="w-24 sm:w-32 mb-3" />
            <h3 className="text-[#FDBF63] font-bold text-sm">
              CUSTOMIZE YOUR WINES
            </h3>
            <p className="text-white text-xs mt-1">
              Stick with our Winemaker’s Choice, or choose your own adventure!
            </p>
          </div>

          <span className="hidden lg:inline text-[#FDBF63] text-3xl mt-6">›</span>

          {/* 3 — SHIPPED 3X PER YEAR */}
          <div className="flex flex-col items-center w-36 sm:w-40">
            <img src="/Images/Homepage/MD-Club-Box-Icon-Cream.webp" alt="" className="w-24 sm:w-32 mb-3" />
            <h3 className="text-[#FDBF63] font-bold text-sm">
              SHIPPED 3X <br/> PER YEAR
            </h3>
            <p className="text-white text-xs mt-1">
              Expect shipments in the Spring, Autumn, and Winter.
            </p>
          </div>

          <span className="hidden lg:inline text-[#FDBF63] text-3xl mt-6">›</span>

          {/* 4 — GATHER LEFT HANDSHAKES */}
          <div className="flex flex-col items-center w-36 sm:w-40">
            <img src="/Images/Homepage/MD-Club-Hands-Icon-Cream.webp" alt="" className="w-24 sm:w-32 mb-3" />
            <h3 className="text-[#FDBF63] font-bold text-sm">
              GATHER LEFT HANDSHAKES
            </h3>
            <p className="text-white text-xs mt-1">
              And unlock many, many more benefits!
            </p>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="mt-14 flex flex-col items-center gap-4">
          <button className="bg-[#FDBF63] text-[#6D142C] px-8 py-3 rounded-full font-semibold hover:bg-[#ffcd80] transition">
            JOIN THE CLUB
          </button>

          <button className="border border-[#FDBF63] text-[#FDBF63] px-6 py-2 rounded-full text-sm hover:bg-[#FDBF63] hover:text-[#6D142C] transition">
            ACCOUNT LOGIN
          </button>
        </div>
      </div>

      {/* Peacock decoration hidden on mobile, placed absolutely on large screens */}
      <div className="hidden lg:block absolute bottom-0 right-0 z-10 translate-x-1/4 translate-y-1/4">
        <img
          src="/Images/Homepage/figure-peacock-chest.webp"
          alt="peacock"
          className="w-[500px] xl:w-[750px] opacity-80"
        />
      </div>
    </section>
  );
};

export default MollyClubWork;
