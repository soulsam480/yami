import React, { useEffect, useState } from 'react';
import { ProductModel } from '../models/models';
import axios from 'axios';
import AppGrid from '../components/AppGrid';
import AppLogin from '../components/AppLogin';

interface Props {}

const Home: React.FC<Props> = () => {
  const [products, setProducts] = useState<Array<ProductModel>>([]);
  useEffect(() => {
    axios({
      url: 'http://localhost:4000/product',
      method: 'get',
    }).then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div>
      <div className='container c-lg'>
        <AppLogin></AppLogin>
        <AppGrid prodData={products.slice(0, 4)}></AppGrid>
      </div>
    </div>
  );
};

export default Home;
