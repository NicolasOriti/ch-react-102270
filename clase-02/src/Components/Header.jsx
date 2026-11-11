import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";

const Header = ({
  title = "Prop por defecto",
  subtitle = "Sub por defecto",
}) => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo coder" width={150} />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Header;
