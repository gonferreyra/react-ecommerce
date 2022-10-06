import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesStyle";
import Payments from "../../images/undraw_stripe_payments_re_chlm.svg";
import Free from "../../images/free.svg";
import Change from "../../images/change.svg";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Free} />
          <ServicesH2>Free Shipping</ServicesH2>
          <ServicesP>
            Ordering 2 or more items, you get free shipping world wide.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Payments} />
          <ServicesH2>Payments</ServicesH2>
          <ServicesP>
            We accept credit card and crypto payments on all our products.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Change} />
          <ServicesH2>Change</ServicesH2>
          <ServicesP>
            Refund within 72hs if your not happy with the product.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
