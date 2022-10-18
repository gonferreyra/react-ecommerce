import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  adjustQuantity,
} from "../../redux/Shopping/shopping-actions";
import {
  CartContentContainer,
  CartBox,
  CartImg,
  ProductDetailBox,
  CartProductTitle,
  CartProductPrice,
  CartQuantityContainer,
  CartQuantityLabel,
  CartProductQuantity,
} from "./CartContentStyle";
import { BsTrash } from "react-icons/bs";

const CartContent = ({ data }) => {
  const dispatch = useDispatch();
  // console.log(data);

  // state to change the quantity
  // const [inputQuantity, setInputQuantity] = useState(data.quantity);

  // const onChangeHandler = (e) => {
  //   console.log(e.target.value);
  //   setInputQuantity(e.target.value);
  //   dispatch(adjustQuantity(data.item.id, e.target.value));
  // };

  return (
    <CartContentContainer>
      <CartBox>
        <CartImg
          src={require("../../img/" + data.item.url + ".png")}
          alt="cart"
        />
        <ProductDetailBox>
          <CartProductTitle>{data.item.name}</CartProductTitle>
          <CartProductPrice>$ {data.item.price}</CartProductPrice>
          <CartQuantityContainer>
            <CartQuantityLabel>Qty: </CartQuantityLabel>
            <CartProductQuantity
              type="number"
              min="1"
              value={data.quantity}
              onChange={(e) =>
                dispatch(adjustQuantity(data.item.id, e.target.value))
              }
            />
          </CartQuantityContainer>
        </ProductDetailBox>
        <BsTrash
          style={{
            fontSize: "20px",
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => dispatch(removeFromCart(data.item.id))}
        />
      </CartBox>
    </CartContentContainer>
  );
};

export default CartContent;
