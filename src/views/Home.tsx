import React, { useEffect, useState } from "react";
import { ProductModel } from "../models/models";
import axios from "axios";

interface Props {}

const Home: React.FC<Props> = () => {
  const [products, setProducts] = useState<Array<ProductModel>>([]);
  useEffect(() => {
    axios({
      url: "https://fakestoreapi.com/products",
      method: "get",
    }).then((res) => {
      setProducts(res.data);
    });
  });
  return (
    <div>
      {products.map((el) => {
        return <p key={el.id}>{el.id} </p>;
      })}
    </div>
  );
};

export default Home;
