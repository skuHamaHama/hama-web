import { couponData, GetCouponRes } from "./";
import * as S from "./Coupon.Styled";

export function Coupon({ groupSize }: { groupSize: number }) {
  const mapDataInGroups = (data: GetCouponRes[], groupSize: number) => {
    const groups = [];
    for (let i = 0; i < data.length; i += groupSize) {
      groups.push(data.slice(i, i + groupSize));
    }
    return groups;
  };

  const data = mapDataInGroups(couponData, groupSize);

  return (
    <S.Container>
      {data.map((group, groupIndex) => (
        <S.CouponGroup key={groupIndex}>
          {group.map((coupon: GetCouponRes, idx: number) => (
            <S.Coupon key={idx}>
              <S.CouponInfo>
                <S.Text style={{ fontFamily: "nanum-bold", fontSize: "large" }}>
                  {coupon.brand}
                </S.Text>
                <S.Text>{coupon.couponName}</S.Text>
                <S.Text>
                  <p style={{ fontSize: "small", margin: "0 0 -15px 0" }}>
                    {coupon.startDate}~
                  </p>
                  <p style={{ fontSize: "small" }}>{coupon.endDate}</p>
                </S.Text>
              </S.CouponInfo>
              <S.CouponImg />
            </S.Coupon>
          ))}
        </S.CouponGroup>
      ))}
    </S.Container>
  );
}
