import { Brand, Screen } from "../../../../components";
import * as S from "../main";

export function FavorBrandScreen() {
  const GroupSize = 5; //분할 개수
  return (
    <Screen header={true} nav={true} side={true} footer={true}>
      <S.MyCoupon>
        <div style={{ height: "100px" }}></div>
        <S.TextGroup>
          <S.Text>즐겨찾기</S.Text>
          <S.ViewText>전체 보기</S.ViewText>
        </S.TextGroup>
        <S.Line />
        <Brand groupSize={GroupSize} />
      </S.MyCoupon>
    </Screen>
  );
}