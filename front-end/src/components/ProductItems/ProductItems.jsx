import React, { useContext } from 'react'
import './ProductItems.css'
import { ShopContext } from '../../context/ShopContext'

import { Link } from 'react-router-dom'

const ProductItems = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);


  return (
    <Link className="product-link" to={`/product/${id}`}>
        <div className="product-img">
            <img src={image[0]} alt=''></img>
        </div>
        <p className="name">{name}</p>
        <p className="price">{currency}{price}</p>
    </Link>
  )
}

export default ProductItems