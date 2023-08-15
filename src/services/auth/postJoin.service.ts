import { createAPIService } from "../../apis";

export interface PostJoinReq {
  email: string;
  password: string;
  nickname: string;
}

export interface PostJoinRes {
  result: boolean;
}

export const postJoin = createAPIService<PostJoinRes, PostJoinReq>()({
  config: { method: "POST", url: "/register" },
});
