'use client'

import React from 'react'

const Hero = () => {
  return (
    <div className="w-full relative">
      <video src="/background.mp4" autoPlay loop muted></video>
      <div className="absolute top-1/2 left-[46.5%]">
        <button className="bg-black px-6 py-3 rounded-lg shadow-[5px_5px_0px_0px_rgba(109,40,217)]">Schedule</button>
      </div>
    </div>
  )
}

export default Hero
