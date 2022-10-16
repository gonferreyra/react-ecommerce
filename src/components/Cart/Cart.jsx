import React, { useContext, useEffect, useState } from "react";

import { IoIosClose } from "react-icons/io";
// import { BsTrash } from "react-icons/bs";

// import test from "../../img/air-jordan-1-low-flyease.png";

import {
  CartContainer,
  CartTitle,
  // CartContent,
  // CartBox,
  // CartImg,
  // ProductDetailBox,
  // CartProductTitle,
  // CartProductPrice,
  // CartProductQuantity,
  CartTotal,
  TotalPrice,
  TotalTitle,
  BtnBuy,
} from "./CartStyle";
import { UserContext } from "../Context/UserContext";
import { useSelector } from "react-redux";
import CartContent from "./CartContent";

const Cart = () => {
  const { cartIsOpen, toggleCart } = useContext(UserContext);

  // bring cart from reducer (name: shop)
  const cart = useSelector((state) => state.shop.cart);
  // console.log(cart);

  // Update total
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.item.price;
    });
    setTotalPrice(total);
  }, [cart, totalPrice, setTotalPrice]);

  return (
    <>
      <CartContainer cartIsOpen={cartIsOpen}>
        <IoIosClose
          style={{
            position: "absolute",
            right: "0",
            fontSize: "2rem",
            cursor: "pointer",
          }}
          onClick={toggleCart}
        />
        <CartTitle>Your Cart</CartTitle>
        {cart.map((item, i) => (
          <CartContent key={i} data={item} />
        ))}
        <CartTotal>
          <TotalTitle>Total</TotalTitle>
          <TotalPrice>$ {totalPrice}</TotalPrice>
        </CartTotal>
        <BtnBuy>Buy Now</BtnBuy>
      </CartContainer>
    </>
  );
};

export default Cart;
