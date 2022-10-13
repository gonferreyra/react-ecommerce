import React, { useContext, useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  ToggleIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavCartBtn,
  CartItems,
  NavCartMobile,
  NavCartMobileBtn,
  NavCartMobileBtnImg,
  CartItemsMobile,
} from "./NavbarStyle";
import { HiMenu } from "react-icons/hi";
import cartImg from "../../images/carrito.png";
import { animateScroll as scroll } from "react-scroll";
import { UserContext } from "../Context/UserContext";
import { useSelector } from "react-redux";

const Navbar = ({ toggle }) => {
  // Scroll to top function, react-scroll
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const { toggleCart } = useContext(UserContext);

  // connect state from store to component
  const cartState = useSelector((state) => state.shop.cart);
  // console.log(cartState);

  // number above cart
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    // count all the items including the quantity of each product
    cartState.forEach((item) => {
      count += item.quantity;
    });

    setCartCount(count);
  }, [cartState, cartCount]);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Store
          </NavLogo>
          <NavCartMobile>
            <NavCartMobileBtn>
              <NavCartMobileBtnImg src={cartImg} onClick={toggleCart} />
              <CartItemsMobile cartCount={cartCount}>
                {cartCount}
              </CartItemsMobile>
            </NavCartMobileBtn>
          </NavCartMobile>
          <ToggleIcon>
            <HiMenu onClick={toggle} />
          </ToggleIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                // activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                // activeClass="active"
                to="sneakerSection"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Sneakers
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="service"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="footer"
                spy={true}
                smooth={true}
                // aumentamos el offset ya que no tiene height suficiente para los -80px
                offset={-230}
                duration={500}
              >
                About
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            {/* <NavBtnLink>Sign In</NavBtnLink> */}
            <NavBtnLink>
              <NavCartBtn src={cartImg} />
              <CartItems>3</CartItems>
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
