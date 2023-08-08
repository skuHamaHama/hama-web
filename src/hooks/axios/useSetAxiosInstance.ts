import { axiosInstance } from "../../apis";
import { useLayoutEffect } from "react";

export function useSetAxiosInstanceDefaultsAccessToken(accessToken?: string) {
  console.log("useSetAxiosInstanceDefaultsAccessToken", { accessToken });
  useLayoutEffect(() => {
    if (accessToken) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      axiosInstance.defaults.headers.common.Authorization = "";
    }
  }, [accessToken]);
}
