import React from 'react';
import styled from 'styled-components';
import { ProductModel } from '../models/models';

interface Props {
  col: string;
  product: ProductModel;
}

const Card = styled.div`
  .top {
    img {
      vertical-align: middle;
      width: 100%;
      max-width: 100%;
      border-radius: 2px;
      padding: 0 0 5px 0;
    }
  }
  .bottom {
    .name {
      font-size: 18px;
      margin-bottom: 0;
    }

    .colors {
      padding-top: 3px;
      display: flex;
      flex-direction: row;
    }
  }
`;

const ColorBox = styled.div`
  margin: 0 2px;
  padding: 7px;
  background-color: ${(props) => props.color};
  border-radius: 2px;
  border: 0.5px solid black;
`;

const AppProductCard: React.FC<Props> = ({ col, product }) => {
  return (
    <Card className={col}>
      <div className='top'>
        <img src='https://via.placeholder.com/300' alt={product.name} />
      </div>
      <div className='bottom'>
        <p className='name'>{product.name}</p>
        <p className='name'> ₹{product.price} </p>
        <small>Colors</small>
        <div className='colors'>
          {product.colors.map((el) => {
            return <ColorBox key={el} color={el}></ColorBox>;
          })}
        </div>
      </div>
    </Card>
  );
};

export default AppProductCard;
