import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F4B816] pt-20 pb-10 relative" style={{ fontFamily: "ReginaBlack" }}>

      {/* TOP CONTENT */}
      <div className="lg:max-w-[1400px] mx-auto px-10 grid  grid-cols-2 md:grid-cols-4 gap-16">

        {/* LOGO + ADDRESS */}
        <div>
          <img
            src="/Images/Homepage/molly-logo.svg"
            alt="Mollydooker"
            className="w-[180px] mb-4"
          />

          <h3 className="text-[#C93345] font-bold mt-4" style={{ fontFamily: "ReginaBlack" }}>MOLLYDOOKER WINES</h3>
          <p className="text-[#C93345] mt-2 leading-6" style={{ fontFamily: "ReginaBlack" }}>
            23 Coppermine Road<br />
            McLaren Vale, South Australia 5171<br />
            gday@mollydookerwines.com<br />
            888 637 4472
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DE4B3E] text-white">
              <FaInstagram size={18} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DE4B3E] text-white">
              <FaFacebookF size={18} />
            </div>
          </div>
        </div>

        {/* WINES */}
        <div>
          <h3 className="text-[#C93345] font-bold text-lg mb-4" style={{ fontFamily: "ReginaBlack" }}>WINES</h3>
          <ul className="text-[#C93345] space-y-2" style={{ fontFamily: "ReginaBlack" }}>
            <li style={{ fontFamily: "ReginaBlack" }}>Lefty Series</li>
            <li style={{ fontFamily: "ReginaBlack" }}>Fun Series</li>
            <li style={{ fontFamily: "ReginaBlack" }}>Family Series</li>
            <li style={{ fontFamily: "ReginaBlack" }}>Love Series</li>
            <li style={{ fontFamily: "ReginaBlack" }}>Velvet Series</li>
            <li style={{ fontFamily: "ReginaBlack" }}>Large Format</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="text-[#C93345] font-bold text-lg mb-4" style={{ fontFamily: "ReginaBlack" }}>ABOUT</h3>
          <ul className="text-[#C93345] space-y-2" style={{ fontFamily: "ReginaBlack" }}>
            <li style={{ fontFamily: "ReginaBlack" }}>About Us</li>
            <li style={{ fontFamily: "ReginaBlack" }}>Careers</li>
            <li style={{ fontFamily: "ReginaBlack" }}>Trade & Media</li>
            <li style={{ fontFamily: "ReginaBlack" }}>Find Our Wines</li>
            <li style={{ fontFamily: "ReginaBlack" }}>Our Blog</li>
            <li style={{ fontFamily: "ReginaBlack" }}>FAQ</li>
          </ul>
        </div>

        {/* CELLAR DOOR */}
        <div>
          <h3 className="text-[#C93345] font-bold text-lg mb-4 " style={{ fontFamily: "ReginaBlack" }}>CELLAR DOOR</h3>
          <ul className="text-[#C93345] space-y-2" style={{ fontFamily: "ReginaBlack" }}>
            <li style={{ fontFamily: "ReginaBlack" }}>Tastings</li>
            <li style={{ fontFamily: "ReginaBlack" }}>On the Road Events</li>
            <li style={{ fontFamily: "ReginaBlack" }}>Cellar Door Events</li>
          </ul>
        </div>

      </div>

      {/* SUBSCRIBE SECTION */}
      <div className="lg:max-w-[1400px] mx-auto px-[100px] pt-20 lg:px-[400px] " style={{ fontFamily: "ReginaBlack" }}>
        <h3 className="text-[#C93345] font-bold text-2xl mb-4" style={{ fontFamily: "ReginaBlack" }}>
          SUBSCRIBE TO OUR MAILING LIST
        </h3>

        <div className="flex flex-col md:flex-row gap-4 " style={{ fontFamily: "ReginaBlack" }}>
          <input
            type="email"
            placeholder="Email *"
            className="border border-[#C93345] p-3 w-full md:w-[450px] focus:outline-none"
          />

          <button className="bg-[#DE4B3E] text-white font-bold px-8 py-3 rounded-full" style={{ fontFamily: "ReginaBlack" }}>
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* BOTTOM RED BAR */}
      <div className="w-full bg-[#D44931] py-4 mt-20">
        <div className="max-w-[1400px] mx-auto px-10 text-center md:flex md:justify-center md:gap-10 text-white text-sm" style={{ fontFamily: "ReginaBlack" }}>
          <span className="cursor-pointer" style={{ fontFamily: "ReginaBlack" }}>PRIVACY POLICY</span>
          <span className="hidden md:inline" style={{ fontFamily: "ReginaBlack" }}>|</span>
          <span className="cursor-pointer" style={{ fontFamily: "ReginaBlack" }}>TERMS & CONDITIONS</span>
          <span className="hidden md:inline" style={{ fontFamily: "ReginaBlack" }}>|</span>
          <span style={{ fontFamily: "ReginaBlack" }}>MADE BY MAKERS</span>
          <span className="hidden md:inline" style={{ fontFamily: "ReginaBlack" }}>|</span>
          <span style={{ fontFamily: "ReginaBlack" }}>© 2025 MOLLYDOOKER INTERNATIONAL LLC</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
