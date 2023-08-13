import { Coupon, Screen } from "../../../components";
import * as S from "./MyPage.styled";

export function MyPageScreen() {
  const GroupSize = 4;
  return (
    <Screen header={true} nav={true} side={true} footer={true}>
      <S.MainText>마이페이지</S.MainText>
      <S.MyCoupon>
        <S.TextGroup>
          <S.Text>최근 본 쿠폰</S.Text>
          <div>전체 보기</div>
        </S.TextGroup>
        <S.Line />
        <Coupon groupSize={GroupSize} />
      </S.MyCoupon>
    </Screen>
  );
}
