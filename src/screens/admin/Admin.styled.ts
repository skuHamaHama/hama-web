import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 217px;
  height: 40px;
  margin-top: 30px;
  margin-left: 30px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 287px;
  height: 681px;
  background-color: #eff9ff;
  margin-top: 30px;
  // font-family: "notosans-light";
`;

export const ListItem = styled.div<{ clicked: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  list-style: none;
  padding: 5px;
  z-index: 1;
  margin-top: 0.2rem;
  margin-left: 15px;
  cursor: pointer;

  /* 마우스 클릭 시 글자색 변경 */
  ${({ clicked }) =>
    clicked &&
    css`
      color: #3c87bd; /* 원하는 색상으로 변경 */
    `}
`;
