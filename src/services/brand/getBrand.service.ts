import { createAPIService } from "../../apis";

export interface GetBrandRes {
  category: string;
  brandId: number;
  brandName: string;
  brandImgUrl: string;
  favor: boolean;
}

export const getBrand = createAPIService<GetBrandRes>()({
  config: { method: "GET", url: "/v3/auth/join" },
});
