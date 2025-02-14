import React from "react";
import { Outlet } from "react-router-dom";
import "./NavbarStyles.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      Navbar
      <Outlet />
    </div>
  );
};

export default Navbar;
