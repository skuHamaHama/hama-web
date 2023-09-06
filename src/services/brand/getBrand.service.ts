import { axiosInstance } from "../../apis/axiosInstance";

export interface GetBrandRes {
  brandId: number;
  brandName: string;
  brandImgUrl: string;
  category: string;
}

//브랜드 상세 조회
export function getBrand(category: string) {
  const res = axiosInstance.post<GetBrandRes[]>(`/brand/${category}`);
  return res;
}

//브랜드 검색 리스트
export function getSearchBrand(keyword: string) {
  const res = axiosInstance.post<GetBrandRes[]>(
    `/brand/search?keyword=${keyword}`
  );
  return res;
}
