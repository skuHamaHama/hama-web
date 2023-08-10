import { useState } from "react";
import * as S from "./Header.styled";
import Sidebar from "../Side/Sidebar";
// import Sidebar2 from "../Side/Sidebar2";

const Header = () => {
  //사이드 바
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };

  return (
    <header
      style={{
        top: "0",
        left: "0",
        width: "100%",
        // position: "fixed"
      }}
    >
      <S.Container>
        <S.Logo src="./img/header/logo.svg" />
        <S.InputWrapper>
          <S.Input />
          <S.SearchBtn role="button" src="./img/header/searchIcon.svg" />
        </S.InputWrapper>
        <S.SubWrapper>
          <S.Auth>
            <S.Text>로그인</S.Text>
            <S.Text>회원가입</S.Text>
          </S.Auth>
          <S.IconSet>
            <S.Icon role="button" src="./img/header/bell.svg" />
            <S.Icon role="button" src="./img/header/fav.svg" />
            <S.Icon role="button" src="./img/header/profile.svg" />
            <S.Icon
              role="button"
              src="./img/header/menu.svg"
              onClick={toggleSide}
            />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          </S.IconSet>
        </S.SubWrapper>
      </S.Container>
    </header>
  );
};

export default Header;
