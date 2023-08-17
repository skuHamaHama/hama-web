import { useParams } from "react-router-dom";
import { Screen, Brand } from "../../../components";
import { useGetCategory } from "../../../hooks";
import * as S from "./Category.styled";

export function CouponCategoryScreen() {
  const { categoryId } = useParams();
  const category = useGetCategory(Number(categoryId));

  return (
    <Screen header={true} nav={true} side={false} footer={true}>
      <S.Container>
        <S.MyCoupon>
          <S.Text>{category}</S.Text>
          <S.Line />
          <Brand category={category} />
        </S.MyCoupon>
      </S.Container>
    </Screen>
  );
}
