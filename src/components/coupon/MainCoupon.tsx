import { useEffect, useState } from "react";
import { useGetOrderByCoupon } from "../../hooks";
import { GetCouponDataRes } from "../../services";
import { couponData_3 } from "."; //임시 데이터
import * as S from "./MainCoupon.Styled";

export function MainCoupon({ orderBy }: { orderBy: string }) {
  const groupSize = 3; //분할 개수
  const [couponData, setCouponData] = useState<GetCouponDataRes[] | undefined>(
    []
  );
  const orderByCoupon = useGetOrderByCoupon();

  // const getOrderByCouponData = useGetOrderByCouponData();
  const mapDataInGroups = (
    groupSize: number,
    couponData: GetCouponDataRes[]
  ) => {
    const groups = [];
    for (let i = 0; i < couponData.length; i += groupSize) {
      groups.push(couponData.slice(i, i + groupSize));
    }
    return groups;
  };

  //데이터 스위치
  const tempData = mapDataInGroups(groupSize, couponData_3); //현재 사용 데이터
  //const data = mapDataInGroups(couponData, groupSize);

  // getCouponData -> flat: 내부 배열을 풀어줌
  useEffect(() => {
    // getOrderByCouponData(orderBy);
    orderByCoupon(orderBy).then((res) => {
      setCouponData(res);
      if (couponData) {
        mapDataInGroups(groupSize, couponData.flat());
      } else {
        mapDataInGroups(groupSize, tempData.flat());
        alert("쿠폰 정보가 없습니다.");
      }
    });
  }, []);

  return (
    <S.Container>
      {tempData.map((group, groupIndex) => (
        <S.CouponGroup key={groupIndex}>
          {group.map((coupon: GetCouponDataRes, idx: number) => (
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
                src={`${process.env.PUBLIC_URL}${coupon.couponImg}`}
              />
            </S.Coupon>
          ))}
        </S.CouponGroup>
      ))}
    </S.Container>
  );
}
