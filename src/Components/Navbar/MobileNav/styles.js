import styled from "@emotion/styled";

export const styles = {
  outerContainer: styled("div")`
    position: relative;
    background-color: #182c61;
    min-height: 70px;
    border: 1px solid black;
  `,
  iconWrapper: styled("div")`
    position: absolute;
    right: 5px;
    top: 20px;
  `,
  slider: styled("div")`
    border: 1px solid blue;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    right: ${({ $open }) => ($open ? "0" : "-450px")};
    transition: right 0.3s ease; /* Slide in transition */
    z-index: 999;
    /* display: ${({ $open }) => ($open ? "flex" : "none")}; */
  `,
  MenuIcon: styled("div")`
    /* background-color: yellow; */
    color: white;
    font-size: 20px;
    margin-right: 30px;
  `,
  anchorTag: styled("a")`
    background-color: #ffda79;
    display: block;
    width: 125px;
    text-align: center;
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
  closeIcon: styled("div")`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
  `,
  textTag: styled("div")`
    font-size: 20px;
    color: white;
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    align-items: center;
    width: 100%;
    height: 100%;
  `,
};
