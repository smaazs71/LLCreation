"use client";

import React, { useState } from "react";
import { CartButton, CartSideBar } from ".";

const Cart = () => {
  const [cartSideBar, setCartSideBar] = useState(false);

  return (
    <>
      <CartButton setCartSideBar={setCartSideBar} />
      <CartSideBar cartSideBar={cartSideBar} setCartSideBar={setCartSideBar} />
    </>
  );
};

export default Cart;
