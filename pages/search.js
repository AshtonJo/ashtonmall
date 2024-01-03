import SearchForm from "@/components/searchForm";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  console.log(router);
  const { q } = router.query; // {q: "청바지"}

  return (
    <div>
      <h1>Search 페이지</h1>
      <SearchForm initialValue={q} />
      <h1>검색결과: {q} </h1>
    </div>
  );
}
