import React from "react";
import "./SideMenu.scss";
import { AiOutlineHome, AiOutlineLineChart } from "react-icons/ai";
import {
  BsPersonCircle,
  BsCardList,
  BsFillPersonFill,
  BsCart4,
} from "react-icons/bs";
import { RiBillLine } from "react-icons/ri";
import { GrPowerShutdown } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="cart ">
      <h1 className="menu">MEnu</h1>
      <ul>
        <li onClick={() => navigate("/")}>
          <AiOutlineHome />
          <h1>home</h1>
        </li>
        <li onClick={() => navigate("/Coustomers")}>
          <BsFillPersonFill />
          <h1>Coustomers</h1>
        </li>
        <li onClick={() => navigate("/Items")}>
          <BsCardList />
          <h1>Items</h1>
        </li>
        <li onClick={() => navigate("/Bils")}>
          <RiBillLine />
          <h1>Bills</h1>
        </li>
        <li onClick={() => navigate("/Gross_Sale")}>
          <AiOutlineLineChart />
          <h1>Gross Sale</h1>
        </li>
        <li onClick={() => navigate("/MyAccount")}>
          <BsPersonCircle />
          <h1>My Account</h1>
        </li>
        <li onClick={() => navigate("/")}>
          <GrPowerShutdown />
          <h1>Logout</h1>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
