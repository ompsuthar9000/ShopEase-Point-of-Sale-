import React, { useContext, useState } from "react";
import { BsCartX } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AppContext } from "./.././../../context/Context";
import BillForm from "../../pages/Bills/BillForm/BillForm";

import Cartitem from "./Cartitem";

import "./Cart.scss";
const Cart = () => {
  const { setCart, cartval, total, cart, cartlenth } = useContext(AppContext);
  const [billfrom, setBillForm] = useState(false);
  const data = cartval;
  return (
    <div className={cart ? "opacity" : "opacity hiddencart "}>
      <BillForm billfrom={billfrom} setBillForm={setBillForm} />
      <div className={billfrom ? "noneDisplay" : "cartbody"}>
        <div className="flex flex-row p-2     w-full carttop justify-between ">
          <h1>CART PREVIEW</h1>
          <span
            className="flex flex-row cursor-pointer"
            onClick={() => setCart(false)}
          >
            <AiOutlineClose className=" ml-auto " />{" "}
            <span className="">Close</span>
          </span>
        </div>

        {data.length !== 0 || data === undefined ? (
          <>
            <div className="cartproducts">
              {data.map((item, i) => (
                <Cartitem data={item} key={i} />
              ))}
            </div>

            <div className="cartbottom  ">
              <div className="flex flex-row justify-between w-full">
                <h1>Items:{` ${cartlenth}`} </h1>
                <h1> Total Amount: &#8377;{total}</h1>
              </div>
              <button>
                <h1 onClick={() => setBillForm(true)}>Genrate Bill</h1>
              </button>
            </div>
          </>
        ) : (
          <div className="cartempty">
            <BsCartX className="empty_cart " />
            <h1>No Products In The Cart.</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
