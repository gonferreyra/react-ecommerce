import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  ExitSection,
  ItemsContainer,
  PaymentContainer,
  PaymentContainerBox,
  ButtonCash,
  ButtonCreditCard,
  ButtonPaypal,
  TotalContainer,
  TotalContainerBox,
  Total,
  Span,
  Confirm,
} from "./PurchaseStyle";
import Items from "./Items/Items";

const Purchase = () => {
  const cart = useSelector((state) => state.shop.cart);
  console.log(cart);

  // Update total
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.item.price;
    });
    setTotalPrice(total);
  }, [cart, totalPrice, setTotalPrice]);

  // button
  const [disabled, setDisabled] = useState(true);

  const handlerDisabledButton = () => {
    setDisabled(false);
  };

  const handlerEnableButton = () => {
    setDisabled(true);
  };

  const purchaseComplete = () => {
    console.log("clicked");
  };

  return (
    <ExitSection>
      <ItemsContainer>
        {cart.map((item, i) => {
          return <Items key={i} item={item} />;
        })}
      </ItemsContainer>
      <TotalContainer>
        <TotalContainerBox>
          <Total>${totalPrice}</Total>
          <Span>Total</Span>
        </TotalContainerBox>
      </TotalContainer>
      <PaymentContainer>
        <PaymentContainerBox>
          <ButtonCash
            onFocus={handlerDisabledButton}
            onBlur={handlerEnableButton}
          >
            Cash
          </ButtonCash>
          <ButtonCreditCard
            onFocus={handlerDisabledButton}
            onBlur={handlerEnableButton}
          >
            CreditCard
          </ButtonCreditCard>
          <ButtonPaypal
            onFocus={handlerDisabledButton}
            onBlur={handlerEnableButton}
          >
            Paypal
          </ButtonPaypal>
        </PaymentContainerBox>
      </PaymentContainer>
      <Confirm disabled={disabled} onClick={purchaseComplete}>
        Confirm
      </Confirm>
    </ExitSection>
  );
};

export default Purchase;
