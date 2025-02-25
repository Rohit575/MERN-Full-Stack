import React from "react";
// import styles from "./Home.module.css";
import { styles } from "./styles";

const Home = () => {
  return (
    <styles.homeContainer>
      <a href="/">Home</a>
      <br />
      <a href="/register">Register</a>
      <br />
      <a href="/login">Login</a>
    </styles.homeContainer>
  );
};

export default Home;
