import React from 'react'
import AnimatedCursor from 'react-animated-cursor'
import Hero from '../components/hero'
import WhatsAppFloat from '../components/WhatsAppFloat'
import Services from '../components/Services'
import Process from '../components/Process'
import Callback from '../components/Callback'
import Footer from '../components/Footer'
function App() {
  return (
     <>
      <AnimatedCursor
        innerSize={20}
        outerSize={35}
        color="255, 193, 17" 
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />
<div className='overflow-x-hidden'>
   <Hero />
   <Services />
    <WhatsAppFloat />
  <Process />
  <Callback />
  <Footer/>
</div>
    </>  
  )
}

export default App