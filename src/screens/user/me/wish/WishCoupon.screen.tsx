import { SubCoupon, Screen } from "../../../../components";
import * as S from "../../me/main";

export function WishCouponScreen() {
  const active = false; //버튼 비활성화
  return (
    <Screen header={true} nav={true} side={true} footer={true}>
      <S.MyCoupon>
        <div style={{ height: "100px" }}></div>
        <S.TextGroup>
          <S.Text>찜한 쿠폰</S.Text>
          <S.ViewText>전체 보기</S.ViewText>
        </S.TextGroup>
        <S.Line />
        <SubCoupon active={active} />
      </S.MyCoupon>
    </Screen>
  );
}
