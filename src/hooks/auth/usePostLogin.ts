import { useMutation } from "@tanstack/react-query";
import { postLogin } from "../../services";

export function usePostLogin() {
  return useMutation(["postLogin"], postLogin);
}
