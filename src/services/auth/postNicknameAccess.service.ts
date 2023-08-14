import { createAPIService } from "../../apis";

export interface PostNicknameConfirmReq {
  nickname: string;
}

export interface PostNicknameConfirmRes {
  result: string;
}

export const postNicknameAccess = createAPIService<
  PostNicknameConfirmRes,
  PostNicknameConfirmReq
>()({
  config: { method: "POST", url: "/v3/auth/nickname" },
});
