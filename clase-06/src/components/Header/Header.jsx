import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/nasa-logo.webp";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="nasa-logo" width={100} />
      <h1>APOD: Astronomy Picture of the Day</h1>
    </div>
  );
};

export default Header;
