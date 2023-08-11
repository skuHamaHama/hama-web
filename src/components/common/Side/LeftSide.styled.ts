import styled from "styled-components";

export const Container = styled.div`
  width: 233px;
  height: 618px;
  background-color: #eff9ff;
  margin-top: 40px;
  margin-bottom: 200px;
`;

export const Info = styled.div`
  font-size: 15px;
  display: flex;
  padding: 30px 0 0 20px;
  cursor: pointer;
`;

export const CategoryMenuBox = styled.div`
  font-size: 15px;
  display: flex;
  padding: 0 0 0 20px;
  cursor: pointer;
`;

export const DropDownContainer = styled.ul`
  // width: 100%;
  // height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  list-style: none;
  padding: 0 0 0 20px;
  margin: 0px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  font-weight: 100;
  list-style: none;
  padding: 5px;
  z-index: 1;
  margin-top: 0.2rem;
`;

export const Line = styled.div`
  border: 1px solid #3c87bd;
  width: 182px;
  margin-bottom: 10px;
`;
