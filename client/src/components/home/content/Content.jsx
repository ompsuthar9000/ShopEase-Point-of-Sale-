import React, { useEffect, useState } from "react";
import Grocerys from "./../../../img/groceries.png";
import Dairy from "./../../../img/dairy-products.png";
import Vegitables from "./../../../img/vegetable.png";
import Fruts from "./../../../img/healthy-food.png";
import Card from "./Card";
// import data from "../../../data";
import "./Content.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import usefetchget from "./../../../hooks/usefetch";
import { Dna } from "react-loader-spinner";
const Content = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [Data, setData] = useState();
  let cat;
  if (!category) {
    cat = "groceries";
  } else {
    cat = category;
  }
  useEffect(() => {
    setTimeout(async () => {
      const dat = await usefetchget(
        `http://localhost:3500/products/cat/${cat}`
      ).catch((err) => {
        console.log(err);
      });
      if (dat) {
        setData(dat);
      }
    }, 300);
  }, [category]);
  const data = Data?.data?.data?.product;
  return (
    <>
      <div className="content_Body">
        <div className="Category">
          <div
            className="subcat"
            onClick={() => navigate("/products/groceries")}
          >
            <img src={Grocerys} alt="" />
            <h1> grocerys</h1>
          </div>
          <div
            className="subcat"
            onClick={() => navigate("/products/dairy_products")}
          >
            <img src={Dairy} alt="" />
            <h1>Dairy</h1>
          </div>
          <div
            className="subcat"
            onClick={() => navigate("/products/vegetables")}
          >
            <img src={Vegitables} alt="" />
            <h1> vegetables</h1>
          </div>
          <div className="subcat" onClick={() => navigate("/products/fruits")}>
            <img src={Fruts} alt="" />
            <h1> fruits</h1>
          </div>
        </div>
      </div>
      <div className="Products">
        {data && data.map((item) => <Card data={item} key={item._id} />)}
        {!data && (
          <div className="dna">
            <Dna
              visible={true}
              height="100"
              width="100"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
