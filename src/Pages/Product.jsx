import React, { useContext } from "react";
import { dataContext } from "../Context/MainContext";
import { useParams } from "react-router-dom";
import Item from "../Components/Item/Item";
import Display from "../Components/Display/Display";
import Description from "../Components/Description/Description";
import NewCollections from "../Components/New Collections/NewCollections";
import NewCollections_data from "../assets/NewColllections";
function Product() {
  const { all_product } = useContext(dataContext);
  const { id } = useParams();
  console.log("product_id " + id);
  const selected_pro = all_product.find((item) => {
    return item.id == id;
  });
  const related_data = all_product.filter((item)=>{
    return(
      item.category == selected_pro.category
    )
  })
  console.log("data" + JSON.stringify(related_data));
  console.log("selected_pro" + selected_pro.category);

  return (
    <div>
      <Display display_data={selected_pro} />
      <Description />
      <NewCollections NewCollections_data={related_data} tittle={"Related Item"}/>
    </div>
  );
}

export default Product;
