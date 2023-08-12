import { useState, useCallback, useEffect } from "react";
import * as S from "./Home.styled";

export function HomeScreen() {
  const [pickers, setPicker] = useState<JSX.Element[]>([]);
  const [pickIndex, setPickIndex] = useState<number>(0);

  const onPickIndex = useCallback(
    (idx: number): void => {
      if (pickIndex === idx) {
        return;
      }
      setPickIndex(idx);
    },
    [pickIndex]
  );

  useEffect(() => {
    setPicker(
      S.Images.map((_: string, idx: number) => (
        <S.Picker
          key={idx}
          onClick={() => onPickIndex(idx)}
          background={pickIndex === idx ? "#3C87BD" : "#B1E2FF"}
        />
      ))
    );
  }, [onPickIndex, pickIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPickIndex((prevIndex) => (prevIndex + 1) % S.Images.length);
    }, 3000); // 3초마다 이미지 변경

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <S.Bg>
        <S.Container>
          <S.SliderImg src={S.Images[pickIndex]} alt="slider image" />
          <S.PickerWrapper>{pickers}</S.PickerWrapper>
        </S.Container>
        <S.Promo>
          <S.PromoImg1 src="./img/home/img1.svg" alt="promo image" />
          <S.PromoImg2 src="./img/home/img2.svg" alt="promo image" />
        </S.Promo>
      </S.Bg>
    </div>
  );
}
