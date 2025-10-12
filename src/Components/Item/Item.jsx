import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
function Item({data_product,index,height}) {
  // const heightt = '200px'
  return (
    <Link to={`/product/${data_product.id}`} style={{ textDecoration: 'none',color:'inherit'}}>
    <div className='item-containor' key={index}> 
        <img src={data_product.image} alt="image"  style={{ height:`${height}`,width: "100%"}}/>
        <p className='product-name'>{data_product.name}</p>
        <div className="price">
            <p className='new-price'>${data_product.new_price}</p>
            <p className='old-price'>${data_product.old_price}</p>
        </div>
    </div>
    </Link>
  )
}

export default Item