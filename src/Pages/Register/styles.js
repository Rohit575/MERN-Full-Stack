import styled from "@emotion/styled";

export const styles = {
  outerContiner: styled("div")`
    width: 100%;
    /* height: 100vh; */
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;

    @media (0< width < 768px) {
      flex-direction: column-reverse;
      gap: 20px;
    }
  `,
  Left: styled("div")`
    width: 50%;
    height: 100%;
    /* border: 1px solid blue; */
    display: flex;
    justify-content: center;
    align-items: center;

    @media (0< width < 768px) {
      width: 100%;
      height: auto;
    }
  `,
  Right: styled("div")`
    width: 50%;
    /* height: 100%; */
    /* border: 1px solid green; */

    @media (0< width < 768px) {
      width: 100%;
      height: auto;
    }
  `,
  LeftImage: styled("img")`
    width: 100%;
  `,
  formContainer: styled("div")`
    border: 1px solid black;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 300px;
    max-height: 400px;
    margin: 0 auto;
    gap: 20px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  `,
  labelContainer: styled("label")``,
  inputBox: styled("input")`
    padding: 5px;
    border-radius: 5px;
  `,
  inputWrapper: styled("div")`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Title: styled("p")`
    font-size: 20px;
    font-weight: bold;
  `,
  Description: styled("p")`
    font-size: 14px;
    color: gray;
  `,
  submitButton: styled("button")`
    width: 100%;
    height: 40px;
    background-color: blue;
    color: white;
    font-weight: bold;
    border-radius: 5px;
  `,
};
