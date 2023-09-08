import { useEffect, useState } from "react";
import { useGetMainCoupon } from "../../hooks";
import { GetCouponRes } from "../../services";
import { couponData_3 } from "./";
import * as S from "./MainCoupon.Styled";

export function MainCoupon({ orderBy }: { orderBy: string }) {
  const groupSize = 3; //분할 개수
  const [couponData, setCouponData] = useState<GetCouponRes[]>([]);
  const [groups, setGroups] = useState<GetCouponRes[][]>([]);

  const getCoupon = useGetMainCoupon(orderBy);

  const mapDataInGroups = (groupSize: number, couponData: GetCouponRes[]) => {
    const groups = [];
    for (let i = 0; i < couponData.length; i += groupSize) {
      groups.push(couponData.slice(i, i + groupSize));
    }
    return groups;
  };

  // getCouponData -> flat: 내부 배열을 풀어줌
  useEffect(() => {
    if (getCoupon.isSuccess) {
      setCouponData(getCoupon.data.data);
      const groups = mapDataInGroups(groupSize, couponData);
      setGroups(groups);
    } else if (getCoupon.isError) {
      const groups = mapDataInGroups(groupSize, couponData_3);
      setGroups(groups);
    }
  }, [getCoupon, couponData]);

  return (
    <S.Container>
      {groups.map((group, groupIndex) => (
        <S.CouponGroup key={groupIndex}>
          {group.map((coupon: GetCouponRes, idx: number) => (
            <S.Coupon key={idx}>
              <S.CouponInfo>
                <S.BrandText>{coupon.brandName}</S.BrandText>
                <S.Text>{coupon.couponName}</S.Text>
                <S.Text>
                  <p style={{ fontSize: "3px", margin: "0 0 -10px 0" }}>
                    {coupon.startDate}~
                  </p>
                  <p style={{ fontSize: "3px" }}>{coupon.endDate}</p>
                </S.Text>
              </S.CouponInfo>
              <S.BrandImg
                src={`${process.env.PUBLIC_URL}${coupon.couponUrl}`}
              />
            </S.Coupon>
          ))}
        </S.CouponGroup>
      ))}
    </S.Container>
  );
}
