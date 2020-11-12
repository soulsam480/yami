import React from "react";
import styles from "../styles/AppNav.module.scss";
import { NavLink } from "react-router-dom";

//todo imports on top
interface Props {}

const AppNavbar: React.FC<Props> = () => {
  return (
    <div className={styles.nav}>
      <NavLink className={styles.brand} to="/">
        Home
      </NavLink>
      <NavLink to="/men-clothing">Men</NavLink>
      <NavLink to="/women-clothing">Women</NavLink>
    </div>
  );
};

export default AppNavbar;
