import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles/variables';
//todo imports on top
interface Props {}
const Nav = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  padding: 10px 0;
  background-color: ${colors.pr};
  z-index: 999;
  box-shadow: 0 1px 6px 0.5px rgba(145, 145, 145, 0.301);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  a {
    display: inline-block;
    padding: 0 5px;
    color: #000 !important;
    text-decoration: none;
    &:last-child {
      padding-right: 15px;
    }
  }
  .brand {
    padding: 0 15px;
    font-weight: bold;
    font-size: 20px;
  }
  .left {
  }
  .right {
  }
`;

const AppNavbar: React.FC<Props> = () => {
  return (
    <Nav>
      <div className='left'>
        <NavLink to='/' className='brand'>
          {`</yami/>`}
        </NavLink>
        <NavLink to='/category/men'>Men</NavLink>
        <NavLink to='/category/women'>Women</NavLink>
      </div>
      <div className='right'>
        <NavLink to='/category/men'>My Account</NavLink>
      </div>
    </Nav>
  );
};

export default AppNavbar;
