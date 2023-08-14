import { SubCoupon, Screen } from "../../../../components";
import * as S from "../main";

export function RecentCouponScreen() {
  const active = false; //버튼 비활성화
  return (
    <Screen header={true} nav={true} side={true} footer={true}>
      <S.MyCoupon>
        <div style={{ height: "100px" }}></div>
        <S.TextGroup>
          <S.Text>최근 본 쿠폰</S.Text>
        </S.TextGroup>
        <S.Line />
        <SubCoupon active={active} />
      </S.MyCoupon>
    </Screen>
  );
}
