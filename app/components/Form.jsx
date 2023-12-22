import React from 'react'

const Form = () => {
  return (
    <div className="flex flex-col items-center w-[80vw] mb-8">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="text-sm text-center mt-4 mb-8">
        Get in touch with us for tailored solutions
      </p>
      <form className="flex flex-col">
        <div className="flex justify-between w-[60vw]">
          <input className="w-[25vw] h-[8vh] bg-slate-800 p-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] outline-none" placeholder="Name" type="text" name="name" />
          <input className="w-[25vw] h-[8vh] bg-slate-800 p-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] outline-none" placeholder="Your Email Address" type="text" name="email" />
        </div>

        <div>
          <input className="w-full h-[8vh] bg-slate-800 p-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] outline-none mt-6" placeholder="Subject" type="text" name="email" />
        </div>

        <div>
          <textarea
          className="w-full h-[32vh] bg-slate-800 p-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] outline-none mt-6" 
            placeholder="How can we help you?"
            name="message"
          ></textarea>
        </div>
        <div className="flex items-center justify-center w-full">
        <button className="bg-black px-6 py-3 rounded-lg shadow-[5px_5px_0px_0px_rgba(109,40,217)]  mt-6" type="submit">Send message</button>
        </div>
      </form>
    </div>
  )
}

export default Form
