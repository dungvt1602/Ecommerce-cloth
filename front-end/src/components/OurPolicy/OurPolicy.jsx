import React from 'react'
import './OurPolicy.css'
import { assets } from '../../assets/assets'

const OurPolicy = () => {
  return (
    <div className="policy">
        <div>
            <img src={assets.exchange_icon} alt=''/>
            <p className='text1'>Easy Exchange Policy</p>
            <p className='text2'>We offer hassle free exchange policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt=''/>
            <p className='text1'>7 Days Return Policy</p>
            <p className='text2'>We provide 7 days free return policy</p>
        </div>
        <div>
            <img src={assets.support_img} alt=''/>
            <p className='text1'>Best customer support</p>
            <p className='text2'>we provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy