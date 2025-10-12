import React, { createContext, useEffect, useState } from "react";
import all_product from "../assets/all_product_data";

// Create the context
export const dataContext = createContext(null);

// Context Provider component
export default function MainContext({ children }) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState("0");


  useEffect(() => {
    const get_data_local = JSON.parse(localStorage.getItem("cart_data")) || [];
    setData(get_data_local);
    setCount(get_data_local.length);
  }, []);


  return (
    <dataContext.Provider value={{ all_product, data, setData, count,setCount }}>
      {children}
    </dataContext.Provider>
  );
}
