import React from "react";
import "./Card.scss";
import { AppContext } from "../../../context/Context";
import { useContext } from "react";
const Card = ({ data }) => {
  const { addProducttocart } = useContext(AppContext);
  return (
    <div className="card_body">
      <div className="name">{data.name}</div>
      <div>
        <img src={data.image_url} alt="" className="w-28" />
      </div>
      <div className="price">{data.price}</div>
      <button
        onClick={() => {
          addProducttocart(data);
        }}
      >
        Add To Card
      </button>
    </div>
  );
};

export default Card;
