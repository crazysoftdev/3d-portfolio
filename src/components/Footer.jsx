import React from "react";

import { LOGO2 } from "../assets";
import Typewriter from "react-ts-typewriter";

const Footer = () => {
  return (
    <div className="bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20">
      <div className="flex justify-center items-center">
        <img src={LOGO2} alt="logo" className="w-28 h-28 object-contain" />
        <p className="text-secondary text-[17px] leading-[30px] text-center select-none">
          {new Date().getFullYear()} &copy; Created by Jeff Jiang. All rights
          reserved.
        </p>
      </div>
      <div className="w-full h-auto flex justify-center text-purple-500 font-bold self-start text-2xl">
        <Typewriter
          text={[
            "Thank's for visiting!",
            "download my resume!",
            "<Love to Code/>",
          ]}
          loop
          speed={80}
          cursor={false}
        />
      </div>
    </div>
  );
};

export default Footer;
