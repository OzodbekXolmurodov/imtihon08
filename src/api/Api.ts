import axios from "axios";

const BASE_URL = "https://6787c5edc4a42c9161082f90.mockapi.io/prodacts";

export interface Product {
  id: string;
  name: string;
  price: number;
  urls: string[];
  star: number;
  desprice: number;
  desc: string;
  size: string[];
}

export interface Comment {
  id: string;
  productId: string;
  author: string;
  text: string;
  createdAt: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const fetchComments = async (productId: string): Promise<Comment[]> => {
  const response = await axios.get(`${BASE_URL}/${productId}/coments`);
  return response.data;
};
