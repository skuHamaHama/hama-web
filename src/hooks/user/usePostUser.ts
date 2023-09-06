import {
  PostSaveTokenReq,
  postEmailConfirm,
  postRessetPassword,
  postSaveFcmToken,
  postSavePassword,
} from "@services/user";
import { useMutation } from "@tanstack/react-query";

//이메일 인증코드
export function usePostEmailConfirm(email: string) {
  return useMutation(["postEmailConfirm"], () => postEmailConfirm(email));
}

//비밀번호 변경 URL
export function usePostRessetPassword(email: string) {
  return useMutation(["postRessetPassword"], () => postRessetPassword(email));
}

//새 비밀번호 전송
export function usePostSavePassword(password: string) {
  return useMutation(["postSavePassword"], () => postSavePassword(password));
}

//사용자 기기 fcm 토큰 저장
export function usePostSaveFcmToken(data: PostSaveTokenReq) {
  return useMutation(["postSaveFcmToken"], () => postSaveFcmToken(data));
}
