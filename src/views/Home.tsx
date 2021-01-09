import React, { useEffect, useState } from 'react';
import { ProductModel } from '../models/models';
import axios from 'axios';
import AppProductCard from '../components/AppProductCard';

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
  });
  return (
    <div>
      <div className='row'>
        {products.map((el) => {
          return (
            <AppProductCard col={'col-md-3 col-xs-12 col-lg-3'}>
              {/* <p key={el.id}>{el.id} </p>; */}
            </AppProductCard>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
