import React, { useContext } from "react";
import { dataContext } from "../Context/MainContext";
import CartItem from "../Components/CartItem/CartItem";

function Cart() {
  const { all_product, data, setData } = useContext(dataContext);

  const idCountMap = {};
  data.forEach((item) => {
    idCountMap[item.id] = (idCountMap[item.id] || 0) + 1;
  });
  // console.log("count of product  " + JSON.stringify(idCountMap));

  const filter_data = all_product
    .filter((item, i) => {
      // console.log(
      //   "itemm" +
      //     JSON.stringify(item.id) +
      //     "  ***********" +
      //     JSON.stringify(data[i])
      // );
      for (let j = "0"; j < data.length; j++) {
        if (item.id == data[j].id) {
          return item;
        }
      }
    })
    .map((prod) => {
      return {
        ...prod,
        count: idCountMap[prod.id],
        total: idCountMap[prod.id] * prod.new_price,
      };
    });
  console.log("///////////// " + JSON.stringify(filter_data));

  return (
    <div>
      <CartItem items={filter_data} />
    </div>
  );
}

export default Cart;
