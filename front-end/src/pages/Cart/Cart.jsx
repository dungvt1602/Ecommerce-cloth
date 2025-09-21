import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext';
import Title from '../../components/Title/Title';
import { assets } from '../../assets/assets';
import CartItems from '../../components/CartItems/CartItems';

const Cart = () => {

  const { cartItems, products, currency, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartItem] = useState([]);

  useEffect(() => {

    const tempData = [];

    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        if (cartItems[item][size] > 0) {
          tempData.push({
            _id: item,
            size: size,
            quantity: cartItems[item][size]
          })
        }

      }
    }
    setCartItem(tempData);
  }, [cartItems])


  return (
    <div className="border-t pt-14">
      <div className='text-2xl mb-5'>
        <Title text1={"Your"} text2={"Cart"} />
      </div>

      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);



            return (
              <div key={index} className="py-4 border-t border-gray-400 border-b-2 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] 
              sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                <div className="flex items-start gap-6">
                  <img className='w-16 sm:w-20' src={productData.image[0]} />
                  <div >
                    <p className="text-sx sm:text-lg font-medium">{productData.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-200'>{item.size}</p>
                    </div>
                  </div>
                </div>

                <input onChange={(e) => e.target.value === '' || e.target.value === 0 ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 py-1 px-1 sm:px-2' type="number" min={1} defaultValue={item.quantity} />
                <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} ></img>
              </div>
            )
          })
        }
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartItems />
          <div className="w-full text-end">
            <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm py-3 px-9 my-8  '>THANH TOAN</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart