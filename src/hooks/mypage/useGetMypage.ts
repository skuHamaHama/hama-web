import {
  getMyPageBrand,
  getMyPageComment,
  getMyPageCoupon,
  getMyPageLikeCoupon,
} from "../../services/mypage/";
import { useQuery } from "@tanstack/react-query";

export function useGetMyPageComment() {
  return useQuery(["getMyPageComment"], getMyPageComment);
}

export function useGetMyPageCoupon(order: string) {
  return useQuery(["getMyPageCoupon", order], () => getMyPageCoupon(order));
}

export function useGetMyPageLikeCoupon(email: string) {
  return useQuery(["getMyPageLikeCoupon", email], () =>
    getMyPageLikeCoupon(email)
  );
}

export function useGetMyPageBrand(email: string) {
  return useQuery(["getMyPageBrand", email], () => getMyPageBrand(email));
}
