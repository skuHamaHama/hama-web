import { postMypageBrand } from "@services/mypage";
import { useMutation } from "react-query";

export function usePostMypageBrand(email: string, brandId: number) {
  return useMutation(["postMypageBrand"], () =>
    postMypageBrand(email, brandId)
  );
}
