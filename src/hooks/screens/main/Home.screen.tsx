import * as S from "./Home.styled";
import Layout from "../../../components/common/Layout";
import { useCallback, useEffect, useState } from "react";

// const Slider = (): JSX.Element => {
// }

export function Home() {

    const [pickers, setPicker] = useState<JSX.Element[]>([]);

    const [pickIndex, setPickIndex] = useState<number>(0);

    const onPickIndex = useCallback((idx: number): void => {
        if (pickIndex === idx) {
          // 선택되어 있는 인덱스를 클릭시에는 아무것도 실행하지 않는다.
          return;
        }
      
        setPickIndex(idx);
      }, [pickIndex]);
      
      useEffect(() => {
        // 이미지의 갯수만큼 pickers JSX.Element[] 배열 state에 생성하여 넣어준다.
        setPicker(S.Images.map((_: string, idx: number) => {
          return (
            <S.Picker
              onClick={() => onPickIndex(idx)}
              background={pickIndex === idx ? '#3C87BD' : '#B1E2FF'}
            >
            </S.Picker>
          );
        }));
      }, [onPickIndex, pickIndex]);

    return (
        <S.Bg>
            <Layout>
                <S.Container>
                    <S.SliderImg src={S.Images[pickIndex]} />
                    {/* pickIndex라는 state 변수를 이용하여 그에 맞는 이미지 렌더링 */}
                    
                    <S.PickerWrapper>
                        {pickers}
                    </S.PickerWrapper>

                </S.Container>     
                <S.Promo>
                    <img src="./img/home/img1.svg"/>
                    <img src="./img/home/img2.svg"/>
                </S.Promo>
            </Layout>
        </S.Bg>
    );
}
