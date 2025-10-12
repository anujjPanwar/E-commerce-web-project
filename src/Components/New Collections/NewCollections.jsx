import React from "react";
// import NewCollections_data from "../../assets/NewColllections";
import Item from "../Item/Item";
import "./NewCollection.css";
function NewCollections({NewCollections_data,tittle}) {
  return (
    <div className="collections">
      <div className="new-collections">
        <div className="new-collections-title">
          <h2>{tittle}</h2>
          <hr />
        </div>
        <div className="new-collections-item-containor">
          {NewCollections_data.map((item, index) => {
            return <Item data_product={item} index={index} height={"200px"}/>;
          })}
        </div>
      </div>
    </div>
  
  );
}

export default NewCollections;
