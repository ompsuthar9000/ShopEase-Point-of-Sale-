import { createContext, useEffect } from "react";
import React, { useState } from "react";
export const AppContext = createContext();
import { usefetchpost } from "./../hooks/usefetch";
const Context = ({ children }) => {
  const [cartval, setCartVal] = useState([]);
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [total, setTotal] = useState(0);
  const [cartlenth, setCartLenth] = useState(0);

  const addProducttocart = (data) => {
    const index = cartval.indexOf(data);
    if (index === -1) {
      Object.assign(data, { prodQTY: 1 });
      setCartLenth(cartlenth + 1);
      setTotal((prev) => prev + data.price_inr);
      return setCartVal((prev) => [...prev, data]);
    }
  };

  const removeproduct = (id, price, count) => {
    let etc = [...cartval];
    const product = etc.filter((el) => el._id !== id);
    etc = [...product];
    const Rs = price * count;
    setTotal(total - Rs);
    setCartVal(etc);
    setCartLenth((prev) => prev - count);
  };

  const productinc = (prod) => {
    setTotal((prev) => prev + prod.price_inr);
    const obj = Object.assign(prod, { prodQTY: prod.prodQTY + 1 });
    let etc = [...cartval];
    const index = cartval.indexOf(prod);
    etc[index] = obj;
    setCartVal(etc);
    setCartLenth((prev) => prev + 1);
  };

  const decPrice = (prod) => {
    const RS = total - prod.price_inr;
    setTotal(RS);
    const obj = Object.assign(prod, { prodQTY: prod.prodQTY - 1 });
    let etc = [...cartval];
    const index = cartval.indexOf(prod);
    etc[index] = obj;
    setCartVal(etc);
    setCartLenth((prev) => prev - 1);
  };

  useEffect(() => {
    if (total.length === 0) {
      setTotal(0);
    }
  }, [cartval]);

  return (
    <AppContext.Provider
      value={{
        menu,
        setMenu,
        cart,
        setCart,
        cartval,
        setCartVal,
        addProducttocart,
        removeproduct,
        total,
        decPrice,
        productinc,
        setTotal,
        cartlenth,
        setCartLenth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
