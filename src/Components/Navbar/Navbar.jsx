import React from "react";
import { Outlet } from "react-router-dom";
import "./NavbarStyles.css";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";
import { styles } from "./styles";

const Navbar = () => {
  return (
    <styles.NavWrapper>
      <styles.DesktopNavWrapper>
        <DesktopNav />
      </styles.DesktopNavWrapper>
      <styles.MobileNavWrapper>
        <MobileNav />
      </styles.MobileNavWrapper>
      <Outlet />
    </styles.NavWrapper>
  );
};

export default Navbar;
