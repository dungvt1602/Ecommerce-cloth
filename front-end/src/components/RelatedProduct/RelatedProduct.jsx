import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { products } from '../../assets/assets';
import Title from '../Title/Title';
import ProductItems from '../ProductItems/ProductItems';

const RelatedProduct = ({category, subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related , setRelated] = useState([]);


    useEffect( () => {
        if(products.length > 0){
            let productCopy = products.slice();
            productCopy = productCopy.filter((item) => item.category === category);
            productCopy = productCopy.filter((item) => item.subCategory === subCategory);
            productCopy = productCopy.slice(0,5);
            setRelated(productCopy);

            console.log(related);
        }
    },[products])

  return (
    <div className="my-15">
        <div className="text-center text-2xl my-4">
            <Title text1={"RELATED"} text2={"PRODUCTS"}/>
        </div>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                related.map((item, index) => (
                    <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProduct