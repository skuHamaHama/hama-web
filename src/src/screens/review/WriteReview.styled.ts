import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //   align-items: center;
  height: 100%;
  width: 100%;
  margin-left: 50px;
`;
export const Wrapper = styled.div`
  display: flex;
  //   justify-content: center;
  //   align-items: center;
  height: 100%;
  width: 100%;
`;

export const Line = styled.div`
  margin-top: 30px;
  border: 1px solid #3c87bd;
  width: 1095px;
`;

export const LContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 592px;
  height: 491px;
  background-color: #eff9ff;
  border-radius: 10px;
  margin-top: 30px;
`;

export const CouponWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  background-image: url(${process.env.PUBLIC_URL}/img/coupon/coupon.svg);
  width: 397px;
  height: 170px;
`;

export const TextWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 35px;
  margin-top: 10px;
  width: 200px;
  height: auto;

`;

export const TextWrapper2 = styled.div`
  margin-top: 0px;
  margin-right: 0px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;

export const Name = styled.div`
  margin-top: 10px;
  margin-left: 40px;
  font-size: 15px;
`;

export const BrandName = styled.div`
  font-family: SUIT-Bold;
  font-size: 25px;
`;

export const CouponName = styled.div`
  font-family: SUIT-Light;
  height: 20px;
  overflow: hidden;
  font-size: 15px;
`;

export const Logo = styled.img`
  // background-image: url(${process.env.PUBLIC_URL}/img/coupon/logo.svg);
  position: absolute;
  left: 17em;
  top: 2em;
  display: flex;
  width: 90px;
  height: 90px;
  border-radius: 70%;
  `;

export const RContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 30px;
`;

export const DateText = styled.div`
  font-family: SUIT-Light;
  font-size: 3px;
`;

export const ReviewBox = styled.div`
  display: flex;
  width: 413px;
  height: 173px;
  background-color: #b1e2ff;
  border-radius: 10px;
  margin-top: 30px;
  margin-left: 28px;
`;

export const ReviewPage = styled.div`
  margin-top: 30px;
  margin-left: 28px;
`;

export const User = styled.textarea`
  font-family: SUIT-Bold;
  font-weight: bold;
  display: flex;
  outline: none;
  border: none;
  resize: none;
  background: transparent;
  width: 413px;
  height: 173px;
  border-radius: 10px;
  padding: 10px;
`;

export const Satisfaction = styled.div`
  display: flex;
  //   justify-content: space-around;
  margin-top: 30px;
  margin-left: 20px;
`;

interface SatisfactionButtonProps {
  isActive: boolean; // isActive를 isSelected로 수정
}

export const SatisfactionButton = styled.button<SatisfactionButtonProps>`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  // filter: ${({ isActive }) => (isActive ? "invert(1)" : "invert(0)")};
`;

export const Put = styled.img`
  cursor: pointer;
  width: 146px;
  height: 55px;
  margin-top: 30px;
  margin-left: 330px;
`;
