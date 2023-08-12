import { createAPIService } from "@apis/index";

export interface PostEmailVerifyReq {
  id: string;
}

export interface PostEmailVerifyRes {
  result: string;
}

export const postEmailVerify = createAPIService<
  PostEmailVerifyRes,
  PostEmailVerifyReq
>()({
  config: { method: "POST", url: "/v3/auth/verify/send" },
});
