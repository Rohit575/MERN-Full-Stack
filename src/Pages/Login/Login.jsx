import React, { useEffect } from "react";
import { styles } from "./styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoginAPI } from "../../services/api.services";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [formData, setFromData] = React.useState({ email: "", password: "" });
  const [infoMsg, setInfoMsg] = React.useState({ color: "", msg: "" });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const submitLogin = async () => {
    console.log(formData);
    setLoading(true);

    if (formData.email == "") {
      return setInfoMsg({ color: "red", msg: "Email is required" });
    }
    if (formData.password == "") {
      return setInfoMsg({ color: "red", msg: "Password is required" });
    } else {
      setInfoMsg("");
    }
    const result = await LoginAPI(formData);
    if (result.statusCode === 200) {
      setInfoMsg({ msg: result.message, color: "green" });
    }
    setLoading(false);
  };

  return (
    <styles.outerContainer>
      <styles.leftContainer>
        <styles.bannerImage src="image/login.png" alt="logo" />
      </styles.leftContainer>
      <styles.rightContainer>
        <styles.cardWrapper>
          <styles.cardContent>
            <styles.title>Login</styles.title>
            <styles.inputField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={(e) =>
                setFromData({ ...formData, email: e.target.value })
              }
            />
            <styles.formWrapper sx={{ m: 1, width: "25ch" }} variant="outlined">
              <styles.inputBox htmlFor="outlined-adornment-password">
                Password
              </styles.inputBox>
              <styles.outlineInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) =>
                  setFromData({ ...formData, password: e.target.value })
                }
                endAdornment={
                  <styles.inputAdornment position="end">
                    <styles.iconContainer
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </styles.iconContainer>
                  </styles.inputAdornment>
                }
                label="Password"
              />
            </styles.formWrapper>
            <p style={{ color: infoMsg.color }}>{infoMsg.msg}</p>
            <styles.submitButton
              loading={loading}
              variant="contained"
              onClick={() => submitLogin()}
            >
              {loading ? "Loading..." : "Login"}
            </styles.submitButton>
          </styles.cardContent>
        </styles.cardWrapper>
      </styles.rightContainer>
    </styles.outerContainer>
  );
};

export default Login;
