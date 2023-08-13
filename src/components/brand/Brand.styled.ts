import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Brand = styled.img`
  background-image: url(${process.env.PUBLIC_URL}/img/coupon/coupon.svg);
`;
