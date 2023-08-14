import { createAPIService } from "../../apis";

export interface PostProfileReq {
  nickname: string;
  password: string;
}

export interface PostProfileRes {
  result: string;
}

export const postProfile = createAPIService<PostProfileRes, PostProfileReq>()({
  config: { method: "POST", url: "/v3/auth/profile" },
});
