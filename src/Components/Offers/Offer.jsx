import React from 'react'
import "./Offer.css"
import offer_section_img from "../../assets/woman-with-shopping-bags.jpg"
function Offer() {
  return (
    <div className="offer-cont">
    <div className='offer-containor'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For</h1>
            <h1>You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={offer_section_img}alt="" height='400px' />
        </div>
    </div>
    </div>
  )
}

export default Offer