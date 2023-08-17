import { useState } from "react";

export function useGetCategory(categoryId: number) {
  const [category, setCategory] = useState("");
  if (categoryId === 1) setCategory("음식");

  return category;
}
