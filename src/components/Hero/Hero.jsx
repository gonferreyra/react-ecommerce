import React from "react";
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

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <HeroBackgroundVideo autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBackground>
      <HeroContent>
        <HeroContentH1>Shoes Store</HeroContentH1>
        <HeroContentP>Get the latest sneakers</HeroContentP>
        <HeroContentBtn>
          <button>Login</button>
        </HeroContentBtn>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
