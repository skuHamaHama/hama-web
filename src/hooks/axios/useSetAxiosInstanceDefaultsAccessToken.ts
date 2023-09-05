import { axiosInstance } from "../../apis";
import { useLayoutEffect } from "react";

// 토큰이 있으면 header에 포함
export function useSetAxiosInstanceDefaultsAccessToken(accessToken?: string) {
  useLayoutEffect(() => {
    if (accessToken) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      axiosInstance.defaults.headers.common.Authorization = "";
    }
  }, [accessToken]);
}
