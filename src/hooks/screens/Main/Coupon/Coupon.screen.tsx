import { useState, useEffect, useCallback } from "react";
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
  const [pickIndex, setPickIndex] = useState(1);
  const onPickIndex = useCallback(
    (idx: number) => {
      if (pickIndex === idx) {
        return;
      }
      setPickIndex(idx);

      //쿠폰 요청
    },
    [pickIndex]
  );

  const mapDataInGroups = (data: Coupon[], groupSize: number) => {
    const groups = [];
    for (let i = 0; i < data.length; i += groupSize) {
      groups.push(data.slice(i, i + groupSize));
    }
    return groups;
  };

  const couponData = mapDataInGroups(data, 3);

  useEffect(() => {
    onPickIndex(pickIndex);
  }, [onPickIndex, pickIndex]);
  return (
    <S.Container>
      <S.Picker
        pick={pickIndex === 1}
        onClick={() => onPickIndex(1)}
      ></S.Picker>
      <S.Picker
        pick={pickIndex === 2}
        onClick={() => onPickIndex(2)}
      ></S.Picker>
      {couponData.map((group, groupIndex) => (
        <S.CouponGroup key={groupIndex}>
          {group.map((coupon: Coupon, idx: number) => (
            <S.Coupon key={idx}>{coupon.brand}</S.Coupon>
          ))}
        </S.CouponGroup>
      ))}
    </S.Container>
  );
}
