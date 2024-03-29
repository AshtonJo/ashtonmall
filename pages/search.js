import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";
import styles from "@/styles/Search.module.css";

/*
검색 페이지에서는 검색어 값인 q 값을 기준으로 리퀘스트를 보냄.
그래서 useEffect() 훅에서 q 값이 변할 때마다 getProducts() 함수를 실행
*/

export async function getServerSideProps(context) {
  const q = context.query["q"];

  const res = await axios.get(`/products/?q=${q}`);
  const products = res.data.results;

  return {
    props: {
      q,
      products,
    },
  };
}
export default function Search({ q, products }) {
  return (
    <div>
      <Head>
        <title>{q} 검색결과 - AshtonMall</title>
      </Head>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
      <ProductList className={styles.productList} products={products} />
    </div>
  );
}
