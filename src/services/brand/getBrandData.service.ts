import { createAPIService } from "../../apis";

export interface GetBrandDataRes {
  category: string;
  brandId: number;
  brandName: string;
  brandImgUrl: string;
  favor: boolean;
}

export const getBrandData = createAPIService<GetBrandDataRes>()({
  config: { method: "GET", url: "/v3/brand" },
});
