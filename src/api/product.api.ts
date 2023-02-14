import { ProductType } from "../types/Product.type";
import { instance } from "./config.api";

export const getProducts = () => instance.get<ProductType[]>("/products");

export const getProduct = (id: string) =>
  instance.get<ProductType>(`/products/${id}`);

export const addProduct = (body: Omit<ProductType, "id">) =>
  instance.post<ProductType>("/products", body);

export const updateProduct = (body: ProductType) =>
  instance.put<ProductType>(`/products/${body.id}`, body);

export const deleteProduct = (id: string) => instance.delete(`/products/${id}`);
