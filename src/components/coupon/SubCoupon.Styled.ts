import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  margin-bottom: 50px;
`;

export const CouponGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0 40px 0;
`;

export const Coupon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 230px;
  height: 100px;
  background-image: url(${process.env.PUBLIC_URL}/img/coupon/coupon.svg);
  background-size: cover;
  background-position: center;
  margin: 0 30px 0 30px;
`;

export const CouponInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 10px 0 0 0;
`;
export const Text = styled.div`
  font-family: nanum-regular;
  font-size: 10px;
  margin: 0 30px 0 10px;
`;
export const CouponImg = styled.img`
  display: flex;
  justify-self: flex-end;
  height: 65px;
  width: 65px;
`;