import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 79px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 55px;
`;

export const PickerGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 15px 50px 20px 0;
`;

export const Picker = styled.div<{ pick: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.pick ? "#3C87BD" : "#B1E2FF")};
  margin-left: 4px;
  cursor: pointer;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

export const bestCoupon = styled.div`
  height: 497px;
  width: 1264px;
  border-radius: 34px;
  background-color: #eff9ff;
`;

export const BlueContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 497px;
  width: 1300px;
  border-radius: 34px;
  background-color: #eff9ff;
  margin-top: 43px;
`;

export const newCoupon = styled.div``;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Coupon = styled.div`
  width: 304px;
  height: 127px;
  background-image: url("./img/main/Coupon.png");
  background-size: cover;
  margin-right: 112px;
`;

export const Text = styled.div`
  font-weight: bold;
  font-size: large;
  margin: 30px 0 0 0;
`;

export const IconGroup = styled.div`
  margin-top: 49.15px;
`;

export const Icon = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 40px;
`;
