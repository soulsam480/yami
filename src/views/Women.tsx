import React, { useEffect, useState } from "react";
import AppGird from "../components/AppGird";
import axios from "axios";
import { ProductModel } from "../models/models";

interface Props {}

const Women: React.FC<Props> = () => {
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
      <AppGird
        prodData={products.filter((el) => el.category === "women clothing")}
      ></AppGird>
      <p>This is Women</p>
    </div>
  );
};

export default Women;
