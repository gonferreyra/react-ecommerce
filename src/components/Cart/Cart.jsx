import React, { useContext, useEffect, useState } from "react";

import { IoIosClose } from "react-icons/io";
// import { BsTrash } from "react-icons/bs";

import {
  CartContainer,
  CartTitle,
  CartTotal,
  TotalPrice,
  TotalTitle,
  BtnBuy,
  UserInfo,
  UserInfoName,
  UserInfoImg,
  LogOutBtn,
  ButtonContainer,
  LoginCart,
  RegisterCart,
} from "./CartStyle";
import { UserContext } from "../Context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import CartContent from "./CartContent/CartContent";
import { startLogout } from "../../redux/Auth/auth-actions";
import UserImg from "../../img/blankuser.png";

const Cart = ({ isLoggedIn }) => {
  const { cartIsOpen, toggleCart } = useContext(UserContext);

  // bring cart and auth from reducer
  const cart = useSelector((state) => state.shop.cart);
  const auth = useSelector((state) => state.auth);

  // Update total
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.item.price;
    });
    setTotalPrice(total);
  }, [cart, totalPrice, setTotalPrice]);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <>
      <CartContainer cartIsOpen={cartIsOpen}>
        {isLoggedIn && (
          <UserInfo>
            <UserInfoName>{auth.name}</UserInfoName>
            {auth.photo ? (
              <UserInfoImg src={auth.photo} alt="profile" />
            ) : (
              <UserInfoImg src={UserImg} alt="profile" />
            )}
          </UserInfo>
        )}

        <IoIosClose
          style={{
            position: "absolute",
            right: "0",
            fontSize: "2rem",
            cursor: "pointer",
          }}
          onClick={toggleCart}
        />

        {cart.length === 0 ? (
          <CartTitle>No items in cart</CartTitle>
        ) : (
          <>
            <CartTitle>Your Cart</CartTitle>
            {cart.map((item, i) => (
              <CartContent key={i} data={item} />
            ))}
            <CartTotal>
              <TotalTitle>Total</TotalTitle>
              <TotalPrice>$ {totalPrice}</TotalPrice>
            </CartTotal>
            {isLoggedIn && (
              <BtnBuy to="/exit" onClick={toggleCart}>
                Buy Now
              </BtnBuy>
            )}
          </>
        )}
        {auth.uid ? (
          <LogOutBtn
            onClick={() => {
              handleLogout();
              toggleCart();
            }}
          >
            Logout
          </LogOutBtn>
        ) : (
          <ButtonContainer>
            <LoginCart to="/login" onClick={toggleCart}>
              Login
            </LoginCart>
            <RegisterCart to="/register" onClick={toggleCart}>
              Register
            </RegisterCart>
          </ButtonContainer>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;
