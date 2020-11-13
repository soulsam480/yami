import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/variables";
//todo imports on top
interface Props {}
const Nav = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  padding: 20px 0;
  background-color: ${colors.bg};
  z-index: 999;
  box-shadow: 0 1px 6px 0.5px rgba(145, 145, 145, 0.301);
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  a {
    display: inline-block;
    padding: 0 5px;
    color: #000 !important;
    text-decoration: none;
  }
  .brand {
    padding: 0 15px;
  }
`;

const AppNavbar: React.FC<Props> = () => {
  return (
    <Nav>
      <NavLink to="/" className="brand">
        Home
      </NavLink>
      <NavLink to="/men-clothing">Men</NavLink>
      <NavLink to="/women-clothing">Women</NavLink>
    </Nav>
  );
};

export default AppNavbar;
