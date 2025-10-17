import React, { useContext, useState } from "react";

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
import { dataContext } from "./Context/MainContext";
import Signup from "./Pages/Signup";


function App() {
    const {login} = useContext(dataContext);

  return <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={login == 0 ? <LoginSingup /> :<Shop />}/>
      <Route path="/mens" element={login == 0 ? <LoginSingup /> : <ShopCategory category={"men"} banner_image={men_banner}/>}/>
      <Route path="/womens" element={ login == 0 ? <LoginSingup /> :<ShopCategory category={"women"} banner_image={women_banner}/>}/>
      <Route path="/kids" element={login == 0 ? <LoginSingup /> :<ShopCategory category={"kid"} banner_image={kid_banner}/>}/>
      <Route path="/product/:id" element={login == 0 ? <LoginSingup /> :<Product />}/>
      <Route path=":productId" element={login == 0 ? <LoginSingup /> :<Product />}/>
      <Route path="cart" element={login == 0 ? <LoginSingup /> :<Cart />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/loginSignup" element={<LoginSingup />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  </div>;
}

export default App;
