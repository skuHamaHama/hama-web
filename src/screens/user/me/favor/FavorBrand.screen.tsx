import { MyPageBrand, Screen } from "../../../../components";
import * as S from "../main";

export function FavorBrandScreen() {
  return (
    <Screen header={true} nav={true} side={true} footer={true}>
      <S.MyCoupon>
        <div style={{ height: "100px" }}></div>
        <S.TextGroup>
          <S.Text>즐겨찾기</S.Text>
          <S.ViewText>전체 보기</S.ViewText>
        </S.TextGroup>
        <S.Line />
        <MyPageBrand order={"likeBrand"} />
      </S.MyCoupon>
    </Screen>
  );
}
