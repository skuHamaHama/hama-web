import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 70%;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  width: 100%;
  margin: 50px 0 0 0;
`;

export const CouponContainer = styled.div``;

export const BlueContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
  width: 1200px;
  border-radius: 34px;
  background-color: #eff9ff;
  margin-top: 43px;
  padding: 40px 0 40px 0;
`;
export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Coupon = styled.div`
  width: 304px;
  height: 127px;
  background-image: url("./img/main/Coupon.png");
  background-size: cover;
  margin-right: 112px;
`;

export const Text = styled.div`
  font-weight: bold;
  font-size: large;
  margin: 10px 0 0 0;
`;

export const IconGroup = styled.div`
  width: 100%;
  margin-top: 49.15px;
`;

export const Icon = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 40px;
`;
