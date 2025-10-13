import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const [selected, setSelected] = useState();

    return (
        <div className='w-[18%] min-h-screen border-r-2 border-gray-200'>
            <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
                <NavLink to="/add" onClick={() => {
                    setSelected("add");
                }} className={`flex items-center border ${selected === "add" ? 'bg-amber-700' : ''} border-gray-300 gap-3 border-r-0 px-3 py-2 rounded-l `}>
                    <img className='w-5 h-5' src={assets.add_icon} />
                    <p className='hidden md:block'>Add Items</p>
                </NavLink>
                <NavLink to="/list" onClick={() => {
                    setSelected("list");
                }} className={`flex items-center border ${selected === "list" ? 'bg-amber-700' : ''} border-gray-300 gap-3 border-r-0 px-3 py-2 rounded-l `}>
                    <img className='w-5 h-5' src={assets.add_icon} />
                    <p className='hidden md:block'>List Items</p>
                </NavLink>
                <NavLink to="/order" onClick={() => {
                    setSelected("order");
                }} className={`flex items-center border ${selected === "order" ? 'bg-amber-700' : ''} border-gray-300 gap-3 border-r-0 px-3 py-2 rounded-l `}>
                    <img className='w-5 h-5' src={assets.add_icon} />
                    <p className='hidden md:block'>Order Items</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar