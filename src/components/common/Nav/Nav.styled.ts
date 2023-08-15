import styled, { css } from "styled-components";

export const Line = styled.div`
  border: 1px solid #3c87bd;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 270px;

  & p {
    font-size: 16px;
    padding: 0 60px 0 0;
  }
`;

export const Food = styled.div`
  cursor: pointer;
`;

export const Culture = styled.div`
  cursor: pointer;
`;

export const Shopping = styled.div`
  cursor: pointer;
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
`;

export const DropdownButton = styled.div`
  cursor: pointer;
`;

export const Menu = styled.div`
  background: gray;
  position: absolute;
  top: 52px;
  left: 50%;
  width: 100px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
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
    border-bottom-color: gray;
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
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Li = styled.li``;

export const LinkWrapper = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: white;
`;
