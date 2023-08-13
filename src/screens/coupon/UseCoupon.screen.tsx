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
        <S.LContainer>
          <S.CouponWrapper>
            <S.TexstWrapper>
              <S.Name>스타벅스 할인권</S.Name>
              <S.Name>2022.08.14 - 2023.08.14</S.Name>
            </S.TexstWrapper>
            <S.Logo />
          </S.CouponWrapper>
          <S.LinkWrapper>
            <S.LinkImg src={`${process.env.PUBLIC_URL}/img/coupon/logo.svg`} />
            <S.Link>link</S.Link>
          </S.LinkWrapper>
          <S.InfoBox />
        </S.LContainer>
        <S.Line />
        <S.RContainer>
          <S.TexstWrapper>
            <S.Text style={{ fontSize: 25 }}>스타벅스</S.Text>
            <S.Text style={{ fontSize: 15 }}>쿨라임 피지오</S.Text>
            <S.Text style={{ fontSize: 15 }}>
              00명이 이 쿠폰을 사용했습니다.
            </S.Text>
          </S.TexstWrapper>
        </S.RContainer>
      </S.Container>
    </Layout>
  );
}
