import React from 'react'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import Salads from '../components/Salads'
import BestSellers from '../components/BestSellers'
import OrderStep from '../components/OrderStep'
import Customer from '../components/Customer'
import News from '../components/News'
import SpecialProduct from '../components/SpecialProduct'
import Download from '../components/Download'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Topbar/>
      <Salads/>
      <BestSellers/>
      <OrderStep/>
      <Customer/>
      <News/>
      <SpecialProduct/>
      <Download/>
      <Footer/>
    </div>
  )
}

export default Home
