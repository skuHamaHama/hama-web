import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CouponGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;
`;

export const Coupon = styled.div`
  display: flex;
  align-items: center;
  width: 230px;
  height: 100px;
  background-image: url("./img/main/Coupon.png");
  background-size: cover;
  margin-right: 90px;
`;
