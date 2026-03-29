import React from 'react'
import {  
  Globe, ShoppingCart, Utensils, User, Briefcase, BookOpen,
  GraduationCap, HeartPulse, DollarSign, Film, Plane, Home,
  Dumbbell, Cpu, Megaphone, Calendar  
} from 'lucide-react'

function ScrollingBar() {
  const items = [
    { name: "Ecommerce", icon: <ShoppingCart size={16} /> },
    { name: "Restaurant", icon: <Utensils size={16} /> },
    { name: "Professionals", icon: <User size={16} /> },
    { name: "Startups", icon: <Briefcase size={16} /> },
    { name: "Agencies", icon: <Globe size={16} /> },
    { name: "Coaching", icon: <BookOpen size={16} /> },
    { name: "Education", icon: <GraduationCap size={16} /> },
    { name: "Healthcare", icon: <HeartPulse size={16} /> },
    { name: "Finance", icon: <DollarSign size={16} /> },
    { name: "Entertainment", icon: <Film size={16} /> },
    { name: "Travel", icon: <Plane size={16} /> },
    { name: "Real Estate", icon: <Home size={16} /> },
    { name: "Fitness", icon: <Dumbbell size={16} /> },
    { name: "Technology", icon: <Cpu size={16} /> },
    { name: "Marketing", icon: <Megaphone size={16} /> },
    { name: "Events", icon: <Calendar size={16} /> },
  ]

  return (
    <div className="w-full bg-zinc-900 text-white py-6 ">
      <h1 className="text-center text-lg sm:text-xl mb-3 md:mb-6">
        We Provide Solutions For Every Business
      </h1>

      <div className="marquee">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-full whitespace-nowrap"
          >
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrollingBar