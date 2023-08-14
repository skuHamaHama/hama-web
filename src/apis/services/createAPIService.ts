import {
  AxiosResponse,
  AxiosRequestConfig as _AxiosRequestConfig,
} from "axios";

import { axiosInstance } from "../axiosInstance";

const replaceURLParameters = (config: any) => {
  const urlParams = config.urlParams as Record<string, string> | undefined;
  let url = config.url;

  if (urlParams !== undefined) {
    url = config.url.replace(/:(\w+)\/?/g, (matched: any, key: any) => {
      const keyName = key.replace(/[:/]/g, "");
      return matched.replace(`:${key}`, urlParams[keyName]);
    });
  }

  return { ...config, url };
};

export function createAPIService<ResData = any, ReqData = any>() {
  return function (config: any) {
    return async (requestData: ReqData): Promise<AxiosResponse<ResData>> => {
      try {
        const urlWithParams = replaceURLParameters({
          url: config.url,
          urlParams: config.urlParams,
          method: config.method,
        });

        const axiosConfig: _AxiosRequestConfig = {
          method: config.method,
          url: urlWithParams.url,
          data: requestData,
        };

        const response = await axiosInstance.request<ResData>(axiosConfig);
        return response;
      } catch (error) {
        throw new Error("API 요청 중 오류가 발생하였습니다.");
      }
    };
  };
}
