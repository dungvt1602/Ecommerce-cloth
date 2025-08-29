import React from 'react'
import './Hero.css'
import hero from "../../assets/hero_img.png"


const Hero = () => {
  return (
    <div className="hero">
      {/* Hero left side */}
      <div className="hero-leftside">
        <di v className='content1'>
          <div className='content1-text'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141] '></p>
            <p className='text'>Our Best Seller</p>
          </div>
       
        <h1 className=' prata-regular content2-title'>Lastest Arrival</h1>
        <div className="content2">
          <p className='content2-text'>SHOP NOW</p>
          
          <p className='w-8 md:w-11 h-[1px] bg-[#414 141]'></p>
        </div>
        </di>
      </div>

      {/* Hero right side */}
        <img className='hero-img' src={hero} alt=''  />
    </div>
  
  )
}

export default Hero