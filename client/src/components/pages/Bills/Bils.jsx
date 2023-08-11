import React, { useEffect, useState } from "react";
import "./Bils.scss";
import usefetchget from "./../../../hooks/usefetch";
import { AiOutlineEye } from "react-icons/ai";
import { IoTrashBinOutline } from "react-icons/io5";
import Pdf from "./Invoice/Pdf";
import axios from "axios";
const Bils = () => {
  const [data, setData] = useState();
  const [pdf, setpdf] = useState(false);
  const [pdfData, setPdfData] = useState({});
  useEffect(() => {
    setTimeout(async () => {
      const res = await usefetchget("http://localhost:3500/bill/Bills");
      setData(res.data.bill);
    }, 500);
  }, []);

  const removecoustomerHandler = async (id, url) => {
    setTimeout(async () => {
      const res = await usefetchget("http://localhost:3500/bill/Bills");
      setData(res.data.bill);
    }, 500);
    return await axios.post(url, { id });
  };

  {
    if (!pdf) {
      return (
        <div className="billbody">
          <h1 className=" text-lg font-semibold p-3 text-center">Bills</h1>
          <div className="heder">
            <div className=" w-full p-3 text-center">Invoice Number</div>
            <div className=" w-full p-3 text-center">Customer</div>
            <div className=" w-1/2 p-3 text-center">SubTotal</div>
            <div className="w-1/2 p-3 text-center">Tax</div>
            <div className="w-1/2 p-3 text-center">Total</div>
            <div className=" w-1/3 p-3 text-center">Actions</div>
          </div>
          <div>
            {data &&
              data.map((item, i) => {
                console.log(item);
                return (
                  <div className="content" key={i}>
                    <div className=" w-full p-3 text-center">
                      {item.InvoiceNumber}
                    </div>
                    <div className=" w-full p-3 text-center">
                      {item.CoustomerName}
                    </div>
                    <div className="md:w-1/2 w-full p-3 text-center">
                      &#x20B9;{item.SubTotal}
                    </div>
                    <div className="md:w-1/2 w-full p-3 text-center">
                      &#x20B9;{Math.round(item.GrandTotal - item.SubTotal)}
                    </div>
                    <div className="md:w-1/2 w-full p-3 text-center">
                      &#x20B9;{item.GrandTotal}
                    </div>
                    <div className=" md:w-1/3 w-full p-3 text-center svg ">
                      <AiOutlineEye
                        className="mx-auto"
                        onClick={() => {
                          setpdf(true);
                          setPdfData(item);
                        }}
                      />
                      <IoTrashBinOutline
                        className="mx-auto"
                        onClick={() =>
                          removecoustomerHandler(
                            item._id,
                            "http://localhost:3500/bill/removecoustomer"
                          )
                        }
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      );
    } else if (pdf) {
      return <Pdf data={pdfData} />;
    }
  }
};

export default Bils;
