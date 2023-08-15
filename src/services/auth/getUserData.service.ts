import { createAPIService } from "../../apis";

export type GetUsersDataRes = GetUserDataRes[];
export interface GetUserDataRes {
  nickname: string;
  email: string;
  password: string;
}

export interface GetDeleteUserRes {
  result: boolean;
}
export const getUsersData = () => {
  createAPIService<GetUsersDataRes>()({
    config: { method: "GET", url: "/users" },
  });
};

export const getUserData = () => {
  createAPIService<GetUserDataRes>()({
    config: { method: "GET", url: "/user" },
  });
};

export const getDeleteUser = () => {
  createAPIService<GetDeleteUserRes>()({
    config: { method: "GET", url: "/user/delete" },
  });
};
