import React, { useState } from 'react';
import styled from 'styled-components';
import { Centered, Heading } from '../styled-components/Heading';
import AppModal from './AppModal';

interface Props {}

const Login = styled.div`
  padding: 30px 0 20px 0;
`;

const AppLogin: React.FC<Props> = () => {
  const [isLogin, setLogin] = useState(false);

  return (
    <div>
      <AppModal>
        <Login>
          <Heading size={'22px'}>
            <b>{`</yami/>`}</b>
          </Heading>
          <div className='form-group'>
            <input type='text' className='input' placeholder='Email' />
          </div>
          <div className='form-group'>
            <input type='text' className='input' placeholder='Password' />
          </div>
          <button className='btn block'>Login</button>
          <br />
          <br />
          <Centered
            className='muted'
            size={'10px'}
            onClick={() => setLogin(!isLogin)}
          >
            Create an account ?
          </Centered>
        </Login>
      </AppModal>
    </div>
  );
};

export default AppLogin;
