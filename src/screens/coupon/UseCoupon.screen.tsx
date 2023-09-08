import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./UseCoupon.styled";
import { useGetCoupon, useGetMyPageBrand, useUser } from "../../hooks";
import { GetCouponRes } from "../../services";
import { Layout } from "../../components/common/Layout";
import { Nav } from "../../components/common/Nav";
import LeftSide from "../../components/common/Side/LeftSide";

export function UseCoupon() {
  const { couponId } = useParams();
  const [isStarClicked, setIsStarClicked] = useState(false);
  const [coupon, setCoupon] = useState<GetCouponRes>();

  const navigate = useNavigate();
  const user = useUser();
  const getCoupon = useGetCoupon(Number(couponId));
  const getMyPageBrand = useGetMyPageBrand(user.token?.userEmail || "");

  const handleStarClick = () => {
    setIsStarClicked(!isStarClicked);
  };

  useEffect(() => {
    if (getCoupon.isSuccess) {
      setCoupon(getCoupon.data?.data);
    } else {
      alert("유효하지 않는 쿠폰입니다.");
    }

    if (getMyPageBrand.isSuccess) {
      const brandData = getMyPageBrand.data?.data;

      brandData.forEach((data) => {
        if (data.brandId === coupon?.brandId) setIsStarClicked(!isStarClicked);
      });
    }
  }, []);

  if (!coupon) {
    // 쿠폰 데이터가 아직 로드되지 않은 경우 로딩 스피너 또는 메시지를 표시할 수 있습니다.
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Nav />
      <S.Container>
        <LeftSide />
        <S.LContainer>
          <S.CouponWrapper>
            <S.TextWrapper>
              <S.BrandName>{coupon.brandName}</S.BrandName>
              <S.Name>{coupon.couponName}</S.Name>
              <S.DateText>
                <p>{coupon.startDate}~</p>
                <p>{coupon.endDate}</p>
              </S.DateText>
            </S.TextWrapper>
            <S.BrandImgBox>
              <S.Logo src={`${process.env.PUBLIC_URL}${coupon.brandImgUrl}`} />
            </S.BrandImgBox>
          </S.CouponWrapper>
          <S.LinkWrapper>
            <a href={`${coupon.couponUrl}`}>
              <S.LinkImg
                src={`${process.env.PUBLIC_URL}/img/coupon/logo.svg`}
              />
            </a>
            <S.LinkText> 👈 쿠폰 페이지 바로가기</S.LinkText>
          </S.LinkWrapper>
          {coupon.description && <S.InfoBox>{coupon.description}</S.InfoBox>}
        </S.LContainer>
        <S.Line />
        <S.RContainer>
          <S.Review
            role="button"
            onClick={() => {
              navigate(`/write/review?couponId=${couponId}`);
            }}
          >
            후기작성
          </S.Review>
          <S.StarContainer>
            <S.TextWrapper2>
              <S.BrandText>{coupon.brandName}</S.BrandText>
              <S.CouponText>{coupon.couponName}</S.CouponText>
            </S.TextWrapper2>
            <S.Star role="button" onClick={handleStarClick}>
              {/* 조건부 렌더링을 사용하여 이미지를 변경 */}
              {isStarClicked ? (
                <img
                  src={`${process.env.PUBLIC_URL}/icon/auth/BStar.svg`}
                  alt="BStar"
                />
              ) : (
                <img
                  src={`${process.env.PUBLIC_URL}/icon/auth/AStar.svg`}
                  alt="AStar"
                />
              )}
            </S.Star>
          </S.StarContainer>
          <S.SatisfactionBox>
            <S.Satisfaction>
              <S.SatisfactionButton
                src={`${process.env.PUBLIC_URL}/icon/auth/good.svg`}
              />
              <S.SatisfactionText>{coupon.likeCount}명 만족</S.SatisfactionText>
            </S.Satisfaction>
            <S.unSatisfaction>
              <S.unSatisfactionButton
                src={`${process.env.PUBLIC_URL}/icon/auth/bad.svg`}
              />
              <S.unSatisfactionText>
                {coupon.dislikeCount}명 불만족
              </S.unSatisfactionText>
            </S.unSatisfaction>
          </S.SatisfactionBox>
          <S.Number>{coupon.couponCode}</S.Number>
          <S.ReviewPage>제품 후기</S.ReviewPage>
        </S.RContainer>
      </S.Container>
    </Layout>
  );
}
