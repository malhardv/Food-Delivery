import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Place-Order/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import AboutUs from './pages/About-Us/AboutUs'
import FAQs from './pages/FAQs/FAQs'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {
        showLogin ? <LoginPopUp setShowLogin={setShowLogin}></LoginPopUp> : <></>
      }
      <div className='app'>
        <Navbar setShowLogin = {setShowLogin}></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/place-order' element={<PlaceOrder></PlaceOrder>}></Route>
          <Route path='/about-us' element={<AboutUs></AboutUs>}></Route>
          <Route path='/faqs' element={<FAQs></FAQs>}></Route>
          <Route path='/privacy' element={<PrivacyPolicy></PrivacyPolicy>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App