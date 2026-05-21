import React from 'react'
import Eventhome from '../components/Eventscomponent/Eventhome'
import Cellardoor from '../components/Eventscomponent/Cellardoor'
import Cell from '../components/Eventscomponent/Cell'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Events = () => {
  return (
    <div>
      <Header />
      <Eventhome/>
      <Cellardoor />
      <Cell />
      <Footer />
    </div>
  )
}

export default Events
