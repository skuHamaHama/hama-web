import { createAPIService } from "../../apis";

//회원가입
export interface PostJoinReq {
  email: string;
  password: string;
  nickname: string;
}

//인증 요청
export interface PostEmailVerifyReq {
  email: string;
}
export interface PostEmailVerifyRes {
  code: string;
  status: boolean;
}

//중복 확인
export interface PostRegisterNicknameReq {
  nickname: string;
}
export interface PostRegisterNicknameRes {
  status: boolean; //true -> 가입 가능
}

//비밀번호 찾기 Request
export interface PostResetPasswordReq {
  email: string;
}
export interface PostSavePasswordReq {
  password: string;
}
//비밀번호 찾기 Response
export interface PostResetPasswordRes {
  status: boolean; //true -> 존재
}

//회원가입
export const postJoin = createAPIService<PostJoinReq>()({
  config: { method: "POST", url: "/register" },
});

//인증요청
export const postEmailVerify = createAPIService<
  PostEmailVerifyRes,
  PostEmailVerifyReq
>()({
  config: { method: "POST", url: "/user/register/mailConfirm" },
});

//중복 확인
export const postRegisterNickname = (data: PostRegisterNicknameReq) =>
  createAPIService<PostRegisterNicknameRes, PostRegisterNicknameReq>()({
    config: { method: "POST", url: `/user/register/${data.nickname}` },
  });

//비밀번호 변경 URL
export const postResetPassword = createAPIService<
  PostResetPasswordRes,
  PostResetPasswordReq
>()({
  config: { method: "POST", url: "/user/resetPassword" },
});

//비밀번호 찾기
export const postSavePassword = createAPIService<PostSavePasswordReq>()({
  config: { method: "POST", url: "/user/savePassword" },
});
