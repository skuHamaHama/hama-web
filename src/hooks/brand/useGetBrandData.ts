import { axiosInstance } from "../../apis";
import { GetBrandDataRes } from "../../services";
//Temp Auth
const accessToken = "accessToken";

//브랜드 상세 조회
export function useGetCommentList() {
  const getCommentList = async (brandId: string) => {
    try {
      const res: GetBrandDataRes = await axiosInstance.get(
        `/brand?brandId=${brandId}`,
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      return res;
    } catch (error) {
      alert(error);
    }
  };
  return getCommentList;
}

//모든 브랜드 조회
export function useGetBrandList() {
  const getBrandList = async () => {
    try {
      const res: GetBrandDataRes[] = await axiosInstance.get(
        "brand/brandList",
        {
          headers: { GetBrandDataRes: `Bearer ${accessToken}` },
        }
      );
      return res;
    } catch (error) {
      alert(error);
    }
  };
  return getBrandList;
}

//카테고리에 대한 브랜드 목록
export function useGetCategoryBrandList() {
  const getCategoryBrandList = async (category: string) => {
    try {
      const res: GetBrandDataRes[] = await axiosInstance.get(
        `brand/${category}`,
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      return res;
    } catch (error) {
      alert(error);
    }
  };
  return getCategoryBrandList;
}

//브랜드 검색 리스트
export function useGetSearchBrandList() {
  const getSearchBrandList = async (searchKeyword: string) => {
    try {
      const res: GetBrandDataRes[] = await axiosInstance.get(
        `brand/${searchKeyword}/brand`,
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      return res;
    } catch (error) {
      alert(error);
    }
  };
  return getSearchBrandList;
}