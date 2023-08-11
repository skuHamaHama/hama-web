import { PlayCircleOutlined } from "@ant-design/icons";
import { Coupon } from "../coupon";
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
      <S.BestCoupon>
        <S.Text>인기 쿠폰</S.Text>
        <Coupon />
      </S.BestCoupon>
      <S.NewCoupon>
        <S.Text>신규 쿠폰</S.Text>
        <S.CouponContainer></S.CouponContainer>
      </S.NewCoupon>
      <S.Review>
        <S.Text>후기 글</S.Text>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          전체보기
        </div>
        <S.ReviewContainer></S.ReviewContainer>
        <PlayCircleOutlined />
      </S.Review>
    </S.Container>
  );
}
