import { createContext, useEffect, useState } from "react";

import { products } from '../assets/assets.js';

import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";





export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItem] = useState({});

    const [countCart, setCountCart] = useState();

    const navigate = useNavigate();



    const addToCart = async (itemId, size) => {


        if (!size) {
            enqueueSnackbar("Please select a size", { variant: "error" })
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData);
    }

    const countItems = () => {
        let count = 0;

        for (const item in cartItems) {
            for (const size in cartItems[item]) {

                if (cartItems[item][size] > 0) {
                    count += cartItems[item][size];
                }

            }
        }

        // setCountCart(count);
        console.log(count);
        setCountCart(count);
        console.log(countCart);


    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItem(cartData);
    }

    const getTotalItems = () => {
        let total = 0;

        for (const item in cartItems) {
            const ex = products.find((product) => product._id === item);
            console.log(ex);

            for (const size in cartItems[item]) {
                try {
                    if (cartItems[item][size] > 0) {
                        total += ex.price * cartItems[item][size];
                    }
                }
                catch (err) {

                }

            }

        }

        return total;

    }

    useEffect(() => {
        countItems();
    }, [cartItems]);

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch,
        addToCart, cartItems, countCart, updateQuantity, getTotalItems, navigate
    }

    return <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
}

export default ShopContextProvider;
