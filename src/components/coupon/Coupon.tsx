import * as S from "./Coupon.Styled";
import { couponData, GetCouponRes } from "./";

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
              <div>{coupon.brand}</div>
            </S.Coupon>
          ))}
        </S.CouponGroup>
      ))}
    </S.Container>
  );
}
