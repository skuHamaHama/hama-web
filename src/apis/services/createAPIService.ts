import {
  AxiosResponse,
  Method,
  AxiosRequestConfig as _AxiosRequestConfig,
} from "axios";

import { axiosInstance } from "../axiosInstance";
import { replaceURLParameters } from "./replaceURLParameters";

interface AxiosRequestConfig<D = any> extends _AxiosRequestConfig<D> {
  url: string;
  method: Method;
}
interface AxiosSuccessResponse<ResData, ReqData>
  extends AxiosResponse<ResData, ReqData> {}

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

interface APIServiceConfig {
  isLogging?: boolean;
}

function isIn(
  key: string | number | symbol,
  obj: object
): key is keyof typeof obj {
  return key in obj;
}

// Merge a `source` object to a `target` recursively
function deepMerge<Source extends object, Target extends object>(
  source: Source,
  target: Target = {} as Target
): any {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const [key, value] of Object.entries(source)) {
    if (isIn(key, target)) {
      if (value instanceof Object)
        Object.assign(value, deepMerge(value, target[key]));
    }
  }

  // Join `target` and modified `source`
  return Object.assign({}, target, source) as any;
}

export function createAPIService<ResData = void, ReqData = void>() {
  return function <Config extends AxiosRequestConfig<ReqData>>({
    config: createConfig,
  }: {
    readonly config: Readonly<Config>;
  }) {
    const createAPIRequest = async (
      {
        isLogging,
        ...config
      }: CustomConfig<ReqData, Config> & APIServiceConfig = {} as any
    ) => {
      try {
        const response = await axiosInstance.request<
          ResData,
          AxiosSuccessResponse<ResData, ReqData>
        >(replaceURLParameters(deepMerge({ ...config }, { ...createConfig })));

        if (isLogging) console.log(response);

        return response.data;
      } catch (error: any) {
        return Promise.reject(error);
      }
    };

    return createAPIRequest;
  };
}
