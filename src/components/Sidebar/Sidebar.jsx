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
          <SidebarLink>Home</SidebarLink>
          <SidebarLink>Sneakers</SidebarLink>
          <SidebarLink>Services</SidebarLink>
          <SidebarLink>Login</SidebarLink>
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
