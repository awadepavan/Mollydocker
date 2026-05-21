import React from 'react'
import MollyClubhome from '../components/MollyClubcomponents/MollyClubhome'
import MollyClubWork from '../components/MollyClubcomponents/MollyClubWork'
import Footer from '../components/Footer'
import MollyClubBenefit from '../components/MollyClubcomponents/MollyClubBenifit'
import MollyclubLatt from '../components/MollyClubcomponents/MollyclubLatt'
import Header from '../components/Header'

const MollyClubs = () => {
  return (
    <div>
      <Header />
      <MollyClubhome />
      <MollyClubWork />
      <MollyClubBenefit />
      <MollyclubLatt />
      <Footer />
    </div>
  )
}

export default MollyClubs
