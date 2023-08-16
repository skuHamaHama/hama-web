import { createAPIService } from "../../apis";

export interface GetCommentData {
  brandName: string;
  couponName: string;
  comment: string;
}

export const getCommentData = (param: string) => {
  createAPIService<GetCommentData>()({
    config: { method: "GET", url: "/comments/:urlParam" },
    urlParams: { urlParam: param },
  });
};

export const getSearchCommentData = (email: string) => {
  createAPIService<GetCommentData>()({
    config: { method: "GET", url: `/comments?email=${email}` },
  });
};

export const getCouponIdCommentData = (couponId: string) => {
  createAPIService<GetCommentData>()({
    config: { method: "GET", url: `/comments/${couponId}` },
  });
};
