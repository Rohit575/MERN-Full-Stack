import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { styles } from "./styles";

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <styles.outerContainer>
      <styles.textTag>Muknayak Graphics</styles.textTag>
      <styles.iconWrapper onClick={() => setOpen(true)}>
        <AiOutlineMenu size={25} color="White" />
      </styles.iconWrapper>
      <styles.slider $open={open}>
        <styles.closeIcon onClick={() => setOpen(false)}>X</styles.closeIcon>
        <styles.MenuIcon>
          <styles.anchorTag href="/">Home</styles.anchorTag>
        </styles.MenuIcon>
        <styles.MenuIcon>
          <styles.anchorTag href="/">Contact-Us</styles.anchorTag>
        </styles.MenuIcon>
      </styles.slider>
    </styles.outerContainer>
  );
};

export default MobileNav;
