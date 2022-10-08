import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  ButtonBanner,
} from "./NewReleaseSectionStyle";
import Img2 from "../../images/jordan.png";

const NewReleaseSection = () => {
  return (
    <InfoContainer>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>New Release</TopLine>
              <Heading>JORDAN XXV</Heading>
              <Subtitle>
                Get the latest Jordan shoes, available from today on out shop.
                Log in and start buying.
              </Subtitle>
              <BtnWrap>
                <ButtonBanner>Buy now</ButtonBanner>
                {/* <Button
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  // offset={-80}
                >
                  button label
                </Button> */}
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={Img2} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default NewReleaseSection;