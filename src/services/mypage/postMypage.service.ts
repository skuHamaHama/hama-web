import { axiosInstance } from "../../apis/axiosInstance";

//마이페이지 즐겨찾기 브랜드
export function postMypageBrand(email: string, brandId: number) {
  const res = axiosInstance.post(`/mypage/${email}/${brandId}/edit`);
  return res;
}
