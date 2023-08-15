import React, { useState } from "react";
import * as S from "./UseCoupon.styled";
import { Layout } from "../../components/common/Layout";
import { Nav } from "../../components/common/Nav";
// import { Search } from "../../components/common/Search";
import LeftSide from "../../components/common/Side/LeftSide";

export function UseCoupon() {
  const [isStarClicked, setIsStarClicked] = useState(false);

  const handleStarClick = () => {
    setIsStarClicked(!isStarClicked);
  };

  // 가상의 사용자 정보와 쿠폰 정보
  const currentUser = {
    id: "user123",
    // ... 기타 사용자 정보
  };

  const couponOwner = {
    id: "user123", // 예시로 현재 사용자와 같은 경우
    // ... 기타 쿠폰 소유자 정보
  };

  const canEditCoupon = currentUser.id === couponOwner.id;

  const handleEdit = () => {
    console.log("수정하기 버튼이 클릭되었습니다.");
    // 여기에 실제 수정하는 로직을 추가할 수 있습니다.
  };

  const handleRegister = () => {
    console.log("등록하기 버튼이 클릭되었습니다.");
    // 여기에 실제 등록하는 로직을 추가할 수 있습니다.
  };

  return (
    <Layout>
      <Nav />
      <S.Container>
        <LeftSide />
        <S.LContainer>
          <S.CouponWrapper>
            <S.TextWrapper>
              <S.Name>스타벅스 50% 할인</S.Name>
              <S.Name>2022.08.14 - 2023.08.14</S.Name>
            </S.TextWrapper>
            <S.Logo src={`${process.env.PUBLIC_URL}/img/coupon/logo.svg`} />
          </S.CouponWrapper>
          <S.LinkWrapper>
            <S.LinkImg src={`${process.env.PUBLIC_URL}/img/coupon/logo.svg`} />
            <S.Link>link</S.Link>
          </S.LinkWrapper>
          <S.InfoBox>브랜드 설명글</S.InfoBox>
        </S.LContainer>
        <S.Line />
        <S.RContainer>
          <S.Review role="button">후기작성</S.Review>
          <S.StarContainer>
            <S.TextWrapper2>
              <S.Text style={{ fontSize: 25 }}>스타벅스</S.Text>
              <S.Text style={{ fontSize: 15 }}>쿨라임 피지오</S.Text>
              <S.Text style={{ fontSize: 15 }}>
                00명이 이 쿠폰을 사용했습니다.
              </S.Text>
            </S.TextWrapper2>
            <S.Star role="button" onClick={handleStarClick}>
              {/* 조건부 렌더링을 사용하여 이미지를 변경 */}
              {isStarClicked ? (
                <img
                  src={`${process.env.PUBLIC_URL}/icon/auth/AStar.svg`}
                  alt="AStar"
                />
              ) : (
                <img
                  src={`${process.env.PUBLIC_URL}/icon/auth/BStar.svg`}
                  alt="BStar"
                />
              )}
            </S.Star>
          </S.StarContainer>
          <S.Satisfaction>
            <S.SatisfactionButton
              src={`${process.env.PUBLIC_URL}/icon/auth/good.svg`}
            />
            <S.SatisfactionText>00% 만족</S.SatisfactionText>
            <S.SatisfactionButton
              src={`${process.env.PUBLIC_URL}/icon/auth/bad.svg`}
            />
            <S.SatisfactionText>00% 불만족</S.SatisfactionText>
          </S.Satisfaction>
          <S.Number>쿠폰 번호</S.Number>
          <S.ReviewPage>제품 후기</S.ReviewPage>
          {canEditCoupon && (
            <S.User>
              <S.Edit
                src={`${process.env.PUBLIC_URL}/icon/auth/edit.svg`}
                role="button"
                onClick={handleEdit}
              />
              <S.Save
                src={`${process.env.PUBLIC_URL}/icon/auth/save.svg`}
                role="button"
                onClick={handleRegister}
              />
            </S.User>
          )}
        </S.RContainer>
      </S.Container>
    </Layout>
  );
}
