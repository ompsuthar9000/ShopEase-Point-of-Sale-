import React, { useContext } from "react";
import Heder from "./heder/Heder";
import Content from "./content/Content";
import "./Home.scss";
import SideMenu from "./menu/SideMenu";
import MyAccount from "./../pages/myAccount/MyAccount";
import Items from "./../pages/Items/Items";
import Coustomers from "./../pages/Coustomers/Coustomers";
import Bils from "./../pages/Bills/Bils";

import { AppContext } from "../../context/Context";
import Cart from "./cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../pages/Bills/Invoice/Pdf";

const home = () => {
  const { menu } = useContext(AppContext);
  return (
    <>
      <BrowserRouter>
        <Heder />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/products/:category" element={<Content />} />
          <Route path="/Coustomers" element={<Coustomers />} />
          <Route path="/Items" element={<Items />} />
          <Route path="/Bils" element={<Bils />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/pdf" element={<App />} />
        </Routes>
        {menu && <SideMenu />}
        <Cart />
        {/* <Content /> */}
      </BrowserRouter>
    </>
  );
};

export default home;
