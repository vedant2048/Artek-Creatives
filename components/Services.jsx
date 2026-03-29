import React from 'react'
import { Globe, Mail, TvMinimalPlay } from 'lucide-react'
import ScrollingBar from './ScrollingBar'

function Services() {
  return (
    <div className='w-full md:h-screen  bg-bgprimary flex flex-col items-center justify-evenly pt-10'>

      <div className='flex flex-col items-center gap-8 text-center -mb-12'>
        <p className='relative text-lg tracking-wide text-zinc-600 group pb-2'>
          What We Do
          <span className='absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] w-12 bg-gradient-to-r from-blue-500 to-red-500 transition-all duration-300 group-hover:w-20'></span>
        </p>

        <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-zinc-900 max-w-2xl'>
          Services Built For Growth
        </h1>
        <p> we have wide variety of Solutions, here are common one</p>
      </div>

      <div className='w-full flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 md:gap-8 mt-6 md:py-0 md:px-0 px-4 py-10 '>

        <div className='w-full sm:w-[280px] md:w-[300px] min-h-[240px] md:min-h-[260px] rounded-3xl bg-zinc-800 p-6 text-white flex flex-col items-center justify-center gap-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl'>
          <Globe size={50} />
          <h1 className='text-lg md:text-xl font-semibold tracking-wide'>Websites</h1>
          <p className='text-sm text-zinc-300 leading-relaxed'>
            We build fast, modern websites that convert visitors into customers.
          </p>
        </div>

        <div className='w-full sm:w-[280px] md:w-[300px] min-h-[240px] md:min-h-[260px] rounded-3xl bg-zinc-800 p-6 text-white flex flex-col items-center justify-center gap-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl'>
          <Mail size={50} />
          <h1 className='text-lg md:text-xl font-semibold tracking-wide'>Business Automation</h1>
          <p className='text-sm text-zinc-300 leading-relaxed'>
            Automate your workflows and save time with smart systems.
          </p>
        </div>

        <div className='w-full sm:w-[280px] md:w-[300px] min-h-[240px] md:min-h-[260px] rounded-3xl bg-zinc-800 p-6 text-white flex flex-col items-center justify-center gap-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl'>
          <TvMinimalPlay size={50} />
          <h1 className='text-lg md:text-xl font-semibold tracking-wide'>Digital Strategy</h1>
          <p className='text-sm text-zinc-300 leading-relaxed'>
            Data-driven strategies to grow your brand online.
          </p>
        </div>

      </div>

    <ScrollingBar />
    </div>
  )
}

export default Services