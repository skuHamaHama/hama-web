import { useParams, useNavigate } from "react-router-dom";
import { Screen, Brand } from "../../../components";

import * as S from "./Category.styled";

export function CouponCategoryScreen() {
  const { category } = useParams();
  const navigate = useNavigate();

  if (category === undefined) {
    alert("유효하지 않은 데이터입니다.");
    navigate("/home");
    return null;
  }
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
