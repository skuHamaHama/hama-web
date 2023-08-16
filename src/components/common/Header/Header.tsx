import { useState } from "react";
import * as S from "./Header.styled";
import Sidebar from "../Side/Sidebar";
import { Search } from "../Search";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSide = () => {
    setIsOpen(true);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header>
      <S.Container>
        <S.Logo src={`${process.env.PUBLIC_URL}/img/header/logo.svg`} />
        <S.InputWrapper>
          {/* 검색 입력란 */}
          <S.Input />
          {/* 검색 아이콘 */}
          <S.SearchBtn
            role="button"
            src={`${process.env.PUBLIC_URL}/img/header/searchIcon.svg`}
            onClick={toggleSearch}
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
              src={`${process.env.PUBLIC_URL}/img/header/bell.svg`}
            />
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
      {/* 검색 목록 스크롤 컴포넌트 */}
      {isSearchOpen && (
        <div style={{ marginTop: "0px", marginLeft: "470px" }}>
          <Search />
        </div>
      )}
    </header>
  );
};
