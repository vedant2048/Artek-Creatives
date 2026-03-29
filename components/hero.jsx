import React, { useEffect, useState } from 'react'
import Navbar from './navbar'

function Hero() {

  const words = ["Websites", "Business Automation", "Digital Solution"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="section1 h-screen p-4 relative overflow-hidden bg-[#05070a]">

      {/* ✅ Animated Background Layer */}
      <div className="absolute inset-0 animate-bg">
        <div className="w-[200%] h-[200%] bg-layer"></div>
      </div>

      <Navbar />

      <div className='flex flex-col md:flex-row justify-between gap-4 relative z-10'>

        <div className="h-[80vh] flex flex-col justify-center items-start p-4 w-full md:w-[60vh] gap-2">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Artek Creatives.
          </h1>

          <p className="pt-2 text-xl sm:text-2xl md:text-3xl text-zinc-300 font-medium">
            We Build{" "}
            <span
              key={index}
              className="text-yellow-400 transition-all duration-500 font-semibold"
            >
              {words[index]}
            </span>
          </p>

          <p className='pt-2 text-base sm:text-lg md:text-3xl font-light text-zinc-400 md:whitespace-nowrap'>
            Artek handles the tech so you can focus on growth.
          </p>

          <button className='mt-4 px-5 py-2 md:px-6 text-sm md:text-[2vh] rounded-3xl border border-yellow-400 bg-yellow-400 text-black hover:bg-transparent hover:text-yellow-400 transition-all'>
            Book a call
          </button>

        </div>

        <div className='w-full md:w-[80vh] h-[200px] md:h-auto'></div>

      </div>

    </div>
  )
}

export default Hero