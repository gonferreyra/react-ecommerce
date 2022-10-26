import React, { useContext, useMemo, useState } from "react";

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
  // connect state from store to component
  const products = useSelector((state) => state.shop.products);

  // Items to show state, determines how many items are shown on the sneakers section
  const [itemsToShow, setItemsToShow] = useState({
    items: 3,
  });
  const { items } = itemsToShow;
  const showMore = () => {
    setItemsToShow({ ...itemsToShow, items: items + 3 });
  };

  // Random display array of sneaker by creating a new array
  const shuffleArray = (array) => {
    const newArray = array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return newArray;
  };
  // Usememo to store the value and avoid to change sneakers everytime the component re-render when cart is open
  const memoProducts = useMemo(() => shuffleArray(products), [products]);

  // bring state from context
  const { cartIsOpen } = useContext(UserContext);

  return (
    <SneakerSection id="sneakerSection" cartIsOpen={cartIsOpen}>
      <Section>
        <SneakerContainer>
          {memoProducts.slice(0, items).map((sneaker) => (
            <SneakerCard
              key={sneaker.id}
              sneaker={sneaker}
              cartIsOpen={cartIsOpen}
            />
          ))}
          {}
        </SneakerContainer>
        <ButtonContainer>
          <ShowMoreBtn onClick={showMore}>Show more</ShowMoreBtn>
        </ButtonContainer>
      </Section>
    </SneakerSection>
  );
};

export default SneakersSection;
