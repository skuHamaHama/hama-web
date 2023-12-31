import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  //height: 100%;
`;

export const Logo = styled.img`
  margin: 30px 30px 0px 30px;
  width: 214px;
  height: 40px;
  display: flex;
`;

export const Input = styled.input`
  display: flex;
  border: 1px solid #3c87bd;
  border-radius: 25px;
  outline: none;
  width: 520px;
  height: 41px;
  margin: 0px;
  padding-left: 20px;
`;

export const Button = styled.button`
  border: none;
  background: none;
`;
export const SearchBtn = styled.img`
  width: 31px;
  height: 29px;
  margin: 0 20px 0 20px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  cursor: point;
`;

export const MenuBtn = styled.div`
  width: 33px;
  height: 19px;
  margin: 50px 0px 0px 20px;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 0px;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchList = styled.div`
  position: absolute;
  top: 5em;
  margin-left: 1em;
  z-index: 2;
`;
export const SubWrapper = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
`;

export const Auth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 0px;
  margin-right: 10px;
`;

export const IconSet = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  cursor: pointer;
`;

export const Text = styled.div`
  cursor: pointer;
  font-size: 10px;
  font-weight: 100;
  margin-right: 6px;
`;
