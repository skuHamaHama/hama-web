import { useQueryClient } from "react-query";

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  userEmail: string;
}

interface UseUser {
  token: AuthToken | null;
  updateUser: (token: AuthToken) => void;
  clearUser: () => void;
}

export function useUser(): UseUser {
  const token = null;
  const queryClient = useQueryClient();

  const updateUser = (token: AuthToken): void => {
    queryClient.setQueryData("token", token);
  };

  const clearUser = (): void => {
    queryClient.setQueryData("token", null);
  };
  return { token, updateUser, clearUser };
}
