import styled from "styled-components";

export const Images: string[] = [
    './img/home/page1.svg',
    './img/home/page2.svg',
    './img/home/page3.svg'
];

export const Bg = styled.div`
    background-image: url('./img/home/home.png');
    width: 1366px;
    height: 832px;
    display: flex;
    justify-content: center; 
    align-items: center; 
`;

export const Container = styled.div`
    width: 1161px;
    height: 388px;
    // display: flex;
    // justify-content: center;
    // align-items: center; 
    margin: auto;
`;

export const SliderImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const PickerWrapper = styled.div`
  display: flex;
  margin: 5px;
`;


export const Picker = styled.div<{ background: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
  margin: 0 7px;
  cursor: pointer;
`;

export const Promo = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px;

`;
