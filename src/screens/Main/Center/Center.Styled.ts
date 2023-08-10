import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 79px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 99px;
`;

export const Picker = styled.div<{ pick: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.pick ? "#3C87BD" : "#B1E2FF")};
  margin: 0 7px;
  cursor: pointer;
`;

export const CouponContainer = styled.div`
  background-color: #eff9ff;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BestCoupon = styled.div`
  margin-bottom: 88px;
`;

export const NewCoupon = styled.div`
  display: flex;
`;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Coupon = styled.div`
  width: 304px;
  height: 127px;
  background-image: url("./img/main/Coupon.png");
  background-size: cover;
  margin-right: 112px;
`;

export const CouponGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;
`;

export const Text = styled.div`
  font-weight: bold;
  font-size: large;
  margin-bottom: 49px;
`;

export const Icon = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 40px;
`;
