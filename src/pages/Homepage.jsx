import React from 'react'
import Herosection from '../components/Homepagecomponents/Herosection'
import Shopwines from '../components/Homepagecomponents/Shopwines'
import Difference from '../components/Homepagecomponents/Difference'
import Cellardoor from '../components/Homepagecomponents/Cellardoor'
import MollyClub from '../components/Homepagecomponents/MollyClub'
import Footer from '../components/Footer'
import SipIt from '../components/Homepagecomponents/SipIt'
import Header from '../components/Header'

const Homepage = () => {
  return (
    <div>
        <Header />
        <Herosection />
        <Shopwines />
        <Difference />
        <Cellardoor />
        <MollyClub />
        <SipIt />
        <Footer />
    </div>
  )
}

export default Homepage
