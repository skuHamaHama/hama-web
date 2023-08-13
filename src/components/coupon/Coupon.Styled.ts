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
  margin: 40px 0 40px 0;
`;

export const Coupon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 330px;
  height: 140px;
  background-image: url("./img/coupon/coupon.svg");
  background-size: cover;
  margin: 0 30px 0 30px;
`;

export const CouponInfo = styled.div`
  margin-right: 20px;
`;
export const Text = styled.div`
  font-family: nanum-regular;
  font-size: small;
  margin-bottom: 10px;
`;
export const CouponImg = styled.img`
  display: flex;
  justify-self: flex-end;
  height: 80px;
  width: 80px;
`;
