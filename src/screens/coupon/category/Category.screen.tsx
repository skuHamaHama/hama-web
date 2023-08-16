import { Screen, SubCoupon } from "../../../components";
import * as S from "./Category.styled";

export function CategoryScreen() {
  const active = false; //nextButton function
  return (
    <Screen header={true} nav={true} side={false} footer={true}>
      <S.Container>
        <S.MyCoupon>
          <S.Text>음식</S.Text>
          <S.Line />
          <SubCoupon active={active} />
        </S.MyCoupon>
      </S.Container>
    </Screen>
  );
}
