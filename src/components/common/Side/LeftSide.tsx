import React from "react";
import * as S from "./LeftSide.styled";

// const items= [
//   {
//     type: 'nickname',
//     title: '닉네임 변경',
//   },
//   {
//     type: 'password',
//     title: '비밀번호 변경',
//   },
//   {
//     type: 'nickname',
//     title: '닉네임 변경',
//   },

// ]

export function LeftSide() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [clickedIndex, setClickedIndex] = React.useState<number | null>(null);

  const onToggle = () => setIsOpen(!isOpen);
  const onOptionClicked = (value: string, index: number) => () => {
    console.log(value);
    console.log(index);
    // setIsOpen(false);
    setClickedIndex(index);
  };

  return (
    <S.Container>
      <S.Info onClick={onToggle}>
        <p>내 정보</p>
      </S.Info>
      <S.DropDownContainer>
        {isOpen && (
          <>
            <S.Line />
            <S.ListItem
              onClick={onOptionClicked("닉네임 변경", 1)}
              clicked={clickedIndex === 1}
            >
              닉네임 변경
            </S.ListItem>
            <S.ListItem
              onClick={onOptionClicked("비밀번호 변경", 2)}
              clicked={clickedIndex === 2}
            >
              비밀번호 변경
            </S.ListItem>
            <S.ListItem
              onClick={onOptionClicked("회원탈퇴", 3)}
              clicked={clickedIndex === 3}
            >
              회원탈퇴
            </S.ListItem>
          </>
        )}
      </S.DropDownContainer>
      <S.CategoryMenuBox>
        <p>최근 본 쿠폰</p>
      </S.CategoryMenuBox>
      <S.CategoryMenuBox>
        <p>사용한 쿠폰</p>
      </S.CategoryMenuBox>
      <S.CategoryMenuBox>
        <p>찜한 쿠폰</p>
      </S.CategoryMenuBox>
      <S.CategoryMenuBox>
        <p>작성한 후기</p>
      </S.CategoryMenuBox>
    </S.Container>
  );
}

export default LeftSide;
