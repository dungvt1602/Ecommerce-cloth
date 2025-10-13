import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Add = () => {

    const [size, selectSize] = useState([]);
    return (
        <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 
        text-gray-600 text-base'>
            <form className='flex flex-col w-full gap-3'>
                <div>
                    <p className='mb-2'>UpLoad Image</p>
                    <div className='flex gap-2'>
                        <label for="image1">
                            <img className='w-20' src={assets.upload_area} alt='' />
                            <input type='file' id='image1' hidden />
                        </label>
                        <label for="image2">
                            <img className='w-20' src={assets.upload_area} alt='' />
                            <input type='file' id='image2' hidden />
                        </label>
                        <label for="image3">
                            <img className='w-20' src={assets.upload_area} alt='' />
                            <input type='file' id='image3' hidden />
                        </label>
                        <label for="image4">
                            <img className='w-20' src={assets.upload_area} alt='' />
                            <input type='file' id='image4' hidden />
                        </label>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className="mb-2">Product name</p>
                    <input type='text' className=' border-1 rounded-[4px] w-full max-w-[500px] px-3 py-2 border-gray-800'
                        placeholder='Type here' required />
                </div>
                <div className="w-full">
                    <p className='mb-3'>Product description</p>
                    <textarea type="text" className='border-1 rounded-[4px] w-full max-w-[500px] px-3 py-2' placeholder='Write content here' required></textarea>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
                    <div>
                        <p className='mb-2'>Product Category</p>
                        <select className=' border-1 rounded-[4px] w-full px-3 py-2'>
                            <option value={"Men"}>Men</option>
                            <option value={"Woman"}>Woman</option>
                            <option value={"Kid"}>Kid</option>
                        </select>
                    </div>
                    <div>
                        <p className='mb-2'>Sub Category</p>
                        <select className=' border-1 rounded-[4px] w-full px-3 py-2'>
                            <option value={"Topwear"}>Topwear</option>
                            <option value={"Bottomwear"}>Bottomwear</option>
                            <option value={"Winterwear"}>Winterwear</option>
                        </select>
                    </div>
                    <div>
                        <p className='mb-2'>Product Category</p>
                        <input type='number' className='border-1 rounded-[4px] w-full px-3 py-2 sm:w-[120px]' placeholder='25'></input>
                    </div>
                </div>
                <div>
                    <div>
                        <p className='mb-3'>Product Sizes</p>
                        <div className='flex gap-4'>
                            <p className='bg-slate-200  px-3 py-1 cursor-pointer'>S</p>
                            <p className='bg-slate-200  px-3 py-1 cursor-pointer'>M</p>
                            <p className='bg-slate-200  px-3 py-1 cursor-pointer'>L</p>
                            <p className='bg-slate-200  px-3 py-1 cursor-pointer'>XL</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <input type='checkbox' id='bestseller' />
                    <label for="bestseller" className='cursor-pointer'>Add to bestseller</label>
                </div>
                <button type='submit' className='w-fit py-3 px-10 mt-4 bg-black text-white'>ADD</button>
            </form>
        </div>
    )
}

export default Add