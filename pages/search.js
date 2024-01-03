import ProductList from "@/components/ProductList.js";
import SearchForm from "@/components/SearchForm.js";
import axios from "@/lib/axios.js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Search() {
  const [products, setProducts] = useState([]);

  const router = useRouter();
  const { q } = router.query; // {q: "청바지"}

  async function getProducts(query) {
    const res = await axios.get(`/products/?q=${query}`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts(q);
  }, [q]);

  return (
    <>
      <h1>Search 페이지</h1>
      <SearchForm initialValue={q} />
      <h1>검색결과: {q} </h1>
      <ProductList products={products} />
    </>
  );
}
