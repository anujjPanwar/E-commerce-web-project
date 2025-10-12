import React from 'react'
import "./NewsLetter.css"
function NewsLetter() {
  return (
    <div className="news-letter-container">
    <div className='news-letter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="news-letter-cont">
            <input type="email" placeholder='Your Email Id' />
            <button>Subscribe</button>
        </div>
    </div>
    </div>
  )
}

export default NewsLetter