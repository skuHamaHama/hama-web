import * as S from "./Coupon.Styled";

interface Coupon {
  brand: string;
}

const data: Coupon[] = [
  { brand: "아디다스" },
  { brand: "투썸플레이스" },
  { brand: "피자헛" },
  { brand: "나이키" },
  { brand: "이디야" },
  { brand: "베스킨라빈스" },
];

export function Coupon() {
  const mapDataInGroups = (data: Coupon[], groupSize: number) => {
    const groups = [];
    for (let i = 0; i < data.length; i += groupSize) {
      groups.push(data.slice(i, i + groupSize));
    }
    return groups;
  };

  const couponData = mapDataInGroups(data, 3);

  return (
    <S.Container>
      {couponData.map((group, groupIndex) => (
        <S.CouponGroup key={groupIndex}>
          {group.map((coupon: Coupon, idx: number) => (
            <S.Coupon key={idx}>
              <div style={{ margin: "30px" }}>{coupon.brand}</div>
            </S.Coupon>
          ))}
        </S.CouponGroup>
      ))}
    </S.Container>
  );
}
