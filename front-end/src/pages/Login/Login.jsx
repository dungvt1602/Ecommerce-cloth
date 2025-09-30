import React, { useState } from 'react'

const Login = () => {


  const [currentState, setCurrentState] = useState('SignUp');

  const sumbitHandler = async (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={sumbitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto gap-4 mb-35 mt-14 text-gray-800">
      <div className="inline-flex items-center gap-2 mt-10 mb-2 ">
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {
        currentState === 'Login' ? "" : <input type='text' className='border w-full px-3 py-2 border-gray-800' placeholder='Name' required />
      }

      <input type='email' className='border w-full px-3 py-2 border-gray-800' placeholder='Email' required />
      <input type='password' className='border w-full px-3 py-2 border-gray-800' placeholder='Password' required />
      <div className="flex w-full justify-between text-sm mt-[-8px]">
        <p className='cursor-pointer'>Forgot the password</p>
        {
          currentState === 'Login' ?
            <p className='cursor-pointer' onClick={() => setCurrentState('SignUp')}>Create Account</p> :
            <p className='cursor-pointer' onClick={() => setCurrentState('Login')}>Create Account</p>
        }
      </div>

      <button className='bg-gray-800 text-white font-light px-10 py-2 rounded'>{currentState === 'Login' ? 'Login' : 'Sign Up'}</button>

    </form>
  )
}

export default Login