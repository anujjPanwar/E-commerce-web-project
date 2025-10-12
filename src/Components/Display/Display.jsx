import React, { useContext } from "react";
import "./Display.css";
import star from "../../assets/star_icon.png";
import star_dull from "../../assets/star_dull_icon.png";
import { dataContext } from "../../Context/MainContext";

function Display({ display_data }) {
    const {data, setData ,setCount} = useContext(dataContext);
    
    const add_data = (value)=>{
        const get_data = JSON.parse(localStorage.getItem('cart_data')) || [];
        
        
        const data_array = [...get_data];
        data_array.push(value); 
        localStorage.setItem("cart_data",JSON.stringify(data_array))
        setData(data_array)
        setCount(data_array.length)
        
    }
    
  return (
    <div className="display">
      <div className="grid">
        <div className="grid-container">
          <img src={display_data.image} alt="Image 1" className="img img1" />
          <img src={display_data.image} alt="Image 2" className="img img2" />
          <img src={display_data.image} alt="Image 3" className="img img3" />
          <img src={display_data.image} alt="Image 4" className="img img4" />
        </div>
      </div>
      <div className="display-desc">
        <h1> {display_data.name} </h1>
        <div className="rating">
          <img src={star} alt="" height={"18px"} />
          <img src={star} alt="" height={"18px"} />
          <img src={star} alt="" height={"18px"} />
          <img src={star} alt="" height={"18px"} />
          <img src={star_dull} alt="" height={"18px"} />
          <span>(130)</span>
        </div>
        <div className="price">
          <p className="new-price"> $ {display_data.new_price} </p>
          <p className="old-price"> $ {display_data.old_price} </p>
        </div>
        <div className="about-item">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            deleniti nemo suscipit magnam consequuntur. Hic eum natus ut
            voluptas error vero velit architecto! Officia perferendis mollitia
            libero, nam debitis iste.
          </p>
        </div>
        <p className="size">Select Size</p>
        <div className="select-size">
          <div className="s">S</div>
          <div className="s">M</div>
          <div className="s">L</div>
          <div className="s">XL</div>
          <div className="s">XXL</div>
        </div>
        <button onClick={()=> add_data(display_data) }>ADD TO CART</button>
        <div className="category">
          <p>
            <b>Category</b> : {display_data.category}, {display_data.name}
          </p>
          <p> <b>Tags</b> : Modern, Latest, Trend Shorts</p>
        </div>
      </div>
    </div>
  );
}

export default Display;
