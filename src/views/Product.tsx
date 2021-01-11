import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductModel } from '../models/models';

interface Props {}

const Product: React.FC<Props> = () => {
  const [product, setProduct] = useState<ProductModel>();
  const { id }: { id: string } = useParams();
  useEffect(() => {
    Axios({
      method: 'get',
      url: `http://localhost:4000/product/${id}`,
    }).then((res) => {
      setProduct(res.data);
    });
  });
  return (
    <div>
      <p>{product?.id}</p>
    </div>
  );
};

export default Product;
