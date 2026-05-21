import React, { useState } from "react";

const MollyClubBenefit = () => {
  const [active, setActive] = useState("lefty");

  const benefitData = {
    lefty: {
      title: "FINALLY, YOU’RE A LEFTY",
      items: [
        "20% LOYALTY PRICING ON WINES",
        "ZERO MEMBERSHIP FEES",
        "COMPLIMENTARY SHIPPING ON ALL ORDERS",
        "PRE-RELEASE, MUSEUM STOCK & EXCLUSIVE EVENT ACCESS",
        "COMPLIMENTARY LEFTY WINE ON YOUR BIRTHDAY",
        "COMPLIMENTARY WINERY TOURS & TASTINGS",
      ],
    },

    family: {
      title: "WELCOME TO THE FAMILY",
      items: [
        "15% FAMILY PRICING ON WINES",
        "PRIORITY EVENT BOOKING",
        "FREE SHIPPING OVER $150",
        "SPECIAL FAMILY-ONLY RELEASES",
        "SURPRISE GIFTS YEARLY",
        "FAMILY-EXCLUSIVE WINERY PERKS",
      ],
    },

    love: {
      title: "FINALLY, YOU’RE IN LOVE",
      items: [
        "25% LOVE PRICING ON WINES",
        "ZERO MEMBERSHIP FEES",
        "COMPLIMENTARY SHIPPING ON ALL ORDERS",
        "EARLY ACCESS TO ALL RELEASES",
        "BIRTHDAY LOVE WINE BOTTLE",
        "VIP WINERY TOUR & TASTING PASS",
      ],
    },
  };

  return (
    <div className="w-full bg-[#6d0d25] flex justify-center py-20" style={{ fontFamily: "ReginaBlack" }}>
      <div className="w-[85%] max-w-[1200px]">

        {/* TABS */}
        <div className="flex justify-between bg-[#7d0f2f] p-6 rounded-t-2xl"  style={{ fontFamily: "ReginaBlack" }}>

          {/* LEFTY */}
          <div
            onClick={() => setActive("lefty")}
            className={`cursor-pointer w-1/3 flex flex-col items-center py-6 rounded-t-2xl transition-all ${
              active === "lefty" ? "benefit-tab-active" : ""
            }`}
          >
            <img src="/Images/Homepage/MD-Club-Boxer-Icon-Cream.webp" alt="" className="w-20 h-20 mb-2" />
            <span className="text-[#f8a24c] text-2xl tracking-wide"  style={{ fontFamily: "ReginaBlack" }}>LEFTY</span>
          </div>

          {/* FAMILY */}
          <div
            onClick={() => setActive("family")}
            className={`cursor-pointer w-1/3 flex flex-col items-center py-6 rounded-t-2xl transition-all ${
              active === "family" ? "benefit-tab-active" : ""
            }`}
          >
            <img src="/Images/Homepage/MD-Club-BEB-Icon-Cream.webp" alt="" className="w-20 h-20 mb-2" />
            <span className="text-[#f8a24c] text-2xl tracking-wide"  style={{ fontFamily: "ReginaBlack" }}>FAMILY</span>
          </div>

          {/* LOVE */}
          <div
            onClick={() => setActive("love")}
            className={`cursor-pointer w-1/3 flex flex-col items-center py-6 rounded-t-2xl transition-all ${
              active === "love" ? "benefit-tab-active" : ""
            }`}
          >
            <img src="/Images/Homepage/MD-Club-Jester-Icon-Cream.webp" alt="" className="w-20 h-20 mb-2" />
            <span className="text-[#f8a24c] text-2xl tracking-wide"  style={{ fontFamily: "ReginaBlack" }}>LOVE</span>
          </div>
        </div>

        {/* CONTENT CONTAINER */}
        <div className="benefit-card-container">

          {/* TITLE */}
          <h2 className="text-center text-[#f8a24c] text-4xl mb-10 tracking-wide"  style={{ fontFamily: "ReginaBlack" }}>
            {benefitData[active].title}
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-3 gap-6"  style={{ fontFamily: "ReginaBlack" }}>
            {benefitData[active].items.map((item, index) => (
              <div key={index} className="benefit-card"  style={{ fontFamily: "ReginaBlack" }}>
                {item}
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-12"  style={{ fontFamily: "ReginaBlack" }}>
            <button className="bg-[#f8a24c] text-[#7d0f2f] py-3 px-8 rounded-full text-lg tracking-wide">
              JOIN THE CLUB
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MollyClubBenefit;
