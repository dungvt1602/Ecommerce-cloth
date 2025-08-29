import React from 'react'
import './NewLetter.css'

const NewLetter = () => {
  const onSumbitHander = (e) => {
    e.preventDefault()
  }

  return (
    <div className="new-letter">
        <p className='letter-title'>Bạn sẽ được giảm giá 20% nếu mua hàng ngay trong hôm nay</p>
        <p className='text-gray-400 mt-3'>
          Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <form onSubmit={onSumbitHander} className='letter-form'>
          <input className='input-letter' type='email' placeholder='Nhập email của bạn' required />
          <button type='submit' className='button-letter'>SUBCRIBE</button>
        </form>
    </div>
  )
}

export default NewLetter