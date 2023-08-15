import { createAPIService } from "../../apis";

export interface GetCommentData {
  commentId: number;
  brandName: string;
  couponName: string;
  comment: string;
}

export const getCommentData = createAPIService<GetCommentData>()({
  config: { method: "GET", url: "/v3/comment" },
});
