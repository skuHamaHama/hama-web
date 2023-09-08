import { axiosInstance } from "../../apis/axiosInstance";

//인증 요청
export interface PostEmailVerifyRes {
  code: string;
  status: boolean;
}

//사용자 기기 fcm 토큰 저장
export interface PostSaveTokenReq {
  email: string;
  fcmToken: string;
  fcmStatus: boolean;
}

//이메일 인증코드
export function postEmailConfirm(email: string) {
  const res = axiosInstance.post<PostEmailVerifyRes>(
    "/user/register/mailConfirm",
    email
  );
  return res;
}

//비밀번호 변경 URL
export function postRessetPassword(email: string) {
  const res = axiosInstance.post("/user/resetPassword", email);
  return res;
}

//새 비밀번호 전송
export function postSavePassword(password: string) {
  const res = axiosInstance.post("/user/savePassword", password);
  return res;
}

//사용자 기기 fcm 토큰 저장
export function postSaveFcmToken(data: PostSaveTokenReq) {
  const res = axiosInstance.post("/user/saveFcmToken", data);
  return res;
}
