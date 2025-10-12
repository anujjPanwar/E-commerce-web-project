import React, { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./Components/NavBar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSingup from "./Pages/LoginSingup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kid_banner from "./assets/kids_banner.jpg"


function App() {
  const [count, setCount] = useState(0);

  return <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Shop />}/>
      <Route path="/mens" element={<ShopCategory category={"men"} banner_image={men_banner}/>}/>
      <Route path="/womens" element={<ShopCategory category={"women"} banner_image={women_banner}/>}/>
      <Route path="/kids" element={<ShopCategory category={"kid"} banner_image={kid_banner}/>}/>
      <Route path="/product/:id" element={<Product />}/>
      <Route path=":productId" element={<Product />}/>
      <Route path="cart" element={<Cart />}/>
      <Route path="/loginSignup" element={<LoginSingup />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  </div>;
}

export default App;
