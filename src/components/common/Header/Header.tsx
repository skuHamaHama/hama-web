import { useState } from "react";
import { Link } from "react-router-dom"; // 추가
import * as S from "./Header.styled";
import Sidebar from "../Side/Sidebar";
import { Search } from "../Search";

export const Header = ({
  isAuthenticated,
  logout,
}: {
  isAuthenticated: boolean;
  logout: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBellOpen, setIsBellOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSide = () => {
    setIsOpen(true);
  };

  const toggleBell = () => {
    setIsBellOpen(!isBellOpen);

    if (!isBellOpen) {
      alert("알림이 도착했습니다.");
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <S.Container>
      <S.Logo src={`${process.env.PUBLIC_URL}/img/header/logo.svg`} />
      <S.InputWrapper>
        <S.Input />
        <S.SearchBtn
          role="button"
          src={`${process.env.PUBLIC_URL}/img/header/searchIcon.svg`}
          onClick={toggleSearch}
        />
      </S.InputWrapper>
      <S.SubWrapper>
        {isAuthenticated ? ( // 로그인 상태에 따라 렌더링
          <S.Auth>
            <Link to="/login" onClick={logout}>
              로그아웃
            </Link>
          </S.Auth>
        ) : (
          <S.Auth>
            <Link to="/login">로그인</Link>
            <Link to="/join">회원가입</Link>
          </S.Auth>
        )}
        <S.IconSet>
          {isBellOpen ? null : (
            <S.Icon
              role="button"
              src={`${process.env.PUBLIC_URL}/img/header/bell.svg`}
              onClick={toggleBell}
            />
          )}
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
      {isSearchOpen && (
        <div style={{ marginTop: "0px", marginLeft: "470px" }}>
          <Search />
        </div>
      )}
    </S.Container>
  );
};

export default Header;
