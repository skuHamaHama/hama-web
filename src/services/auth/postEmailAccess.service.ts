import { createAPIService } from "../../apis";

export interface PostEmailConfirmReq {
  verify: string;
}

export interface PostEmailConfirmRes {
  result: string;
}

export const postEmailAccess = createAPIService<
  PostEmailConfirmRes,
  PostEmailConfirmReq
>()({
  config: { method: "POST", url: "/v3/auth/verify" },
});
