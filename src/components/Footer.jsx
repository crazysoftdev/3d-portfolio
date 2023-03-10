import React from "react"

import { logo } from "../assets"

const Footer = () => {
  return (
    <div className="bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20">
      <div className="flex justify-center items-center">
        <img src={logo} alt="logo" className="w-20 h-20 object-contain mr-4" />
        <p className="text-secondary text-[17px] leading-[30px] text-center select-none">
          {new Date().getFullYear()} &copy; Created by Jeff Jiang. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
