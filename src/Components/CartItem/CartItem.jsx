import React, { useContext } from "react";
import "./CartItem.css"
import { Link } from "react-router-dom";
import { dataContext } from "../../Context/MainContext";
export default function ({ items }) {
    const {data, setData} = useContext(dataContext);
    const remove = (item_id)=>{
        const filterd_data = data.filter((value)=>{
            return value.id != item_id;

        }) 
        localStorage.setItem("cart_data",JSON.stringify(filterd_data));
        setData(filterd_data);
console.log("hhhhhhhhhhhhhhhhh "+filterd_data);

    }
  return (
    <div className="cart-item-container">
     
      <div className="cart-item-heading">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <div className="cart-item">
        {items.map((item, i) => {
          return (
            <div className="cart-item-product" key={i}>
              <Link to={`/product/${item.id}`} style={{ textDecoration: 'none',color:'inherit'}}><img src={item.image} alt="" /></Link>
              <p>{item.name}</p>
              <p>${item.new_price}</p>
              <p>{item.count}</p>
              <p>${item.total}</p>
              <p className="button" onClick={()=> remove(item.id)}>Delete</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
