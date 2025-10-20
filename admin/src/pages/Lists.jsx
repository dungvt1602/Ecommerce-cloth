import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Lists = ({ token }) => {

    const [list, setList] = useState([]);

    const fetchlist = async () => {

        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if (response.data.success) {
                setList(response.data.products)
            }
            else {
                toast.error(response.data.messeger)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const removeProduct = async (id) => {

        try {
            const respone = await axios.delete(backendUrl + '/api/product/delete', {
                headers: { token },
                data: { id: id } // Gửi dữ liệu qua thuộc tính 'data'
            });
            if (respone.data.success) {
                await fetchlist();
                toast.success("Remove product success");
            }
            else {
                toast.error(respone.data.message);
            }
        } catch (error) {
            console.log("Fail");
            toast.error(error.message)
        }
    }


    useEffect(() => {
        fetchlist();
    }, []);

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
                {
                    list.map((item, index) => (
                        <div key={item._id} className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] text-sm border py-1 px-2  items-center ">
                            <img className='w-12' src={item.image[0]} />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>{item.price}$</p>
                            <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Lists