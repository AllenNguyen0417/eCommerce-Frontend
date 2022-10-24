import { Carousels } from "./Carousels";
import api from "../api/InventoryAPI";
import { useState, useEffect } from "react";
import { MainContent } from "./MainContent";


export function Home() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    await api.get("/products").then((response) => {
      setProducts(response.data);
    });
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <Carousels />
      <MainContent products={products} />
    </div>
  );
}
