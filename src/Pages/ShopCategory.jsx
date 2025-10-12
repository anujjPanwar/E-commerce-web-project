import React, { useContext } from "react";
import sort_icon from "../assets/sort.png";
import { dataContext } from "../Context/MainContext";
import Item from "../Components/Item/Item";
import "./ShopCategory.css";

function ShopCategory({ banner_image, category }) {
  const { all_product } = useContext(dataContext);

  return (
    <div className="shop-category">
      <div className="banner">
        <img src={banner_image} alt="" />
      </div>
      <div className="shop-category-main-container">
        <div className="filters">
          <p>showing 1-12 out of 36 products</p>
          <div className="filter-sort">
            <p>Sort by </p>
            <img src={sort_icon} alt="" height="20px" />
          </div>
        </div>
        <div className="shop-category-container">
          {all_product.map((item, index) => {
            if (category == item.category) {
              return (
                <Item data_product={item} height={"200px"} index={index} />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;
