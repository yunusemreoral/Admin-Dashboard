import { StaticImageData } from "next/image";
import React from "react";

type NavItem = {
    icon: React.ReactNode;
    name: string;
    url?: string;
};

type CardItem = {
    icon: StaticImageData;
    label: string;
    value: number | string;
};

type ChartData = {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor?: string | string[];
        borderColor?: string | string[];
    }[];
};

type Order = {
  order_id: number;
  user_id: number;
  order_date: string;
  status: string;
  total_price: 1299.99;
  shipping_address: {
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  items: {
    product_id: number;
    name: string;
    quantity: number;
    price: number;
  }[];
  id: string;
};

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  image_url: string;
  rating: number;
  reviews_count: number;
  brand: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  address: {
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  phone: string;
  orders:
  {
    order_id: number;
    product_id: number;
    quantity: number;
    total_price: number;
    order_data: string;
  }[];
};

type GetOrdersResponse = Promise<Order[]>;
type GetProductsResponse = Promise<Product[]>;
type GetUsersResponse = Promise<User[]>;
type GetProductResponse = Promise<Product>;
type GetUserResponse = Promise<User>;

export type {NavItem,CardItem,ChartData,Order,GetOrdersResponse,Product,GetProductsResponse,GetUsersResponse,GetProductResponse,GetUserResponse};