import * as S from "./UseCoupon.styled";
import { Layout } from "../../components/common/Layout";
import Nav from "../../components/common/Nav/Nav";
import LeftSide from "../../components/common/Side/LeftSide";

export function UseCoupon() {
  return (
    <Layout>
      <Nav />
      <LeftSide />
      <S.Container></S.Container>
    </Layout>
  );
}
