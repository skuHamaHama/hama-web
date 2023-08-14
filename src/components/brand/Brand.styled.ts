import styled from "styled-components";

export const Brand = styled.div`
  cursor: pointer;
  background-image: url(${process.env.PUBLIC_URL}/img/coupon/coupon.svg);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
`;

export const BrandGroup = styled.div`
  display: flex;
  flex-direction: row;
`;
