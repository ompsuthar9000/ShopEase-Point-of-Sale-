import React, { useEffect, useState } from "react";
import "./Items.scss";
import { RiDeleteBin2Line } from "react-icons/ri";
import usefetchget from "../../../hooks/usefetch";
import { Oval } from "react-loader-spinner";

const Items = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setTimeout(async () => {
      const data = await usefetchget(
        `http://localhost:3500/products/all`
      ).catch((err) => console.log(err));
      if (data) {
        setData(data.data.data.product);
      }
    }, 300);
  }, []);

  return (
    <div className="listbody">
      <h1 className="text-2xl p-3 ">Products Stock</h1>
      <div className="productsbody ">
        {data ? (
          data.map((data1, i) => (
            <div className="productsubcard" key={i}>
              <img src={data1.image_url} alt="" />{" "}
              <h1 className="name my-auto md:text-xl">{data1.name}</h1>
              <h1 className="hidden md:flex md:capitalize w-full">
                {data1.category}
              </h1>
              <div className="flex md:flex-row flex-col md:justify-between justify-around md:gap-24">
                <h2 className="avilableqty my-auto">Qty:{data1.quantity}</h2>
                <h2 className="price my-auto">{data1.price}</h2>
              </div>
              <RiDeleteBin2Line className="cursor-pointer" />
            </div>
          ))
        ) : (
          <div className="oval">
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={3}
              strokeWidthSecondary={3}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Items;
