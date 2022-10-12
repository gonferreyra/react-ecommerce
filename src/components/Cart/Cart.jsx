import React, { useState } from "react";

import { BsTrash } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import test from "../../img/air-jordan-1-low-flyease.png";

import "./cart.css";

const Cart = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  return (
    <>
      <div className="cart">
        <IoIosClose
          style={{
            position: "absolute",
            right: "0",
            fontSize: "2rem",
            cursor: "pointer",
          }}
          onClick={toggleCart}
        />
        <h2 className="cart-title">Your Cart</h2>

        <div className="cart-content">
          <div className="cart-box">
            <img
              className="cart-product-img"
              src={test}
              alt="nada"
              onClick={toggleCart}
            />
            <div className="product-detail-box">
              <h3 className="cart-product-title">Nike XX</h3>
              <p className="cart-product-price">$ 115</p>
              <input
                type="number"
                // value="1"
                className="cart-product-quantity"
              />
            </div>

            <BsTrash fontSize="20px" color="red" cursor="pointer" />
          </div>
        </div>
        <div className="cart-total">
          <p className="total-title">Total</p>
          <p className="total-price">$0</p>
        </div>
        {/* <div className="buy-btn">
          <button>Buy Now</button>
        </div> */}
        <button className="btn-buy">Buy Now</button>
      </div>
    </>
  );
};

export default Cart;
