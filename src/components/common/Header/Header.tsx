import { useState } from "react";
import * as S from "./Header.styled";
import Sidebar from "../Side/Sidebar";

export const Header = () => {
  //const [accessToken, setAccessToken] = useState("");
  const [isOpen, setIsOpen] = useState(false); //사이드 바
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
        <S.Logo
          alt="Logo_IMG"
          src={`${process.env.PUBLIC_URL}/img/header/logo.svg`}
        />
        <S.InputWrapper>
          <S.Input />
          <S.SearchBtn
            role="button"
            alt="searchIcon"
            src={`${process.env.PUBLIC_URL}/img/header/searchIcon.svg`}
          />
        </S.InputWrapper>
        <S.SubWrapper>
          <S.Auth>
            <S.Text>로그인</S.Text>
            <S.Text>회원가입</S.Text>
          </S.Auth>
          <S.IconSet>
            <S.Icon
              role="button"
              src={`${process.env.PUBLIC_URL}/img/header/fav.svg`}
            />
            <S.Icon
              role="button"
              src={`${process.env.PUBLIC_URL}/img/header/profile.svg`}
            />
            <S.Icon
              role="button"
              src={`${process.env.PUBLIC_URL}/img/header/menu.svg`}
              onClick={toggleSide}
            />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          </S.IconSet>
        </S.SubWrapper>
      </S.Container>
    </header>
  );
};
