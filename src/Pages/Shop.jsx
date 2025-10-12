import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer.jsx'
import NewCollections from '../Components/New Collections/NewCollections.jsx'
import NewsLetter from '../Components/NewsLetter/NewsLetter.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import NewCollections_data from "../assets/NewColllections.js";
function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections NewCollections_data={NewCollections_data} tittle={'NEW COLLECTIONS'} />
      <NewsLetter />
      
      
    </div>
  )
}

export default Shop