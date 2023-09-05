import { useMutation } from "@tanstack/react-query";
import { postJoin } from "../../services";

export function usePostJoin() {
  return useMutation(["postJoin"], postJoin);
}
