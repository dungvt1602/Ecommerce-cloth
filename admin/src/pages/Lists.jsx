import React from 'react'
import { assets } from '../assets/assets'

const Lists = () => {
    return (
        <div className="w-[70%] mx-auto my-8 ml-[max(5vw,25px)] text-base text-gray-600">
            <p className='mb-2'>All Product List</p>
            <div className="flex flex-col gap-2">
                <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] text-sm border py-1 px-2 bg-gray-100 items-center ">
                    <b >Image</b>
                    <b >Name</b>
                    <b >Category</b>
                    <b >Price</b>
                    <b className='text-center'>Action</b>
                </div>
                <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] text-sm border py-1 px-2  items-center ">
                    <img className='w-12' src={assets.image} />
                    <p>Kid Tapered Slim Fit Trouser</p>
                    <p>Kids</p>
                    <p>$38</p>
                    <p className='text-right md:text-center cursor-pointer text-lg'>X</p>

                </div>
            </div>
        </div>
    )
}

export default Lists