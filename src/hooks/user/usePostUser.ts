import {
  postEmailConfirm,
  postRessetPassword,
  postSaveFcmToken,
  postSavePassword,
} from "../../services/user";
import { useMutation } from "@tanstack/react-query";

//이메일 인증코드
export function usePostEmailConfirm() {
  return useMutation(["postEmailConfirm"], postEmailConfirm);
}

//비밀번호 변경 URL
export function usePostRessetPassword() {
  return useMutation(["postRessetPassword"], postRessetPassword);
}

//새 비밀번호 전송
export function usePostSavePassword() {
  return useMutation(["postSavePassword"], postSavePassword);
}

//사용자 기기 fcm 토큰 저장
export function usePostSaveFcmToken() {
  return useMutation(["postSaveFcmToken"], postSaveFcmToken);
}
