import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-zinc-900 text-white py-16 px-6'>
      
      {/* Main Grid */}
      <div className='max-w-6xl mx-auto grid gap-10 md:grid-cols-3'>
        
        {/* Logo + Text */}
        <div>
          <h1 className='py-2 text-2xl'>Artek Creatives</h1>
          <p className='text-sm text-zinc-400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis accusantium neque magni.
          </p>
        </div>

        {/* Links */}
        <div className='flex flex-col gap-3'>
          <a href="#" className='hover:text-gray-300'>Home</a>
          <a href="#" className='hover:text-gray-300'>Services</a>
          <a href="#" className='hover:text-gray-300'>Contact</a>
        </div>

        {/* Contact */}
        <div>
          <h1 className='text-lg font-semibold mb-2'>Contact Now</h1>
          <p className='text-zinc-400'>9372618092</p>
        </div>

      </div>
        <p className='text-center pt-20 text-zinc-100/20'>Copyright © 2026 By Artek Creatives</p>
    </div>
  )
}

export default Footer