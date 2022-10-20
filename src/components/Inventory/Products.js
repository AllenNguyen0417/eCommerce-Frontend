import api from "../api/InventoryAPI";
import { useState, useEffect } from "react";
import { ProductList } from "./ProductList";

export function Products() {
  // Get all products
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    await api.get("/products").then((response) => {
      setProducts(response.data);
    });
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return <ProductList products={products}></ProductList>;
}
