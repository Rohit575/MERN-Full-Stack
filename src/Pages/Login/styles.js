import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";

export const styles = {
  outerContainer: styled("div")`
    width: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 70px);

    @media (0 < width < 768px) {
      flex-direction: column;
      gap: 20px;
    }
  `,
  cardWrapper: styled(Card)`
    max-height: 500px;
    width: 300px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  `,
  cardContent: styled(CardContent)`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  leftContainer: styled("div")`
    width: 50%;

    @media (0 < width < 768px) {
      width: 100%;
    }
  `,
  rightContainer: styled("div")`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (0 < width < 768px) {
      width: 100%;
    }
  `,
  bannerImage: styled("img")`
    width: 100%;
  `,
  inputField: styled(TextField)`
    width: 100%;
  `,
  formWrapper: styled(FormControl)`
    margin: 0px;
    width: 100%;
  `,
  inputBox: styled(InputLabel)``,
  outlineInput: styled(OutlinedInput)``,
  inputAdornment: styled(InputAdornment)``,
  iconContainer: styled(IconButton)``,
  submitButton: styled(Button)`
    width: 100%;
  `,
  title: styled(Typography)`
    text-align: center;
    font-size: 24px;
  `,
};
