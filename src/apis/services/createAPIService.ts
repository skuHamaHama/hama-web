import {
  Method,
  AxiosResponse,
  AxiosRequestConfig as _AxiosRequestConfig,
} from "axios";

import { axiosInstance } from "../axiosInstance";

interface AxiosRequestConfig<D = any> extends _AxiosRequestConfig<D> {
  url: string;
  method: Method;
}

type ExcludeLiterals = "urlParams" | "params" | "data";
type HasUrlParams<Url extends string> = UrlParams<Url> extends Record<
  string,
  never
>
  ? false
  : true;
type UrlParams<Url extends string> = {
  [key in PickUrlParameter<SplitBy<Url, "/">>]: string | number;
};
type PickUrlParameter<T extends string> = T extends `:${infer K}` ? K : never;
type SplitBy<
  T extends string,
  Separator extends string
> = T extends `${infer A}${Separator}${infer B}`
  ? A | SplitBy<B, Separator>
  : T;
type HasProperty<T, K extends string | number | symbol> = K extends keyof T
  ? T[K] extends undefined
    ? false
    : true
  : false;
type IsEqual<T1, T2> = IsSupersetOf<T1, T2> & IsSupersetOf<T2, T1> extends false
  ? false
  : true;
type IsSupersetOf<Superset, Subset> = [Subset] extends [Superset]
  ? true
  : false;
type IsEmpty<T> = T extends Record<any, never>
  ? true
  : T extends any[]
  ? T["length"] extends 0
    ? true
    : false
  : false;

export type CustomConfig<
  ReqData,
  PreDefined extends AxiosRequestConfig<ReqData>
> = Omit<_AxiosRequestConfig<ReqData>, ExcludeLiterals> &
  (HasUrlParams<PreDefined["url"]> extends true
    ? { urlParams: UrlParams<PreDefined["url"]> }
    : { urlParams?: never }) &
  (HasProperty<PreDefined, "params"> extends true
    ? { params: PreDefined["params"] }
    : { params?: never }) &
  (IsEqual<void, ReqData> extends true
    ? { data?: never }
    : IsEmpty<ReqData> extends true
    ? { data?: never }
    : { data: ReqData });

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
        console.log({ config });
        console.log({ requestData });
        const urlWithParams = replaceURLParameters({
          url: config.url,
          urlParams: config.urlParams,
          method: config.method,
        });
        alert("오류 부분");

        const axiosConfig: _AxiosRequestConfig = {
          method: config.method,
          url: urlWithParams.url,
          data: requestData,
        };
        console.log(config.method);
        console.log(axiosConfig);
        const response = await axiosInstance.request<ResData>(axiosConfig);
        return response;
      } catch (error) {
        console.log(error);
        throw new Error("API 요청 중 오류가 발생하였습니다.");
      }
    };
  };
}
