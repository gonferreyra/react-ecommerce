import React from "react";
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
} from "./NavbarStyle";
import { HiMenu } from "react-icons/hi";
import cart from "../../images/carrito.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>Store</NavLogo>
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
              <NavLinks>About</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks>Login</NavLinks>
            </NavItem> */}
          </NavMenu>

          <NavBtn>
            {/* <NavBtnLink>Sign In</NavBtnLink> */}
            <NavBtnLink>
              <NavCartBtn src={cart} />
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
