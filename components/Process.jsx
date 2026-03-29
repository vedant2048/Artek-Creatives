  import React from 'react'
  import { Search, PaintbrushVertical, Code, Cpu, Send } from 'lucide-react'

  const Pitems = [
    { logo: <Search size={28} />, text: "Discovery" },
    { logo: <PaintbrushVertical size={28} />, text: "Design" },
    { logo: <Code size={28} />, text: "Development" },
    { logo: <Cpu size={28} />, text: "Automation" },
    { logo: <Send size={28} />, text: "Launch" }
  ]

  function Process() {
    return (
      <div className="bg-white w-full md:h-[100vh] flex flex-col items-center justify-center px-6 py-12 md:gap-16">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight " >
            Our Process
          </h2>
          <p className="mt-3 text-zinc-600 max-w-xl mx-auto">
            At <span className="font-semibold">Artek Creatives</span>, we craft sleek websites and digital solutions 
            through a clear, step‑by‑step approach.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-6xl">
          {Pitems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center relative group"
            >
              {/* Circle with icon */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-zinc-800 text-white border border-zinc-300 group-hover:bg-zinc-700 transition">
                {item.logo}
              </div>
              {/* Text */}
              <span className="mt-3 text-sm md:text-base font-medium text-zinc-800">
                {item.text}
              </span>

              {/* Arrow connector (desktop only) */}
              {index < Pitems.length - 1 && (
                <div className="hidden md:flex absolute top-10 left-full w-24 h-0 items-center justify-center">
                  {/* Arrow line */}
                  <div className="w-full h-[2px] bg-zinc-300"></div>
                  {/* Arrow head */}
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-zinc-300 border-b-[6px] border-b-transparent"></div>
                </div>
              )}

              {/* Mobile arrow (vertical) */}
              {index < Pitems.length - 1 && (
                <div className="md:hidden mt-4 flex flex-col items-center">
                  <div className="w-[2px] h-8 bg-zinc-300"></div>
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-t-[12px] border-t-zinc-300 border-r-[6px] border-r-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action / footer component */}
        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-zinc-900">
            Ready to elevate your business?
          </h3>
          <p className="mt-2 text-zinc-600 max-w-md mx-auto">
            Let’s collaborate to design and launch digital solutions that make your brand stand out.
          </p>
          <button className="mt-6 px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-700 transition">
            Get in Touch
          </button>
        </div>
      </div>
    )
  }

  export default Process