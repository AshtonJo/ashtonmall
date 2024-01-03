import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchForm({ initialValue = "" }) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) {
      // 만약 검색값이 없다면 메인으로 이동
      router.push("/");
      return;
    }
    router.push(`/search?q=${value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}
