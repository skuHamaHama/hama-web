import { PlayCircleOutlined } from "@ant-design/icons";
import { Coupon } from "../../../components/coupon";
import * as S from "./Center.Styled";
export function CenterScreen() {
  const groupSize: number = 3; //분할 개수
  return (
    <S.Container>
      <S.Category>
        <S.Text>카테고리</S.Text>
        <S.IconGroup>
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
        </S.IconGroup>
      </S.Category>
      <S.Category>
        <S.Text>인기 쿠폰</S.Text>
        <S.CouponContainer>
          <Coupon groupSize={groupSize} />
        </S.CouponContainer>
      </S.Category>
      <S.Category>
        <S.Text>신규 쿠폰</S.Text>
        <S.BlueContainer>
          <S.CouponContainer>
            <Coupon groupSize={groupSize} />
          </S.CouponContainer>
        </S.BlueContainer>
      </S.Category>
      <S.Category>
        <S.Text>최신 댓글</S.Text>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          전체보기
        </div>
        <S.ReviewContainer></S.ReviewContainer>
        <PlayCircleOutlined />
      </S.Category>
    </S.Container>
  );
}
