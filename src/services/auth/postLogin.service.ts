import { createAPIService } from "../../apis";

export interface PostLoginReq {
  id: string;
  password: string;
  state: boolean;
}

export interface PostLoginRes {
  result: boolean;
  data: {
    refreshToken: string; //로컬스토리지
    accessToken: string; //쿠키
  };
}

export const postLogin = createAPIService<PostLoginRes, PostLoginReq>()({
  config: { method: "POST", url: "/v3/auth/login" },
});
