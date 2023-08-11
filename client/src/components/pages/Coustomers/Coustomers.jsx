import React, { useEffect, useState } from "react";
import "./Coustomers.scss";
import usefetchget from "./../../../hooks/usefetch";
import { RiDeleteBin2Line } from "react-icons/ri";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";
import moment from "moment";
const Coustomers = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const Data = await usefetchget("http://localhost:3500/bill/coustomers");
      if (Data.length !== 0) {
        setData(Data);
      }
    }, 500);
  }, []);

  const removecoustomerHandler = async (id, url) => {
    setTimeout(async () => {
      const Data = await usefetchget("http://localhost:3500/bill/coustomers");
      if (Data.length !== 0) {
        setData(Data);
      }
    }, 500);
    return await axios.post(url, { id });
  };

  const data = Data?.data?.coutomers;

  return (
    <div className="body">
      <h1 className="text-center title">Customers</h1>
      <div className="heder">
        <div className="name">Name</div>
        <div className="mobile">Mobile</div>
        <div className="createdOn">Created On</div>
        <div className="purchase">Past Bills</div>
        <div className="Action">Action</div>
      </div>

      {data ? (
        data.map(
          (item, i) => (
            console.log(item),
            (
              <div className="row" key={i}>
                <div className="name">{item.CoustomerName}</div>
                <div className="mobile">{item.Mobile}</div>
                <div className="createdOn">
                  {moment(item.Date).format("DD/MM/YYYY")}
                </div>
                <div className="purchase">
                  <a href="*">None</a>
                </div>
                <div className="icon">
                  <RiDeleteBin2Line
                    className="cursor-pointer"
                    onClick={() =>
                      removecoustomerHandler(
                        item._id,
                        "http://localhost:3500/bill/removecoustomer"
                      )
                    }
                  />
                </div>
              </div>
            )
          )
        )
      ) : (
        <div className="w-full h-full flex  justify-center p-32">
          <ColorRing
            visible={true}
            height="150"
            width="150"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}
    </div>
  );
};

export default Coustomers;
