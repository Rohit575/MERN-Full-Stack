import React from "react";
import { styles } from "./styles";

const DesktopNav = () => {
  return (
    <styles.NavContainer>
      <styles.logoContainer>Welcome to Muknayak Graphics</styles.logoContainer>
      <styles.MenuIcon>
        <styles.anchorTag href="/">Home</styles.anchorTag>
      </styles.MenuIcon>
    </styles.NavContainer>
  );
};

export default DesktopNav;
