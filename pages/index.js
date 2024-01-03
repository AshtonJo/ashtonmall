import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm.js";
import styles from "@/styles/Home.module.css";
import axios from "@/lib/axios.js";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await axios.get("/products");
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <h1>AshtonMall</h1>
      <SearchForm />
      <ProductList products={products} />
    </>
  );
}
