import { createAPIService } from "../../apis";

export interface GetBrandDataRes {
  category: string;
  brandId: number;
  brandName: string;
  brandImgUrl: string;
  favor: boolean;
}

export const getBrandData = (param: string) => {
  createAPIService<GetBrandDataRes>()({
    config: { method: "GET", url: "/brand/:urlParam" },
    urlParams: { urlParam: param },
  });
};

export const getSearchBrandData = (param: string) => {
  createAPIService<GetBrandDataRes>()({
    config: { method: "GET", url: "/brand/search/:urlParam" },
    urlParams: { urlParam: param },
  });
};
