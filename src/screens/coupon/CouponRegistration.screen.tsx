import { Layout } from "../../components/common/Layout";
import { Nav } from "../../components/common/Nav";
import * as S from "./CouponRegistration.styled";
import LeftSide from "../../components/common/Side/LeftSide";

export function CouponRegistration() {
  return (
    <Layout>
      <Nav />
      <S.Container>
        <LeftSide />
        <S.Wrapper>
          <S.Text>쿠폰 등록</S.Text>
          <S.InputSearch />
        </S.Wrapper>
      </S.Container>
    </Layout>
  );
}
