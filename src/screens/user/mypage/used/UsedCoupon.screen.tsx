import { SubCoupon, Screen } from "../../../../components";
import * as S from "../main";

export function UsedCouponScreen() {
  const GroupSize = 4; //분할 개수
  return (
    <Screen header={true} nav={true} side={true} footer={true}>
      <S.MyCoupon>
        <div style={{ height: "100px" }}></div>
        <S.TextGroup>
          <S.Text>사용한 쿠폰</S.Text>
          <S.ViewText>전체 보기</S.ViewText>
        </S.TextGroup>
        <S.Line />
        <SubCoupon groupSize={GroupSize} />
      </S.MyCoupon>
    </Screen>
  );
}