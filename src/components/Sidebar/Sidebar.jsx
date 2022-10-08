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

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon values={{ color: "white" }} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="hero" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="sneakerSection" onClick={toggle}>
            Sneakers
          </SidebarLink>
          <SidebarLink to="service" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink>About</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
