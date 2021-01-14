import React, { useEffect, useState } from 'react';
import { ProductModel } from '../models/models';
import axios from 'axios';
import AppGrid from '../components/AppGrid';
import AppLogin from '../components/AppLogin';
import { useModal } from '../store/LoginModal';

interface Props {}

const Home: React.FC<Props> = () => {
  const [products, setProducts] = useState<Array<ProductModel>>([]);
  const { isModal /* setModal */ } = useModal();

  // const ref = useRef<HTMLDivElement>(null);
  // const handleClickOutside = (event: any) => {
  //   if (ref.current && ref.current.contains(event.target)) {
  //     setModal(!isModal);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside, true);
  //   };
  // });

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
        {isModal ? <AppLogin></AppLogin> : ''}
        <AppGrid prodData={products.slice(0, 4)}></AppGrid>
      </div>
    </div>
  );
};

export default Home;
