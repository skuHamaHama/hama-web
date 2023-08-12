import * as S from "./Nav.styled";

export const Nav = () => {
  return (
    <>
      <S.Container>
        <S.Food>
          <p>음식</p>
        </S.Food>
        <S.Culture>
          <p>문화생활</p>
        </S.Culture>
        <S.Shopping>
          <p>쇼핑</p>
        </S.Shopping>
      </S.Container>
      <S.Line />
    </>
  );
};
