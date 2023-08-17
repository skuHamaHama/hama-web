import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Screen, SubCoupon } from "../../../components";
import { GetBrandDataRes } from "../../../services";
import { useGetBrand } from "../../../hooks";
import * as S from "../category";

export function CouponBrandScreen() {
  const [brandData, setBrandData] = useState<GetBrandDataRes>();
  const { brandId } = useParams();
  const getBrand = useGetBrand();

  // getCouponData -> flat: 내부 배열을 풀어줌
  useEffect(() => {
    getBrand(Number(brandId)).then((res) => {
      setBrandData(res);
    });
  }, []);

  return (
    <Screen header={true} nav={true} side={false} footer={true}>
      <S.Container>
        <S.MyCoupon>
          <S.Text>{brandData?.brandName}</S.Text>
          <S.Line />
          <SubCoupon active={false} brandId={Number(brandId)} />
        </S.MyCoupon>
      </S.Container>
    </Screen>
  );
}
