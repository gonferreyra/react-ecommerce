import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarStyle";

//FIX OFFSETS OF LINKS AND CHANGE IT TO ROUTER-HASH
//Replace reactscroll offset with a function and react-router-hash:
const scrollWithOffset = (el, offsety) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = offsety;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon values={{ color: "white" }} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="/#hero"
            onClick={toggle}
            scroll={(el) => scrollWithOffset(el, -80)}
          >
            Home
          </SidebarLink>
          <SidebarLink
            to="/#sneakerSection"
            onClick={toggle}
            scroll={(el) => scrollWithOffset(el, -80)}
          >
            Sneakers
          </SidebarLink>
          <SidebarLink
            to="/#service"
            onClick={toggle}
            scroll={(el) => scrollWithOffset(el, -80)}
          >
            Services
          </SidebarLink>
          <SidebarLink
            to="/#footer"
            onClick={toggle}
            scroll={(el) => scrollWithOffset(el, -40)}
          >
            About
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/login" onClick={toggle}>
            Sign In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
