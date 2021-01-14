export interface ProductModel {
  id: string;
  name: string;
  price: number;
  description: string;
  shortDesc: string;
  status: string;
  notes: string;
  images: string[];
  colors: string[];
  sizes: string[];
  categories: string[];
  tags: string[];
}
export interface User {
  id?: string;
  username?: string;
  password?: string;
  email?: string;
  name?: string;
  imgUrl?: string;
  orders?: string[];
  createdAt?: string;
}
export interface ProductInCart {
  id: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
}

export interface Order {
  id: string;
  amount: number;
  pay_mode: string;
  status: string;
  stamp: Date;
  createdAt: Date;
  cart: ProductInCart[];
  address: string;
}
