import React, { useEffect, useState } from "react";
import "./BillForm.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";
import { useFormik } from "formik";
import { AppContext } from "../../../../context/Context";
import { useContext } from "react";
import { usefetchpost } from "./../../../../hooks/usefetch";
import * as Yup from "yup";
const BillForm = ({ billfrom, setBillForm }) => {
  const [formvelid, setFormisVelid] = useState(false);
  const [bill, setBill] = useState([]);
  const { setCart, cartval, setCartVal, setTotal, setCartLenth, total } =
    useContext(AppContext);
  const taxcal = (val) => {
    const tax = (val * 3) / 100;
    return val + tax;
  };

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      Name: "",
      Number: "",
      Payment_Mode: "",
    },
    onSubmit: async (el) => {
      const value = {
        customer: {
          ...el,
        },
        products: [...cartval],
        total: {
          Subtotal: total,
          grandtotal: taxcal(total),
        },
      };
      setBill(value);
      setBillForm(false);
      setCartVal([]);
      setCart(false);
      setTotal(0);
      setCartLenth(0);
    },
  });

  useEffect(() => {
    setTimeout(async () => {
      if (bill.length !== 0) {
        return await usefetchpost(
          "http://localhost:3500/bill/createBill",
          bill
        ).then((resp) => console.log(resp));
      }
    }, 200);
  }, [bill]);

  useEffect(() => {
    if (values.Name && values.Number && values.Payment_Mode)
      setFormisVelid(true);
  }, [values]);

  return (
    <div className={!billfrom ? "noneDisplay " : "billformbody"}>
      <form onSubmit={handleSubmit}>
        <div className="formcard">
          <div className="flex flex-row gap-16">
            <AiOutlineArrowLeft
              className="text-2xl cursor-pointer hover:scale-125"
              onClick={() => setBillForm(false)}
            />
            <h1 className="text-xl uppercase">Charge Bill</h1>
          </div>
          <div className="form">
            <div className="inputdiv flex flex-row">
              <BsPersonCircle />
              <input
                type="text"
                placeholder="Cutomer Name"
                name="Name"
                onChange={handleChange}
              />
            </div>
            <div className="inputdiv flex flex-row">
              <IoCallSharp />
              <input
                type="tel"
                placeholder="Number"
                name="Number"
                onChange={handleChange}
              />
            </div>
            <div>
              <select
                id=""
                placeholder="Payment Mode"
                name="Payment_Mode"
                onInput={handleChange}
                defaultValue={"1"}
              >
                <option value="1" hidden>
                  Select Payment Mode...
                </option>
                <option value="Cash">Cash</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Credit Card">Credit Card</option>
                <option value="UPI">UPI</option>
              </select>
            </div>
          </div>
          <div className="total_fare">
            <div className="flex flex-row justify-between font-medium px-2 mb-4">
              <p>SubTotal: &#x20B9;{total}</p>
              <p>Tax: 3%</p>
            </div>
            <h1>Grand Total :&#x20B9;{taxcal(total)}</h1>
          </div>
          <button
            type="submit"
            className={formvelid ? "velidbtn" : "notvelidbtn"}
          >
            Genrate Bill
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillForm;
