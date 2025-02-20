import styled from "@emotion/styled";

export const styles = {
  NavContainer: styled("div")`
    background-color: #182c61;
    min-height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  logoContainer: styled("h1")`
    width: 80%;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (768px < width <= 1024px) {
      width: 70%;
    }
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
    text-decoration: none;

    &:hover {
      /* color: white; */
      background-color: #ccae62;
    }
  `,
};
