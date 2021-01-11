import React from 'react';
import styled from 'styled-components';
import AppModal from './AppModal';

interface Props {}

const Heading = styled.p`
  font-size: 22px;
  text-align: center;
`;

const Login = styled.div`
  padding: 30px 0;
`;

const AppLogin: React.FC<Props> = () => {
  return (
    <div>
      <AppModal>
        <Login>
          <Heading>
            <b>{`</yami/>`}</b>
          </Heading>
          <div className='form-group'>
            <input type='text' className='input' placeholder='Email' />
          </div>
          <div className='form-group'>
            <input type='text' className='input' placeholder='Password' />
          </div>
          <button className='btn block'>Login</button>
        </Login>
      </AppModal>
    </div>
  );
};

export default AppLogin;
