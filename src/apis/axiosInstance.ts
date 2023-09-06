import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./axios.constant";

const config: AxiosRequestConfig = { baseURL: BASE_URL };
export const axiosInstance = axios.create(config);

export function getHeader() {
  return { ContentType: "application/json" };
}

// export function getJWTHeader(token: AuthToken): Record<string, string> {
//   return { Authorization: `Bearer ${token.accessToken}` };
// }
