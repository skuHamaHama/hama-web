import styled, { css } from "styled-components";

export const Line = styled.div`
  margin-top: 15px;
  border: 1px solid #3c87bd;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 270px;

  & p {
    font-size: 16px;
    padding: 0 60px 0 0;
  }
`;

export const Wrapper = styled.div`
  margin: 100px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 19px;
  background: gray;
  width: 400px;
  height: 50px;
  font-weight: bold;
`;

export const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
  margin-right: 60px;
`;

export const DropdownButton = styled.div`
  cursor: pointer;
`;

interface MenuProps {
  isDropped: boolean;
}

export const Menu = styled.div<MenuProps>`
  background: #b1e2ff;
  position: absolute;
  top: 52px;
  left: 50%;
  text-align: center;
  border-radius: 10px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: #b1e2ff;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

export const Ul = styled.ul`
  & > li {
    margin-top: 5px;
    margin-right: 20px;
    margin-bottom: 5px;
  }

  & > li:first-of-type {
    margin-left: 20px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Li = styled.li``;

export const LinkWrapper = styled.a<{ isSelected: boolean }>`
  font-size: 14px;
  white-space: nowrap;
  text-decoration: none;
  color: ${({ isSelected }) => (isSelected ? "#3C87BD" : "black")};
`;
