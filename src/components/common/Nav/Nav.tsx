import React, { useState } from "react";
import * as S from "./Nav.styled";
import useDetectClose from "./useDetectClose";

export const Nav: React.FC = () => {
  const [FoodIsOpen, FoodRef, FoodHandler] = useDetectClose(false);
  const [CultureIsOpen, CultureRef, CultureHandler] = useDetectClose(false);
  const [ShopIsOpen, ShopRef, ShopHandler] = useDetectClose(false);

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

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
                <S.LinkWrapper
                  href="#1-1"
                  isSelected={selectedItem === "식당"}
                  onClick={() => setSelectedItem("식당")}
                >
                  식당
                </S.LinkWrapper>
              </S.Li>
              <S.Li>
                <S.LinkWrapper
                  href="#1-2"
                  isSelected={selectedItem === "카페"}
                  onClick={() => setSelectedItem("카페")}
                >
                  카페
                </S.LinkWrapper>
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
                <S.LinkWrapper
                  href="#2-1"
                  isSelected={selectedItem === "영화"}
                  onClick={() => setSelectedItem("영화")}
                >
                  영화
                </S.LinkWrapper>
              </S.Li>
              <S.Li>
                <S.LinkWrapper
                  href="#2-2"
                  isSelected={selectedItem === "놀이공원"}
                  onClick={() => setSelectedItem("놀이공원")}
                >
                  놀이공원
                </S.LinkWrapper>
              </S.Li>
              <S.Li>
                <S.LinkWrapper
                  href="#2-3"
                  isSelected={selectedItem === "게임"}
                  onClick={() => setSelectedItem("게임")}
                >
                  게임
                </S.LinkWrapper>
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
                <S.LinkWrapper
                  href="#3-1"
                  isSelected={selectedItem === "옷"}
                  onClick={() => setSelectedItem("옷")}
                >
                  옷
                </S.LinkWrapper>
              </S.Li>
              <S.Li>
                <S.LinkWrapper
                  href="#3-2"
                  isSelected={selectedItem === "신발"}
                  onClick={() => setSelectedItem("신발")}
                >
                  신발
                </S.LinkWrapper>
              </S.Li>
              <S.Li>
                <S.LinkWrapper
                  href="#3-3"
                  isSelected={selectedItem === "화장품"}
                  onClick={() => setSelectedItem("화장품")}
                >
                  화장품
                </S.LinkWrapper>
              </S.Li>
            </S.Ul>
          </S.Menu>
        </S.DropdownContainer>
      </S.Container>
      <S.Line />
    </>
  );
};
