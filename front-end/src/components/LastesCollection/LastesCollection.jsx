import React, { useContext, useEffect, useState } from 'react'
import { ShopContext }  from '../../context/ShopContext';
import Title from '../Title/Title';
import './LastestCollection.css'
import ProductItems from '../ProductItems/ProductItems';


const LastesCollection = () => {
    const { products } = useContext(ShopContext);

    console.log(products);
    const [lastProducts, setLastProducts] = useState([]);

    useEffect(() => {
      setLastProducts(products.slice(0,10));
    }, [])

    

  return (
    <div className="last-collection">
      <div className='title-collection'>
        <Title text1={'LASTEST'} text2={'COLLECTION'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem Ispy is a simple dummy text of the priting and typesetting insdustry .</p>
      </div>

      {/* Rendering Products  */}

      <div className="products">
        {
          lastProducts.map((item, index) => (
            <ProductItems key={index} id={item._id} 
            image={item.image} name={item.name} price={item.price}/>
           ))
        }
      </div>
    </div>
  )
}

export default LastesCollection