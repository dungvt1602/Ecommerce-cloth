import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className='navbar '>
      <Link to={"/"}>
      <img  src={logo} alt='logo' />
      </Link>
      <ul className='menu '>
        <NavLink to="/" className='menu-item'>
          <p>HOME</p>
          <hr />
        </NavLink>
        <NavLink to="/collection" className='menu-item'>
          <p>COLLECTION</p>
          <hr />
        </NavLink>
        <NavLink to="/about" className='menu-item'>
          <p>ABOUT</p>
          <hr />
        </NavLink>
        <NavLink to="/contact" className='menu-item'>
          <p>CONTACT</p>
          <hr />
        </NavLink>
      </ul>

      <div className='end-nav'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <div className='profile-group'> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <div className='group-cart'>
            <div className='dropdown-menu'>
              <p className='menu-item'>MyProfile</p>
              <p className='menu-item'>Order</p>
              <p className='menu-item'>Logout</p>
            </div>
          </div>

        </div>
        <Link to="/cart" className='cart-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>

          <p>10</p>
        </Link>

        <div onClick={() => setIsOpen(true)} className='menu-icon'>
          <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>

      {/* Menu hidden */}
      <div className={ ` ${isOpen ? "menu-hidden transition-all" : "w-0 hidden" } `}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={()=> setIsOpen(false)} className='flex items-center gap-4 cursor-pointer '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            <p>Back</p>
          </div>
          <NavLink onClick={() => setIsOpen(false)} className="py-2 pl-6 border" to='/'>HOME</NavLink>
          <NavLink onClick={() => setIsOpen(false)}  className="py-2 pl-6 border" to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className="py-2 pl-6 border" to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className="py-2 pl-6 border" to= '/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar