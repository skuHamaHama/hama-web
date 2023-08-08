import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Ticket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 341.06px;
  width: 817px;
  background-image: url(./img/Ticket.png);
  background-size: cover;
  margin-top: 50px;
`;

export const InputStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 600px;
  height: 30px;
  border: 2px solid #3c87bd;
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  place-content: #c6c6c6;
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
  opacity: 55%;
`;

export const Button = styled.button`
  background-color: #3c87bd;
  border-radius: 7px;
  border: none;
  color: white;
  width: 630px;
  height: 67px;
  font-size: 30px;
`;

export const Find = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px;
  font-weight: bold;
`;

export const Icon = styled.img`
  width: 45px;
  height: 45px;
  margin: 5px;
`;
