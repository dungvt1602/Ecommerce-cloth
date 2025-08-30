import React, { useContext } from 'react'
import './Collection.css'
import { ShopContext } from '../../context/ShopContext'
import { assets } from '../../assets/assets';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = React.useState(true);

  return (
    <div className="collection">
      
      {/* Lọc các sản phẩm  */}


      <div className='filter-collection'>
        <p onClick={() => setShowFilter(!showFilter)} className="filter">FILTER
          <img className={`${showFilter ? 'rotate-90' : ""}`} src={assets.dropdown_icon} alt=''/>
        </p>

        {/* category filter  */}

        <div className={`category-filter ${showFilter ? "" :'hidden'}`} >
          <p className='category-title'>CATEGORIES</p>
          <div className="list-category">
            <p> 
              <input className='w-3' type="checkbox" value={'Men'} /> Men
            </p>
            <p> 
              <input className='w-3' type="checkbox" value={'Woman'} /> Woman
            </p>
            <p>
              <input className='w-3' type="checkbox" value={'Kids'} /> Kids
            </p>

          </div>
        </div>

        {/* SubCategory filter */}
        <div className={`category-filter my-5 ${showFilter ? "" :'hidden'}`} >
          <p className='category-title'>Type</p>
          <div className="list-category">
            <p> 
              <input className='w-3' type="checkbox" value={'Topwear'} /> Topwear
            </p>
            <p> 
              <input className='w-3' type="checkbox" value={'Bottomwear'}/> Woman
            </p>
            <p>
              <input className='w-3' type="checkbox" value={'Winterwear'}/> Winterwear
            </p>

          </div>
        </div>
      </div>

      <div className="product-collection">

      </div>

    </div>
  )
}

export default Collection