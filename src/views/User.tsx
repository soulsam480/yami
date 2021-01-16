import React from 'react';
import styled from 'styled-components';
import { useUser } from '../store';
import { Heading } from '../styled-components/Heading';

interface Props {}

const UserImage = styled.img`
  max-width: 100%;
  border-radius: 1000px;
  @media (min-wdth: 768px) {
    width: 100px;
    display: block;
    text-align: center;
  }
`;

const User: React.FC<Props> = () => {
  const { userData, logout } = useUser();
  return (
    <div className='container c-lg'>
      <div className='row center-xs'>
        <div className='col-md-5 col-sm-7 col-xs-12'>
          <div className='row  middle-xs'>
            <div className='col-xs-4'>
              <UserImage
                src={`https://picsum.photos/seed/${userData.user?.id}/200`}
                alt={userData.user?.name}
              />
            </div>
            <div className='col-xs-8'>
              <Heading style={{ marginBottom: '4px' }} size='20px'>
                {' '}
                {userData.user?.name}{' '}
              </Heading>
              <p> {userData.user?.email} </p>
              <button className='btn sm' onClick={() => logout()}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
