import React from "react";
import * as S from "./Nav.styled";
import useDetectClose from "./useDetectClose";

export const Nav = () => {
  const [FoodIsOpen, FoodRef, FoodHandler] = useDetectClose(false);
  const [CultureIsOpen, CultureRef, CultureHandler] = useDetectClose(false);
  const [ShopIsOpen, ShopRef, ShopHandler] = useDetectClose(false);

  return (
    <>
      <S.Container>
        <S.DropdownContainer>
          <S.DropdownButton onClick={FoodHandler} ref={FoodRef}>
            음식
          </S.DropdownButton>
          <S.Menu isDropped={FoodIsOpen}>
            <S.Ul>
              <S.Li>
                <S.LinkWrapper href="#1-1">식당</S.LinkWrapper>
              </S.Li>
              <S.Li>
                <S.LinkWrapper href="#1-2">카페</S.LinkWrapper>
              </S.Li>
            </S.Ul>
          </S.Menu>
        </S.DropdownContainer>

        <S.DropdownContainer>
          <S.DropdownButton onClick={CultureHandler} ref={CultureRef}>
            문화생활
          </S.DropdownButton>
          <S.Menu isDropped={CultureIsOpen}>
            <S.Ul>
              <S.Li>
                <S.LinkWrapper href="#2-1">영화</S.LinkWrapper>
              </S.Li>
              <S.Li>
                <S.LinkWrapper href="#2-2">놀이공원</S.LinkWrapper>
              </S.Li>
              <S.Li>
                <S.LinkWrapper href="#2-3">게임</S.LinkWrapper>
              </S.Li>
            </S.Ul>
          </S.Menu>
        </S.DropdownContainer>

        <S.DropdownContainer>
          <S.DropdownButton onClick={ShopHandler} ref={ShopRef}>
            쇼핑
          </S.DropdownButton>
          <S.Menu isDropped={ShopIsOpen}>
            <S.Ul>
              <S.Li>
                <S.LinkWrapper href="#3-1">옷</S.LinkWrapper>
              </S.Li>
              <S.Li>
                <S.LinkWrapper href="#3-2">신발</S.LinkWrapper>
              </S.Li>
              <S.Li>
                <S.LinkWrapper href="#3-3">화장품</S.LinkWrapper>
              </S.Li>
            </S.Ul>
          </S.Menu>
        </S.DropdownContainer>
      </S.Container>
      <S.Line />
    </>
  );
};
