import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductModel } from '../models/models';
import { useParams } from 'react-router-dom';
import AppGrid from '../components/AppGrid';

interface Props {}

const Women: React.FC<Props> = () => {
  const { cat }: { cat: string } = useParams();
  const [products, setProducts] = useState<Array<ProductModel>>([]);
  useEffect(() => {
    axios({
      url: `http://localhost:4000/product/cat/${cat}`,
      method: 'get',
    }).then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div className='container c-lg'>
      <AppGrid prodData={products}></AppGrid>
    </div>
  );
};

export default Women;
