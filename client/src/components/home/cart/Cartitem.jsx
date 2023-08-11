import React, { useContext, useState } from "react";
import "./Cartitem.scss";
import { AiOutlineClose } from "react-icons/ai";
import { AppContext } from "../../../context/Context";

const Cartitem = ({ data }) => {
  const { removeproduct, productinc, decPrice } = useContext(AppContext);
  const [count, setCount] = useState(1);

  const productInc = () => {
    setCount((prev) => prev + 1);
    return productinc(data);
  };
  const productDec = () => {
    setCount((prev) => (prev === 1 ? prev : prev - 1));
    if (count !== 1) {
      return decPrice(data);
    }
  };

  return (
    <div className="cartitem">
      <div className="image">
        <img src={data.image_url} alt="" />
      </div>
      <div className="flex flex-row justify-around  w-full">
        <div className="name flex flex-col justify-center justify-items-center ">
          <span className="red"> {data.name}</span>
          <span className="green"> {data.price}</span>
        </div>
        <div className="counter">
          <span className="plus cursor-pointer" onClick={productInc}>
            +
          </span>
          <span className="count">{count}</span>
          <span className="minus cursor-pointer " onClick={productDec}>
            -
          </span>
        </div>
        <div className="flex flex-col justify-between items-end">
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => {
              removeproduct(data._id, data.price_inr, count);
            }}
          />
          <p className="text-xs font-semibold">Qty: {count}</p>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
