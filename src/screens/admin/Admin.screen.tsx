import * as S from "./Admin.styled";
import { useNavigate } from "react-router-dom";
import React from "react";

export function Admin() {
  const navigate = useNavigate();
  const [clickedIndex, setClickedIndex] = React.useState<number | null>(null);

  const onOptionClicked = (value: string, index: number) => () => {
    console.log(value);
    console.log(index);
    setClickedIndex(index);
  };

  return (
    <S.Container>
      <S.Logo src={`${process.env.PUBLIC_URL}/img/admin/logo.svg`} />
      <S.Left>
        <S.ListItem
          style={{ marginTop: "30px" }}
          onClick={() => {
            onOptionClicked("쿠폰 관리", 1);
            navigate("/admin/coupon");
          }}
          clicked={clickedIndex === 1}
        >
          쿠폰 관리
        </S.ListItem>
        <S.ListItem
          style={{ marginTop: "15px" }}
          onClick={() => {
            onOptionClicked("브랜드 관리", 2);
            navigate("/user/help/profile");
          }}
          clicked={clickedIndex === 2}
        >
          브랜드 관리
        </S.ListItem>
      </S.Left>
    </S.Container>
  );
}
