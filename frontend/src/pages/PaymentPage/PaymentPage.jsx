import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import PaymentInstructions from '../../components/PaymentInstructions.jsx/PaymentInstructions'
import Footer from '../../components/Footer/Footer'

const PaymentPage = () => {
  return (
        <>
    <Navbar/>
    <PaymentInstructions/>
    <Footer/>
    </>
  )
}

export default PaymentPage