import React from "react";
import styles from "../styles/AppNav.module.scss";
import { NavLink } from "react-router-dom";

//todo imports on top
interface Props {}

const AppNavbar: React.FC<Props> = () => {
  return (
    <div className={styles.nav}>
      <NavLink to="/"> Home </NavLink>
    </div>
  );
};

export default AppNavbar;
