import React from "react";
import data_product from "../../assets/data.js"
import Item from "../Item/Item";
import "./Popular.css"

function Popular() {
  return (
    <div className="popular">
      <div className="popular-title">
        <h2>POPULAR IN WOMEN</h2>
        <hr />
      </div>
      <div className="popular-item-containor">
        {data_product.map((item,index) =>{
            return(
                <Item data_product={item} index={index} height={"400px"}/>
            )
        })}
      </div>

    </div>
  );
}

export default Popular;
