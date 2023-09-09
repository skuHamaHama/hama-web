import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BlueContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 950px;
  border-radius: 10px;
  background-color: #eff9ff;
  padding: 10px 20px 10px 20px;
  margin: 0 30px 20px 30px;
`;
export const Img = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 20px 0 0;
`;
export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5px 0 0 5px;
`;

export const Brand = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Coupon = styled.div`
  font-size: 14px;
`;

export const Comment = styled.p`
  align-self: center;
  font-size: 14px;
  line-height: 16px;
  white-space: nowrap;
  max-width: 200px;
  margin-left: 20px;
`;
