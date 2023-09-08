import { getRegisterNickname } from "../../services/user";
import { useQuery } from "@tanstack/react-query";

export function useGetRegisterNickname(nickname: string) {
  return useQuery(["getRegisterNickname", nickname], () =>
    getRegisterNickname(nickname)
  );
}
