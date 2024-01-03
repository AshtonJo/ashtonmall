import SizeReviewList from "@/components/SizeReviewList";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Product() {
  const [product, setProduct] = useState();
  const [sizeReviews, setSizeReviews] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  async function getProduct(targetId) {
    const res = await axios.get(`/products/${targetId}`);
    const nextProduct = res.data;
    setProduct(nextProduct);
  }

  async function getSizeReviews(targetId) {
    const res = await axios.get(`/size_reviews/?product_id=${targetId}`);
    const nextSizeReviews = res.data.results ?? [];
    setSizeReviews(nextSizeReviews);
  }

  useEffect(() => {
    if (!id) return;
    getProduct(id); // /products/[id]가 변경 될 때마다 실행
    getSizeReviews(id);
  }, [id]);

  if (!product) return null; // 맨 처음 product가 undefined일테니 아무것도 렌더링 안함

  return (
    <>
      <h1>{product.name}</h1>
      <img src={product.imgUrl} alt={product.name} />
      <SizeReviewList sizeReviews={sizeReviews} />
    </>
  );
}
