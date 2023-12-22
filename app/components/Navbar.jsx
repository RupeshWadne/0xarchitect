"use client"
import React, {useState} from 'react'
import { ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react";
const api = process.env.API_KEY

const Navbar = () => {
  return (
    <ThirdwebProvider activeChain="ethereum" clientId={api}>
    <nav className="flex w-full justify-between items-center p-5 sticky top-0 z-10 backdrop-blur-xl">
      <div className="flex items-center justify-center mb-2 ml-4">
        <img src="/logo.png" alt="" className="w-9 mr-4" />
        <h1 className="text-3xl">0xArchitect</h1>
      </div>

      <div className="flex w-[32vw] justify-between mr-16">
        <h1>Services</h1>
        <h1>Projects</h1>
        <h1>Team</h1>
      </div>
    
        <div className="w-52">
           <ConnectWallet />
        </div>
    </nav>
    </ThirdwebProvider>
  )
}

export default Navbar
