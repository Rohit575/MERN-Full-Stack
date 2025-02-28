import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
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
  `,
  cardWrapper: styled(Card)`
    height: 500px;
    width: 300px;
  `,
  cardContent: styled(CardContent)``,
  leftContainer: styled("div")`
    width: 50%;
    border: 1px solid green;
  `,
  rightContainer: styled("div")`
    width: 50%;
    border: 1px solid red;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  bannerImage: styled("img")`
    width: 100%;
  `,
  inputField: styled(TextField)``,
  formWrapper: styled(FormControl)``,
  inputBox: styled(InputLabel)``,
  outlineInput: styled(OutlinedInput)``,
  inputAdornment: styled(InputAdornment)``,
  iconContainer: styled(IconButton)``,
  submitButton: styled(Button)`
    width: 100%;
  `,
};
