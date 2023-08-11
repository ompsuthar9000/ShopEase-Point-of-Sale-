import React, { useState, useContext } from "react";
import { AppContext } from "../../../context/Context";
import "./Heder.scss";
import {
  AiOutlineShoppingCart,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

const Heder = () => {
  const { menu, setMenu, setCart, cartval } = useContext(AppContext);
  // const [menu, setMenu] = useState(false);
  return (
    <div className="home_Heder px-7">
      {menu ? (
        <AiOutlineMenuUnfold onClick={() => setMenu(false)} />
      ) : (
        <AiOutlineMenuFold onClick={() => setMenu(true)} />
      )}
      <div className="left">
        <h1>ShopEase</h1>
      </div>
      <div className="right">
        {<div className="count">{cartval.length}</div>}
        <AiOutlineShoppingCart onClick={() => setCart(true)} />
      </div>
    </div>
  );
};

export default Heder;
