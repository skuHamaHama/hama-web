import { useState, useEffect, useCallback } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Coupon } from "../../../components/coupon";
import * as S from "./Center.Styled";
export function Center() {
  const [pickIndex, setPickIndex] = useState(1);

  const onPickIndex = useCallback(
    (idx: number) => {
      if (pickIndex === idx) {
        return;
      }
      setPickIndex(idx);

      //쿠폰 요청
    },
    [pickIndex]
  );

  useEffect(() => {
    onPickIndex(pickIndex);
  }, [onPickIndex, pickIndex]);

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
      <S.TagContainer>
        <S.Text>인기 쿠폰</S.Text>
        <S.PickerGroup>
          <S.Picker
            pick={pickIndex === 1}
            onClick={() => onPickIndex(1)}
          ></S.Picker>
          <S.Picker
            pick={pickIndex === 2}
            onClick={() => onPickIndex(2)}
          ></S.Picker>
        </S.PickerGroup>
        <Coupon />
      </S.TagContainer>
      <S.TagContainer>
        <S.Text>신규 쿠폰</S.Text>
        <S.BlueContainer>
          <S.newCoupon>
            <S.PickerGroup>
              <S.Picker
                pick={pickIndex === 1}
                onClick={() => onPickIndex(1)}
              ></S.Picker>
              <S.Picker
                pick={pickIndex === 2}
                onClick={() => onPickIndex(2)}
              ></S.Picker>
            </S.PickerGroup>
            <Coupon />
          </S.newCoupon>
        </S.BlueContainer>
      </S.TagContainer>
      <S.TagContainer>
        <S.Text>후기 글</S.Text>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          전체보기
        </div>
        <S.ReviewContainer>
          <Review />
        </S.ReviewContainer>
        <PlayCircleOutlined />
      </S.TagContainer>
    </S.Container>
  );
}
