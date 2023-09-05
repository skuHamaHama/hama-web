//인증 요청
export interface PostEmailVerifyReq {
  email: string;
}
export interface PostEmailVerifyRes {
  code: string;
  status: boolean;
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

//회원정보 수정
export interface PostProfileReq {
  nickname: string;
  email: string;
  password: string;
}

//사용자 기기 fcm 토큰 저장
export interface PostSaveTokenReq {
  email: string;
  fcmToken: string;
  fcmStatus: boolean;
}
