import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AppSlider from '../components/AppSlider';
import { ProductModel } from '../models/models';
import { useUser } from '../store';
import { colors } from '../styles/variables';

interface Props {}

const Product: React.FC<Props> = () => {
  const [product, setProduct] = useState<ProductModel>();
  const [quantity, setQuantity] = useState<number>(1);
  const [color, setColor] = useState<string>();
  const [size, setSize] = useState<string>('small');
  const { isLoggedIn } = useUser();
  const { id }: { id: string } = useParams();
  useEffect(() => {
    let ac = false;
    Axios({
      method: 'get',
      url: `http://localhost:4000/product/${id}`,
    }).then((res) => {
      if (!ac) {
        setProduct(res.data);
      }
    });
    return () => {
      ac = true;
    };
  }, [id]);
  return (
    <ProductPage className='container c-lg'>
      <div className='row'>
        <div className='col-sm-12 col-xs-12 col-md-6 col-lg-6'>
          <AppSlider images={product?.images} showThumbnail></AppSlider>
        </div>
        <div className='col-sm-12 col-xs-12 col-md-6 col-lg-6'>
          <div className='product-specs'>
            <h2>{product?.name} </h2>
            <p className='muted'>{product?.shortDesc}</p>
            <h1>₹ {product?.price} </h1>
            <p className='muted'> {product?.notes} </p>
            <br />
            <h4>
              <b>Sizes</b> <small className='muted'>{size} </small>
            </h4>
            <div className='sizes'>
              {product?.sizes.map((siz) => {
                return (
                  <SizeContainer
                    key={siz}
                    className={siz === size ? 'act' : ''}
                    onClick={() => setSize(siz)}
                  >
                    {' '}
                    {siz === 'small'
                      ? 'SM'
                      : siz === 'medium'
                      ? 'M'
                      : siz === 'large'
                      ? 'L'
                      : siz === 'xlarge'
                      ? 'XL'
                      : siz === 'xxlarge'
                      ? 'XXL'
                      : siz === 'xxxlarge'
                      ? 'XXXL'
                      : 'FS'}{' '}
                  </SizeContainer>
                );
              })}
            </div>
            <h4>
              <b>Colors</b> <small className='muted'>{color} </small>
            </h4>
            <div className='sizes'>
              {product?.colors.map((col) => {
                return (
                  <ColorContainer
                    key={col}
                    color={col}
                    className={col === color ? 'border act' : ''}
                    onClick={() => setColor(col)}
                  ></ColorContainer>
                );
              })}
            </div>
            <br />
            <QuantityContainer>
              <button
                className='quantity_btn btn'
                onClick={() => quantity !== 1 && setQuantity(quantity - 1)}
              >
                -
              </button>
              <input
                type='number'
                name=''
                id=''
                className='quantity_input input'
                disabled
                min='1'
                value={quantity}
              />

              <button
                className='quantity_btn btn'
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </QuantityContainer>
            <button className='btn block a2c' disabled={!isLoggedIn || !color}>
              {!isLoggedIn
                ? 'Please Login/Signup to continue'
                : !color
                ? 'Please Select a color to continue'
                : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    </ProductPage>
  );
};

export default Product;

const ProductPage = styled.div`
  padding-bottom: 50px;
  .img {
    vertical-align: middle;
    width: 100%;
    max-width: 100%;
    border-radius: 4px;
    margin: 0 0 5px 0;
  }
  .product-specs {
    @media (max-width: 768px) {
      padding-top: 20px;
    }
  }
  .sizes {
    display: flex;
    flex-direction: row;
    align-content: space-between;
    margin-bottom: 10px;
  }
  .a2c {
    padding: 13px 20px;
    font-size: 20px;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  .quantity_btn {
    background: ${colors.pr};
    font-size: 20px;
    font-weight: 700;
    padding: 13px 20px;
  }
  .quantity_input {
    padding: 13px 20px;
    width: 100%;
    text-align: center !important;
    background-color: ${colors.prl};
    font-weight: bolder;
    &:hover {
      box-shadow: none;
    }
  }
`;

const SizeContainer = styled.div`
  background-color: ${colors.prl};
  border: 1px solid #000 !important;
  margin: 5px;
  cursor: pointer;
  border-radius: 2px;
  height: 32px;
  width: 32px;
  text-align: center;
  line-height: 32px;
  font-weight: 700;
  font-size: 12px;
  &.act {
    box-shadow: 0 0 3px 2px #afe6d0;
    &:before {
      text-align: center;
      display: block;
      position: absolute;
      content: '';
      padding: 0.7px 10px;
      margin-left: 5px;
      margin-top: 37px;
      background-color: #000;
    }
  }
`;

const ColorContainer = styled.div`
  cursor: pointer;
  margin: 5px;
  padding: 16px;
  background-color: ${(props) => props.color};
  border-radius: 2px;
  border: 0.5px solid #0c0c0c;
  &.border {
    box-shadow: 0 0 3px 2px #afe6d0;
    &:before {
      text-align: center;
      display: block;
      position: absolute;
      content: '';
      padding: 0.7px 10px;
      margin-left: -9px;
      margin-top: 24px;
      background-color: #000;
    }
  }
`;
