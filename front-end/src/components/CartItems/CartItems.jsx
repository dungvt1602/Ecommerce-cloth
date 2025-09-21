import React, { useContext } from 'react'

import { ShopContext } from '../../context/ShopContext'
import Title from '../Title/Title';

const CartItems = () => {
    const { currency, delivery_fee, getTotalItems } = useContext(ShopContext);

    return (
        <div className="w-full">
            <div className="text-2xl">
                <Title text1={'CART'} text2={"TOTAL"} />
            </div>

            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between ">
                    <p>Subtotal</p>
                    <p>{currency} {getTotalItems()}.00</p>
                </div>
                <hr />
                <div className="flex justify-between ">
                    <p>Shipping Fee</p>
                    <p>{currency} {delivery_fee}</p>
                </div>
                <hr />
                <div className="flex justify-between font-medium ">
                    <p>Total</p>
                    <p>{currency} {getTotalItems() === 0 ? 0 : getTotalItems() + delivery_fee}</p>
                </div>

            </div>
        </div>
    )
}

export default CartItems