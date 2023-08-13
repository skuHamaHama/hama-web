import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const LContainer = styled.div`
  display: felx;
  flex-direction: column;
`;

export const CouponWrapper = styled.div`
  display: felx;
  flex-direction: row;
  background-image: url(${process.env.PUBLIC_URL}/img/coupon/coupon.svg);
  width: 397px;
  height: 170px;
  margin-top: 170px;
  margin-left: 50px;
`;

export const TexstWrapper = styled.div`
  margin-top: 120px;
  margin-right: 0px;
  display: felx;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 280px;
`;

export const Name = styled.div`
  display: felx;
  margin-top: 20px;
  margin-left: 40px;
  font-size: 15px;
`;

export const Logo = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/img/coupon/logo.svg);
  display: flex;
  width: 58px;
  height: 50px;
  margin-left: 295px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 55px;
`;

export const LinkImg = styled.img`
  width: 58px;
  height: 50px;
`;

export const Link = styled.div`
  fonst-size: 13px;
  margin-top: 20px;
  margin-left: 30px;
`;

export const Line = styled.div`
  height: 578px;
  border: 1px solid #3c87bd;
  margin-top: 90px;
  margin-left: 50px;
`;

export const InfoBox = styled.div`
  display: flex;
  // text-align: center;
  width: 413px;
  height: 76px;
  background-color: #eff9ff;
  border-radius: 15px;
  margin-top: 30px;
  margin-left: 50px;
`;

export const RContainer = styled.div`
  display: felx;
  flex-direction: column;
`;

export const Text = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 30px;
`;
