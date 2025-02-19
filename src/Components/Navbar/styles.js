import styled from "@emotion/styled";

export const styles = {
  NavWrapper: styled("div")``,
  DesktopNavWrapper: styled("div")`
    @media (0 < width < 768px) {
      display: none;
    }
  `,
  MobileNavWrapper: styled("div")`
    display: none;

    @media (0 < width < 768px) {
      display: block;
    }
  `,
};
