import { useEffect } from "react";
import { couponData_3 } from ".";
import { useGetOrderByCouponData } from "../../hooks";
import { GetCouponDataRes } from "../../services";
import * as S from "./MainCoupon.Styled";

export function MainCoupon({ orderBy }: { orderBy: string }) {
  const groupSize = 4; //분할 개수

  const getOrderByCouponData = useGetOrderByCouponData();
  const mapDataInGroups = (data: GetCouponDataRes[], groupSize: number) => {
    const groups = [];
    for (let i = 0; i < data.length; i += groupSize) {
      groups.push(data.slice(i, i + groupSize));
    }
    return groups;
  };
  const data = mapDataInGroups(couponData_3, groupSize);

  //getCouponData
  useEffect(() => {
    getOrderByCouponData(orderBy);
  }, []);

  return (
    <S.Container>
      {data.map((group, groupIndex) => (
        <S.CouponGroup key={groupIndex}>
          {group.map((coupon: GetCouponDataRes, idx: number) => (
            <S.Coupon key={idx}>
              <S.CouponInfo>
                <S.BrandText>{coupon.brand}</S.BrandText>
                <S.Text>{coupon.couponName}</S.Text>
                <S.Text>
                  <p style={{ fontSize: "3px", margin: "0 0 -10px 0" }}>
                    {coupon.startDate}~
                  </p>
                  <p style={{ fontSize: "3px" }}>{coupon.endDate}</p>
                </S.Text>
              </S.CouponInfo>
              <S.BrandImg />
            </S.Coupon>
          ))}
        </S.CouponGroup>
      ))}
    </S.Container>
  );
}
