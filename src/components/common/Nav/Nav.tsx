import React, { useState } from "react";
import * as S from "./Nav.styled";
import useDetectClose from "./useDetectClose";

//카테고리와 번호 매핑
export const Nav: React.FC = () => {
  const categoryNumbers: Record<string, number> = {
    식당: 1,
    카페: 2,
    여행: 3,
    취미: 4,
    옷: 5,
    신발: 6,
    화장품: 7,
  };

  //카테고리명을 번호로 변환
  //선택한 카테고리의 번호를 받아 해당 카테고리명을 반환
  //categoryNumbers를 이용하여 번호에 해당하는 카테고리명을 찾음
  function getCategoryNameByNumber(categoryNumber: number): string | undefined {
    for (const [categoryName, number] of Object.entries(categoryNumbers)) {
      if (number === categoryNumber) {
        return categoryName;
      }
    }
    return undefined; // 일치하는 번호를 찾지 못한 경우
  }

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
                  isSelected={selectedItem === "식당"}
                  onClick={() => {
                    setSelectedItem("식당");
                    const categoryNumber = categoryNumbers["식당"];
                    const categoryName =
                      getCategoryNameByNumber(categoryNumber);
                    if (categoryName) {
                      console.log(categoryName);
                      // 원하는 작업 수행
                    } else {
                      console.log("일치하는 카테고리명을 찾을 수 없습니다.");
                    }
                  }}
                >
                  식당
                </S.LinkWrapper>
              </S.Li>
              <S.Li>
                <S.LinkWrapper
                  isSelected={selectedItem === "카페"}
                  onClick={() => {
                    setSelectedItem("카페");
                    const categoryNumber = categoryNumbers["카페"];
                    const categoryName =
                      getCategoryNameByNumber(categoryNumber);
                    if (categoryName) {
                      console.log(categoryName);
                      // 원하는 작업 수행
                    } else {
                      console.log("일치하는 카테고리명을 찾을 수 없습니다.");
                    }
                  }}
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
                  isSelected={selectedItem === "여행"}
                  onClick={() => {
                    setSelectedItem("여행");
                    const categoryNumber = categoryNumbers["여행"];
                    const categoryName =
                      getCategoryNameByNumber(categoryNumber);
                    if (categoryName) {
                      console.log(categoryName);
                      // 원하는 작업 수행
                    } else {
                      console.log("일치하는 카테고리명을 찾을 수 없습니다.");
                    }
                  }}
                >
                  여행
                </S.LinkWrapper>
              </S.Li>
              <S.Li>
                <S.LinkWrapper
                  isSelected={selectedItem === "취미"}
                  onClick={() => {
                    setSelectedItem("취미");
                    const categoryNumber = categoryNumbers["취미"];
                    const categoryName =
                      getCategoryNameByNumber(categoryNumber);
                    if (categoryName) {
                      console.log(categoryName);
                      // 원하는 작업 수행
                    } else {
                      console.log("일치하는 카테고리명을 찾을 수 없습니다.");
                    }
                  }}
                >
                  취미
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
                  isSelected={selectedItem === "옷"}
                  onClick={() => {
                    setSelectedItem("옷");
                    const categoryNumber = categoryNumbers["옷"];
                    const categoryName =
                      getCategoryNameByNumber(categoryNumber);
                    if (categoryName) {
                      console.log(categoryName);
                      // 원하는 작업 수행
                    } else {
                      console.log("일치하는 카테고리명을 찾을 수 없습니다.");
                    }
                  }}
                >
                  옷
                </S.LinkWrapper>
              </S.Li>
              <S.Li>
                <S.LinkWrapper
                  isSelected={selectedItem === "신발"}
                  onClick={() => {
                    setSelectedItem("신발");
                    const categoryNumber = categoryNumbers["신발"];
                    const categoryName =
                      getCategoryNameByNumber(categoryNumber);
                    if (categoryName) {
                      console.log(categoryName);
                      // 원하는 작업 수행
                    } else {
                      console.log("일치하는 카테고리명을 찾을 수 없습니다.");
                    }
                  }}
                >
                  신발
                </S.LinkWrapper>
              </S.Li>
              <S.Li>
                <S.LinkWrapper
                  isSelected={selectedItem === "화장품"}
                  onClick={() => {
                    setSelectedItem("화장품");
                    const categoryNumber = categoryNumbers["화장품"];
                    const categoryName =
                      getCategoryNameByNumber(categoryNumber);
                    if (categoryName) {
                      console.log(categoryName);
                      // 원하는 작업 수행
                    } else {
                      console.log("일치하는 카테고리명을 찾을 수 없습니다.");
                    }
                  }}
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
