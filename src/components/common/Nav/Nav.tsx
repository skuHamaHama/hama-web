import React, { useState } from "react";
import * as S from "./Nav.styled";
import useDetectClose from "./useDetectClose";
import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
  // useDetectClose -> 열림, 닫힘 커스텀 훅
  const [FoodIsOpen, FoodRef, FoodHandler] = useDetectClose(false);
  const [CultureIsOpen, CultureRef, CultureHandler] = useDetectClose(false);
  const [ShopIsOpen, ShopRef, ShopHandler] = useDetectClose(false);

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleMenuItemClick = (categoryName: string) => {
    setSelectedItem(categoryName);
  };

  return (
    <>
      <S.Container>
        <S.DropdownContainer>
          <S.DropdownButton onClick={FoodHandler} ref={FoodRef}>
            음식
          </S.DropdownButton>
          <S.Menu isDropped={FoodIsOpen}>
            <S.Ul>
              <S.Li isSelected={selectedItem === "식당"}>
                <Link to={"/coupon/category/식당"}>식당</Link>
              </S.Li>
              <S.Li isSelected={selectedItem === "카페"}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={"/coupon/category/카페"}
                  onClick={() => handleMenuItemClick("카페")}
                >
                  카페
                </Link>
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
              <S.Li isSelected={selectedItem === "여행"}>
                <Link
                  to={"/coupon/category/여행"}
                  onClick={() => handleMenuItemClick("여행")}
                >
                  여행
                </Link>
              </S.Li>
              <S.Li isSelected={selectedItem === "취미"}>
                <Link
                  to={"/coupon/category/취미"}
                  onClick={() => handleMenuItemClick("취미")}
                >
                  취미
                </Link>
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
              <S.Li isSelected={selectedItem === "옷"}>
                <Link
                  to={"/coupon/category/옷"}
                  onClick={() => handleMenuItemClick("옷")}
                >
                  옷
                </Link>
              </S.Li>
              <S.Li isSelected={selectedItem === "신발"}>
                <Link
                  to={"/coupon/category/신발"}
                  onClick={() => handleMenuItemClick("신발")}
                >
                  신발
                </Link>
              </S.Li>
              <S.Li isSelected={selectedItem === "화장품"}>
                <Link
                  to={"/coupon/category/화장품"}
                  onClick={() => handleMenuItemClick("화장품")}
                >
                  화장품
                </Link>
              </S.Li>
            </S.Ul>
          </S.Menu>
        </S.DropdownContainer>
      </S.Container>
      <S.Line />
    </>
  );
};
