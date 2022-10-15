import React, { useContext, useState } from "react";

// import imgtest from "../../images/airjordan1.png";
// import "./Style.css";

import {
  SneakerContainer,
  SneakerSection,
  ShowMoreBtn,
  Section,
  ButtonContainer,
} from "./SneakersSectionStyle";
// import { sneakers } from "../../DataBase/db";
import SneakerCard from "./SneakerCard/SneakerCard";

import { useSelector } from "react-redux";
import { UserContext } from "../Context/UserContext";

const SneakersSection = () => {
  // Items to show state, determines how many items are shown on the sneakers section
  const [itemsToShow, setItemsToShow] = useState({
    items: 3,
  });
  const { items } = itemsToShow;
  // console.log(items);

  const showMore = () => {
    setItemsToShow({ ...itemsToShow, items: items + 3 });
  };

  // bring state from context
  const { cartIsOpen } = useContext(UserContext);

  // connect state from store to component
  const products = useSelector((state) => state.shop.products);
  // console.log(products);

  return (
    <SneakerSection id="sneakerSection" cartIsOpen={cartIsOpen}>
      <Section>
        <SneakerContainer>
          {products.slice(0, items).map((sneaker) => (
            <SneakerCard key={sneaker.id} sneaker={sneaker} />
          ))}
        </SneakerContainer>
        <ButtonContainer>
          <ShowMoreBtn onClick={showMore}>Show more</ShowMoreBtn>
        </ButtonContainer>
      </Section>
    </SneakerSection>
  );
};

export default SneakersSection;
