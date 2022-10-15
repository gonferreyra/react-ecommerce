import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

import {
  ItemContainer,
  GridContainer,
  ImgContainer,
  ItemImg,
  Content,
  ContentName,
  ContentPrice,
  ContentInfo,
  ContentBtn,
  BackBtnContainer,
  BackBtn,
} from "./SneakerItemStyle";

const SneakerItem = () => {
  // we bring from STORE the item clicked on the previus page (SneakerCard)
  const item = useSelector((state) => state.shop.currentItem);
  // console.log(item);

  const dispatch = useDispatch();

  return (
    <ItemContainer>
      <GridContainer>
        <ImgContainer>
          <ItemImg src={require("../../../img/" + item.url + ".png")} />
        </ImgContainer>
        <Content>
          <ContentName>{item.name}</ContentName>
          <ContentPrice>{item.price}</ContentPrice>
          <ContentInfo>{item.info}</ContentInfo>
          <ContentBtn onClick={() => dispatch(addToCart(item.id))}>
            Add To Cart
          </ContentBtn>
        </Content>
        <BackBtnContainer>
          <BackBtn to="/">Go Back</BackBtn>
        </BackBtnContainer>
      </GridContainer>
    </ItemContainer>
  );
};

export default SneakerItem;
