import { getBrand, getSearchBrand } from "../../services";
import { useQuery } from "@tanstack/react-query";

//브랜드 상세 조회
export function useGetBrand(category: string) {
  return useQuery(["getBrand", category], () => getBrand(category));
}

//브랜드 검색 리스트
export function useGetSearchBrandList(keyword: string) {
  return useQuery(["getSearchBrand", keyword], () => getSearchBrand(keyword));
}
