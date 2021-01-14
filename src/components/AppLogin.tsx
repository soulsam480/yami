import React, { useState } from 'react';
import styled from 'styled-components';
import { User } from '../models/models';
import { Centered, Heading } from '../styled-components/Heading';
import AppModal from './AppModal';
import { useUser } from '../store';
interface Props {}

const Login = styled.div`
  padding: 25px 0 20px 0;
`;
const Signup = styled.div`
  padding: 25px 0 20px 0;
`;

const AppLogin: React.FC<Props> = () => {
  const [isLogin, setLogin] = useState(true);
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
    username: '',
    name: '',
  });
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };

  const { login } = useUser();

  return (
    <div>
      <AppModal>
        {isLogin ? (
          <Login>
            <Heading size={'22px'} isCenter={true}>
              <b>{`</yami/>`}</b>
            </Heading>
            <br />
            <div className='form-group'>
              <input
                name='email'
                type='text'
                className='input'
                value={user.email}
                placeholder='Email'
                onChange={handleInput}
              />
            </div>
            <div className='form-group'>
              <input
                name='password'
                type='text'
                className='input'
                value={user.password}
                placeholder='Password'
                onChange={handleInput}
              />
            </div>
            <button className='btn block' onClick={() => login(user)}>
              Login
            </button>
            <br />
            <br />
            <Centered
              className='muted'
              size={'10px'}
              onClick={() => setLogin(false)}
            >
              Create an account ?
            </Centered>
          </Login>
        ) : (
          <Signup>
            <Heading size={'22px'} isCenter={true}>
              <b>{`</yami/>`}</b>
            </Heading>
            <br />
            <div className='form-group'>
              <input
                name='name'
                type='text'
                value={user.name}
                className='input'
                placeholder='Your name'
                onChange={handleInput}
                required
              />
            </div>
            <div className='form-group'>
              <input
                name='username'
                type='text'
                value={user.username}
                className='input'
                placeholder='Username'
                onChange={handleInput}
              />
            </div>
            <div className='form-group'>
              <input
                name='email'
                type='text'
                value={user.email}
                className='input'
                placeholder='Email'
                onChange={handleInput}
              />
            </div>
            <div className='form-group'>
              <input
                name='password'
                type='text'
                value={user.password}
                className='input'
                placeholder='Password'
                onChange={handleInput}
              />
            </div>
            <button className='btn block'>Sign Up</button>
            <br />
            <br />
            <Centered
              className='muted'
              size={'10px'}
              onClick={() => setLogin(true)}
            >
              Continue to Login
            </Centered>
          </Signup>
        )}
      </AppModal>
    </div>
  );
};

export default AppLogin;
