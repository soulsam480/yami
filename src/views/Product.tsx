import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductModel } from '../models/models';

interface Props {}

const Product: React.FC<Props> = () => {
  const [product, setProduct] = useState<ProductModel>();
  const { id } = useParams();
  useEffect(() => {
    Axios({
      method: 'get',
      url: `https://fakestoreapi.com/products/${id}`,
    }).then((res) => {
      setProduct(res.data);
    });
  }); 
  return (
    <div>
      <p>{product?.title}</p>
    </div>
  );
};

export default Product;
