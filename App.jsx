import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/collection' 
import placeorder from './pages/placeorder'
import About from './pages/About'
import contact from './pages/contact'
import cart from './pages/cart'
import login from './pages/login'
import order from './pages/order'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/collection" element ={<ollection/>}/>
        <Route path="/about" element={<about/>}/>
        <Route path="/contact" element={<contact/>}/>
        <Route path="/product/:productID" element={<product/>}/>
        <Route path="/cart" element={<cart/>}/>
        <Route path="/login" element={<login/>}/>
        <Route path="/order" element={<order/>}/>
        <Route path="/placeorder" element = {<placeorder/>}/>



        
        


      </Routes>

      
    </div>
  )
}

export default App
