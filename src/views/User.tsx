import React from 'react';
import { useUser } from '../store';

interface Props {}

const User: React.FC<Props> = () => {
  const { userData } = useUser();
  return (
    <div>
      <p> {userData.user?.name} </p>
    </div>
  );
};

export default User;
