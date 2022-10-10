import React from "react";
import {
  Card,
  CardImg,
  SneakerImg,
  CardInfoContainer,
  CardName,
  CardPrice,
  CardHoverContainer,
  CardBtn,
  Btn,
  CardIcons,
  IconBtn,
} from "./SneakerCardStyle";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";

const SneakerCard = ({ sneaker }) => {
  return (
    <Card>
      <CardImg>
        <SneakerImg src={require("../../img/" + sneaker.url + ".png")} />
        {/* <img src={require("../../img/air-jordan-xxxvi-low.jpg")} /> */}
      </CardImg>
      <CardInfoContainer>
        <CardName>{sneaker.name}</CardName>
        <CardPrice>$ {sneaker.price}</CardPrice>
        <CardHoverContainer>
          <CardBtn>
            <Btn id={sneaker.id}>
              <BsFillCartCheckFill /> Add to Cart
            </Btn>
          </CardBtn>
          <CardIcons>
            <IconBtn>
              <BiDetail size={20} />
            </IconBtn>
          </CardIcons>
        </CardHoverContainer>
      </CardInfoContainer>
    </Card>
  );
};

export default SneakerCard;
