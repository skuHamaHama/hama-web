import { Coupon } from "../Coupon/Coupon.screen";
import * as S from "./Center.Styled";

export function Center() {
  return (
    <S.Container>
      <S.Category>
        <S.Text>카테고리</S.Text>
        <div>
          <S.Icon
            alt="food_Icon.png"
            src="./img/main/before/food_Icon.png"
          ></S.Icon>
          <S.Icon
            alt="movie_Icon.png"
            src="./img/main/before/movie_Icon.png"
          ></S.Icon>
          <S.Icon
            alt="shopping_Icon.png"
            src="./img/main/before/shopping_Icon.png"
          ></S.Icon>
        </div>
      </S.Category>
      <Coupon />
    </S.Container>
  );
}
