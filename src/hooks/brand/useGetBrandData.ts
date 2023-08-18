import { axiosInstance } from "../../apis";
import { GetBrandDataRes } from "../../services";
import { tempBrandData } from "../../components";

//브랜드 상세 조회
export function useGetBrand() {
  const getBrand = async (brandId: number) => {
    try {
      const res: GetBrandDataRes = await axiosInstance.get(
        `/brand?brandId=${brandId}`,
        {
          headers: { "Content-type": "application/json" },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return getBrand;
}

//모든 브랜드 조회
export function useGetBrandList() {
  const getBrandList = async () => {
    try {
      const res: GetBrandDataRes[] = await axiosInstance.get(
        "brand/brandList",
        {
          headers: { "Content-type": "application/json" },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return getBrandList;
}

//카테고리에 대한 브랜드 목록
export function useGetCategoryBrandList() {
  const getCategoryBrandList = async (
    category: string
  ): Promise<GetBrandDataRes[]> => {
    try {
      const response = await axiosInstance.get(`brand/${category}`, {
        headers: { "Content-type": "application/json" },
      });
      console.log("브랜드 목록" + response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return tempBrandData;
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
          headers: { "Content-type": "application/json" },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return getSearchBrandList;
}
