import styled from "styled-components";

export const Images: string[] = [
  "./img/home/page1.svg",
  "./img/home/page2.svg",
  "./img/home/page3.svg",
];

export const Bg = styled.div`
  display: flex;
  justify-content: center;
  background-image: url("./img/home/home.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  position: relative;
  width: 950px;
  height: 312px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  margin: 50px auto 10px auto;
`;

export const SliderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PickerWrapper = styled.div`
  position: absolute;
  left: 97%;
  top: 5%;
  transform: translate(-97%, -5%);
  display: flex;
`;

export const Picker = styled.div<{ background: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
  margin: 0 6px;
  cursor: pointer;
`;

export const Promo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  // margin-left: 50px;
`;

export const PromoImg1 = styled.img`
  display: flex;
  margin-right: 50px;
`;

export const PromoImg2 = styled.img`
  display: flex;
  margin-left: 50px;
`;
