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
              <NavLinks>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Sneakers</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Login</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>About</NavLinks>
            </NavItem>
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
