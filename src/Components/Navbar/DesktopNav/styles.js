import styled from "@emotion/styled";

export const styles = {
  NavContainer: styled("div")`
    background-color: #182c61;
    border: 1px solid red;
    min-height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  logoContainer: styled("h1")`
    width: 100%;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  MenuIcon: styled("div")`
    /* background-color: yellow; */
    color: white;
    font-size: 20px;
    margin-right: 30px;
  `,
  anchorTag: styled("a")`
    background-color: #ffda79;
    padding: 10px;
    color: black;
    border-radius: 5px;
    font-size: 20px;

    &:hover {
      /* color: white; */
      background-color: #ccae62;
    }
  `,
};
