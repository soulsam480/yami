import React from 'react';
import styled from 'styled-components';

interface Props {
  col: string;
}

const card = styled.div`
  .top {
    img {
    }
  }
`;

const AppProductCard: React.FC<Props> = ({ col }) => {
  return (
    <div className={col}>
      <div className='top'>
        <img src='https://via.placeholder.com/150' alt='' />
      </div>
      <div className='bottom'>
        <p>text</p>
      </div>
    </div>
  );
};

export default AppProductCard;
