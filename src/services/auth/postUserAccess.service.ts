import { createAPIService } from "../../apis";

export interface PostEmailVerifyReq {
  email: string;
}
export interface PostEmailVerifyRes {
  code: string;
  status: boolean;
}

export interface PostNicknameConfirmReq {
  nickname: string;
}
export interface PostNicknameConfirmRes {
  status: boolean;
}

export const postEmailVerify = createAPIService<
  PostEmailVerifyRes,
  PostEmailVerifyReq
>()({
  config: { method: "POST", url: "/user/register/mailConfirm" },
});

export const postNicknameAccess = (nickname: string) =>
  createAPIService<PostNicknameConfirmRes, PostNicknameConfirmReq>()({
    config: { method: "POST", url: `/user/register/${nickname}` },
  });
