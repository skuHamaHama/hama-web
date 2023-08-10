import styled from "styled-components";

export const Container = styled.div``;

export const Picker = styled.div<{ pick: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.pick ? "#3C87BD" : "#B1E2FF")};
  margin: 0 7px;
  cursor: pointer;
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
