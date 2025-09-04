import React, { useContext, useEffect, useState } from 'react'
import './Collection.css'
import { ShopContext } from '../../context/ShopContext'
import { assets } from '../../assets/assets';
import Title from '../../components/Title/Title';
import ProductItems from '../../components/ProductItems/ProductItems';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true)
  const [filterProducts, setFilterProducts] = useState([]);
  const [category , setCategory] = useState([]);
  const [subCategory , setSubCategory] = useState([]);

  const {search, showSearch} = useContext(ShopContext);

  const [sortType , setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productCopy = products.slice();

    if(showSearch) {
      productCopy = productCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) )
    }

    if(category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productCopy);
  }

  const sortProducts = () => {
    let sortProducts = products.slice();
    switch(sortType) {
      case 'low-high':
        sortProducts.sort((a,b) => (a.price - b.price))
        setFilterProducts(sortProducts);
        break

      case 'high-low':
        sortProducts.sort((a,b) => (b.price - a.price));
        setFilterProducts(sortProducts);
        break
      default:
        applyFilter();
        }
  }

  useEffect(() => {
    applyFilter()
  }, [subCategory,category,search]);

  useEffect(()=> {
    sortProducts();
  },[sortType]);

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
              <input className='w-3' onChange={toggleCategory} type="checkbox" value={'Men'} /> Men
            </p>
            <p> 
              <input className='w-3' onChange={toggleCategory} type="checkbox" value={'Women'} /> Women
            </p>
            <p>
              <input className='w-3' onChange={toggleCategory} type="checkbox" value={'Kids'} /> Kids
            </p>

          </div>
        </div>

        {/* SubCategory filter */}
        <div className={`category-filter my-5 ${showFilter ? "" :'hidden'}`} >
          <p className='category-title'>Type</p>
          <div className="list-category">
            <p> 
              <input className='w-3' onChange={toggleSubCategory} type="checkbox" value={'Topwear'} /> Topwear
            </p>
            <p> 
              <input className='w-3' onChange={toggleSubCategory} type="checkbox" value={'Bottomwear'}/> Bottowear
            </p>
            <p>
              <input className='w-3' onChange={toggleSubCategory} type="checkbox" value={'Winterwear'}/> Winterwear
            </p>
    
          </div>
        </div>
      </div>


      {/* Right Side : show all products */}

      <div className="product-collection">
        <div className="product-title">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* Product sort  */}
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="relavent">Sort by: Featured</option>
            <option value="low-high">Sort by: Low to high</option>
            <option value="high-low">Sort by: High to low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="product-sort">
          {
            filterProducts.map((item, index) => (
              <ProductItems key={index} id={item.id} name={item.name} 
              image={item.image} price={item.price}/>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection