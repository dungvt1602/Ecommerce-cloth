import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Title from '../Title/Title';
import ProductItems from '../ProductItems/ProductItems';
import './BestSeller.css'

const BestSeller = () => {
  const { products } = useContext((ShopContext));
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller));
    setBestSeller(bestProduct.slice(0, 10));
  }, [])

  return (
    <div className='best-seller' >
      <div className='title-best-seller'>
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className='lyrics'>
          Lorem Ispy is a simple dummy text of the priting and typesetting insdustry
        </p>
      </div>

      {/* RERENDER PRODUCTS */}

      <div className='list-products'>
        {
          bestSeller.map((item, index) => (

            <ProductItems key={index} id={item._id} image={item.image}
              name={item.name} price={item.price} />

          )
          )
        }
      </div>
    </div>
  )
}

export default BestSeller