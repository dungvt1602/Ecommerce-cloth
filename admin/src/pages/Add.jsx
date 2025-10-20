import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {

    const [size, setSize] = useState([]);
    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Men');
    const [subCategory, setSubCategory] = useState('TopWear');
    const [price, setPrice] = useState('');
    const [bestseller, SetBestSeller] = useState(false);

    const handelSubmitForm = async (e) => {
        e.preventDefault();

        try {
            console.log(token);

            const formdata = new FormData()
            formdata.append("name", name);
            formdata.append("description", description);
            formdata.append("price", price);
            formdata.append("bestseller", bestseller);
            formdata.append("category", category);
            formdata.append("subCategory", subCategory);
            formdata.append("sizes", JSON.stringify(size));

            image1 && formdata.append("image1", image1);
            image2 && formdata.append("image2", image2);
            image3 && formdata.append("image3", image3);
            image4 && formdata.append("image4", image4);

            const response = await axios.post(backendUrl + '/api/product/add', formdata, { headers: { token } });

            if (response.data.success) {
                toast.success(response.data.message);
                setName('');
                setDescription('');
                setPrice(25);
                setCategory('Men');
                setSubCategory('Topwear');
                setSize([]);
                SetBestSeller(false);
                setImage1(false);
                setImage2(false);
                setImage3(false);
                setImage4(false);
            }
            else {
                toast.error(response.data.message);
            }


        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    }


    const toggleSize = (s) => {
        setSize(prev => prev.includes(s) ? prev.filter(i => i !== s) : [...prev, s]);
    }
    return (
        <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 
            text-gray-600 text-base'>
            <form onSubmit={handelSubmitForm} className='flex flex-col w-full gap-3'>
                <div>
                    <p className='mb-2'>UpLoad Image</p>
                    <div className='flex gap-2'>
                        <label for="image1">
                            <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt='' />
                            <input onChange={(e) => setImage1(e.target.files[0])} type='file' id='image1' hidden />
                        </label>
                        <label for="image2">
                            <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt='' />
                            <input onChange={(e) => setImage2(e.target.files[0])} type='file' id='image2' hidden />
                        </label>
                        <label for="image3">
                            <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt='' />
                            <input onChange={(e) => setImage3(e.target.files[0])} type='file' id='image3' hidden />
                        </label>
                        <label for="image4">
                            <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt='' />
                            <input onChange={(e) => setImage4(e.target.files[0])} type='file' id='image4' hidden />
                        </label>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className="mb-2">Product name</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} type='text' className=' border-1 rounded-[4px] w-full max-w-[500px] px-3 py-2 border-gray-800'
                        placeholder='Type here' required />
                </div>
                <div className="w-full">
                    <p className='mb-3'>Product description</p>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} type="text" className='border-1 rounded-[4px] w-full max-w-[500px] px-3 py-2' placeholder='Write content here' required></textarea>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
                    <div>
                        <p className='mb-2'>Product Category</p>
                        <select onChange={(e) => setCategory(e.target.value)} value={category} className=' border-1 rounded-[4px] w-full px-3 py-2'>
                            <option value={"Men"}>Men</option>
                            <option value={"Woman"}>Woman</option>
                            <option value={"Kid"}>Kid</option>
                        </select>
                    </div>
                    <div>
                        <p className='mb-2'>Sub Category</p>
                        <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className=' border-1 rounded-[4px] w-full px-3 py-2'>
                            <option value={"Topwear"}>Topwear</option>
                            <option value={"Bottomwear"}>Bottomwear</option>
                            <option value={"Winterwear"}>Winterwear</option>
                        </select>
                    </div>
                    <div>
                        <p className='mb-2'>Product Price</p>
                        <input onChange={(e) => setPrice(e.target.value)} value={price} type='number' className='border-1 rounded-[4px] w-full px-3 py-2 sm:w-[120px]' placeholder='25'></input>
                    </div>
                </div>
                <div>
                    <div>
                        <p className='mb-3'>Product Sizes</p>
                        <div className='flex gap-4'>
                            {
                                ["S", "M", "L", "XL", 'XXL'].map(item => (
                                    <p className={`${size.includes(item) ? "bg-amber-600" : "bg-slate-200 "} px-3 py-1 cursor-pointer`} key={item} onClick={() => toggleSize(item)}>
                                        {item}
                                    </p>
                                ))
                            }

                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <input onChange={() => SetBestSeller(prev => !prev)} checked={bestseller} type='checkbox' id='bestseller' />
                    <label for="bestseller" className='cursor-pointer'>Add to bestseller</label>
                </div>
                <button type='submit' className='w-fit py-3 px-10 mt-4 bg-black text-white'>ADD</button>
            </form>
        </div>
    )
}

export default Add