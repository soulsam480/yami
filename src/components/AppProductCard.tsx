import React from 'react';
import { Link } from 'react-router-dom';
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
      border-radius: 4px;
      margin: 0 0 5px 0;
    }
  }
  .bottom {
    .name {
      font-size: 18px;
      margin-bottom: 0;
      padding-bottom: 5px;
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
  padding: 5px;
  background-color: ${(props) => props.color};
  border-radius: 2px;
  border: 0.5px solid #5e5e5e;
`;

const AppProductCard: React.FC<Props> = ({ col, product }) => {
  return (
    <Card className={col}>
      <Link to={`/p/${product.id}`}>
        <div className='top'>
          <img
            src={`https://picsum.photos/seed/${product.id}/200`}
            alt={product.name}
          />
        </div>
        <div className='bottom'>
          <p className='name'>{product.name}</p>
          <p className='name'> ₹{product.price} </p>
          {product.colors.length > 0 ? (
            <div className='colors'>
              {product.colors.map((el) => {
                return <ColorBox key={el} color={el}></ColorBox>;
              })}
            </div>
          ) : (
            <span>none</span>
          )}
        </div>
      </Link>
    </Card>
  );
};

export default AppProductCard;
