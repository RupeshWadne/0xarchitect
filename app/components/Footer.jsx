import React from 'react'

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-center flex-col h-[30vh] bg-gradient-to-bl from-gray-200 via-gray-400 to-gray-600">
      <div className="flex items-center justify-center mb-2">
        <img src="/logo.png" alt="" className="w-9 mr-4" />
        <h1 className="text-3xl">0xArchitect</h1>
      </div>
      <p>All Rights Reserved</p>
      <div className="flex items-center justify-between mt-4 w-36">
        <img src="/twitter.png" alt="" />
        <img src="/discord.png" alt="" />
        <img src="/telegram.png" alt="" />
      </div>
    </div>
  )
}

export default Footer
