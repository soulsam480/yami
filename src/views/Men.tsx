import React, { useEffect, useState } from 'react';
import AppGrid from '../components/AppGrid';
import axios from 'axios';
import { ProductModel } from '../models/models';

interface Props {}

const Men: React.FC<Props> = () => {
  const [products, setProducts] = useState<Array<ProductModel>>([]);
  useEffect(() => {
    axios({
      url: 'https://fakestoreapi.com/products',
      method: 'get',
    }).then((res) => {
      setProducts(res.data);
    });
  });
  return (
    <div>
      {/* <AppGrid
        prodData={products.filter((el) => el.category === 'men clothing')}
      ></AppGrid> */}
    </div>
  );
};

export default Men;
