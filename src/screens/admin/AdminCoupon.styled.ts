import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
`;
export const Container = styled.div`
  margin-top: 100px;
  margin-left: 30px;
  height: 636px;
  width: 957px;
  background-color: white;
  border: 1px solid #3c87bd;
  display: flex;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto; /* 스크롤 생성 */
`;

export const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #3c87bd;
`;
