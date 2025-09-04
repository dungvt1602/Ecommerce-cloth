
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Collection from './pages/Collection/Collection'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Order from './pages/Order/Order'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  

  return (
    <div className='container'>
      <Navbar/>
      <SearchBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/collection' element={<Collection/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/product/:productId' element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/place-order' element={<PlaceOrder/>} />
      <Route path='/orders' element={<Order/>} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
