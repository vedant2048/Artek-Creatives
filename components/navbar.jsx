import React from 'react'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { X } from 'lucide-react'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='min-w-min h-17 flex items-center justify-between px-6 rounded-3xl 
    bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg'>
      <div> <img src='/Images/ACW.png' alt="logo" className='h-48 w-full pb-1 mt-2 sm:h-[20vh] sm:w-[20vh]'/></div> 
      
      <div className='hidden md:flex gap-6 text-2xl p-4 font-playfair text-white'>
        <a href="#">Home</a>
        <a href="#">Contact Us</a>
        <a href="#">Book a Call</a>
      </div>
      <div className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28}/> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
         <div className="absolute top-16 left-0 w-full flex flex-col items-center gap-2.5 py-6 text-white md:hidden font-playfair text-2xl font-semibold rounded-3xl ">
          <a className="border-2 p-2 rounded-4xl w-full text-center bg-zinc-200/25 border-zinc-100/15"href="#">Home</a>
          <a className="border-2 p-2 rounded-4xl w-full text-center bg-zinc-200/25 border-zinc-100/15" href="#">Services</a>
          <a className="border-2 p-2 rounded-4xl w-full text-center bg-zinc-200/25 border-zinc-100/15" href="#">Contact</a>
        </div>
      )}
        
    </div>
  )
}

export default Navbar