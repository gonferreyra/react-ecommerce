import React, { useContext } from "react";
import {
  HeroContainer,
  HeroBackground,
  HeroBackgroundVideo,
  HeroContent,
  HeroContentH1,
  HeroContentP,
  HeroContentBtn,
} from "./HeroStyle";
import Video from "../../video/zapatillas.mp4";
import { UserContext } from "../Context/UserContext";

const Hero = () => {
  const { cartIsOpen } = useContext(UserContext);

  return (
    <HeroContainer id="hero" cartIsOpen={cartIsOpen}>
      <HeroBackground>
        <HeroBackgroundVideo autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBackground>
      <HeroContent>
        <HeroContentH1>Nike Store</HeroContentH1>
        <HeroContentP>Get the latest shoes</HeroContentP>
        <HeroContentBtn>
          <button>Login</button>
        </HeroContentBtn>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
