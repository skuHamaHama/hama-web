import { Brand, Screen } from "../../../components";
import * as S from "../../user/me/main";
import * as C from "./SearchBrand.styled";

export function SearchBrandScreen() {
  const GroupSize = 5; //분할 개수
  // const searchBrand =
  return (
    <Screen header={true} nav={true} side={true} footer={true}>
      <S.MyCoupon>
        <div style={{ height: "100px" }}></div>
        <S.TextGroup>
          <S.Text>브랜드 찾기</S.Text>
          <C.SearchContainer>
            <C.InputContainer>
              <C.Input />
            </C.InputContainer>
            <C.SearchButton
              alt="Search_Icon"
              src={`${process.env.PUBLIC_URL}/img/header/searchIcon.svg`}
            />
          </C.SearchContainer>
        </S.TextGroup>
        <S.Line />
        <Brand groupSize={GroupSize} />
      </S.MyCoupon>
    </Screen>
  );
}
