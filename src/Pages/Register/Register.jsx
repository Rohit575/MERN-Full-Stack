import React from "react";
import { styles } from "./styles";
const Register = () => {
  return (
    <styles.outerContiner>
      <styles.Left>
        <styles.formContainer>
          <styles.Title>Register</styles.Title>
          <styles.Description>
            Do you have an account? <u>Login</u>
          </styles.Description>
          <styles.inputWrapper>
            <styles.labelContainer htmlFor="username">
              Name:
            </styles.labelContainer>
            <styles.inputBox type="text" id="username" />
          </styles.inputWrapper>
          <styles.inputWrapper>
            <styles.labelContainer htmlFor="email">
              Email:
            </styles.labelContainer>
            <styles.inputBox type="text" id="email" />
          </styles.inputWrapper>
          <styles.inputWrapper>
            <styles.labelContainer htmlFor="password">
              Password:
            </styles.labelContainer>
            <styles.inputBox type="text" id="password" />
          </styles.inputWrapper>
          <styles.inputWrapper>
            <styles.labelContainer htmlFor="confirm-password">
              Confirm Password:
            </styles.labelContainer>
            <styles.inputBox type="text" id="confirm-password" />
          </styles.inputWrapper>
          <styles.submitButton>Register</styles.submitButton>
        </styles.formContainer>
      </styles.Left>
      <styles.Right>
        <styles.LeftImage src="image/register.png" alt="logo" />
      </styles.Right>
    </styles.outerContiner>
  );
};

export default Register;
