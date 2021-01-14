import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useUser } from '../store';
import { useModal } from '../store/LoginModal';
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
  const { userData } = useUser();
  const { setModal } = useModal();
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
        {userData.user?.name ? (
          <NavLink to='/user'> {userData.user?.name} </NavLink>
        ) : (
          <a onClick={() => setModal(true)}>Login/Register</a>
        )}
      </div>
    </Nav>
  );
};

export default AppNavbar;
