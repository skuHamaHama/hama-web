import { axiosInstance } from "../../apis";

export interface PostLoginReq {
  email: string;
  password: string;
  loginKeep: boolean;
}

export interface PostLoginRes {
  accessToken: string;
  refreshToken: string;
  fcmStatus: boolean;
}

export function postLogin(data: PostLoginReq) {
  const res = axiosInstance.post<PostLoginRes>("/login", data);
  return res;
}
