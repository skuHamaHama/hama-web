import * as S from "./UseCoupon.styled";
import { Layout } from "../../components/common/Layout";
import { Nav } from "../../components/common/Nav";
import LeftSide from "../../components/common/Side/LeftSide";

export function UseCoupon() {
  return (
    <Layout>
      <Nav />
      <S.Container>
        <LeftSide />
        <S.Coupon src="./img/usecoupon/coupon.svg" />
        <S.Line />
      </S.Container>
    </Layout>
  );
}
