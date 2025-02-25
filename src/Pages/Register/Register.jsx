// import React from "react";
// import { styles } from "./styles";
// const Register = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const payload = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       password: e.target.password.value,
//       confirmPassword: e.target.confirmPassword.value,
//     };
//     console.log("submitting form", payload);
//   };
//   return (
//     <styles.outerContiner>
//       <styles.Left>
//         <styles.formContainer onSubmit={(e) => handleSubmit(e)}>
//           <styles.Title>Register</styles.Title>
//           <styles.Description>
//             Do you have an account? <u>Login</u>
//           </styles.Description>
//           <styles.inputWrapper>
//             <styles.labelContainer htmlFor="username">
//               Name:
//             </styles.labelContainer>
//             <styles.inputBox type="text" id="username" name="name" required />
//           </styles.inputWrapper>
//           <styles.inputWrapper>
//             <styles.labelContainer htmlFor="email">
//               Email:
//             </styles.labelContainer>
//             <styles.inputBox type="email" id="email" name="email" required />
//           </styles.inputWrapper>
//           <styles.inputWrapper>
//             <styles.labelContainer htmlFor="password">
//               Password:
//             </styles.labelContainer>
//             <styles.inputBox
//               id="password"
//               name="password"
//               required
//               type="password"
//             />
//           </styles.inputWrapper>
//           <styles.inputWrapper>
//             <styles.labelContainer htmlFor="confirm-password">
//               Confirm Password:
//             </styles.labelContainer>
//             <styles.inputBox
//               id="confirm-password"
//               name="confirmPassword"
//               required
//               type="password"
//             />
//           </styles.inputWrapper>
//           <styles.submitButton>Register</styles.submitButton>
//         </styles.formContainer>
//       </styles.Left>
//       <styles.Right>
//         <styles.LeftImage src="image/register.png" alt="logo" />
//       </styles.Right>
//     </styles.outerContiner>
//   );
// };

// export default Register;

import React, { useEffect } from "react";
import { styles } from "./styles";

const Register = () => {
  const [errorMsg, setErrorMsg] = React.useState();
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log("submitting form", formValue, formValue.name);

    if (formValue.name == "") {
      return setErrorMsg("Name is required");
    }
    if (formValue.email == "") {
      return setErrorMsg("Email is required");
    }
    if (formValue.password == "") {
      return setErrorMsg("Password is required");
    }
    if (formValue.confirmPassword == "") {
      return setErrorMsg("Password is required");
    } else {
      return setErrorMsg("");
    }
  };
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
            <styles.inputBox
              type="text"
              id="username"
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </styles.inputWrapper>
          <styles.inputWrapper>
            <styles.labelContainer htmlFor="email">
              Email:
            </styles.labelContainer>
            <styles.inputBox
              type="email"
              id="email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
          </styles.inputWrapper>
          <styles.inputWrapper>
            <styles.labelContainer htmlFor="password">
              Password:
            </styles.labelContainer>
            <styles.inputBox
              id="password"
              name="password"
              type="password"
              onChange={(e) => handleChange(e)}
            />
          </styles.inputWrapper>
          <styles.inputWrapper>
            <styles.labelContainer htmlFor="confirm-password">
              Confirm Password:
            </styles.labelContainer>
            <styles.inputBox
              id="confirm-password"
              name="confirmPassword"
              type="password"
              onChange={(e) => handleChange(e)}
            />
          </styles.inputWrapper>
          <p style={{ color: "red" }}>{errorMsg}</p>
          <styles.submitButton type="button" onClick={() => handleSubmit()}>
            Register
          </styles.submitButton>
        </styles.formContainer>
      </styles.Left>
      <styles.Right>
        <styles.LeftImage src="image/register.png" alt="logo" />
      </styles.Right>
    </styles.outerContiner>
  );
};

export default Register;
