import { useState } from "react";
import * as S from "./Header.styled";
import Sidebar from "../Side/Sidebar";
// import { Search } from "../Search";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBellOpen, setIsBellOpen] = useState(false);
  // const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSide = () => {
    setIsOpen(true);
  };

  const toggleBell = () => {
    setIsBellOpen(!isBellOpen); // 버튼을 클릭할 때마다 상태를 토글

    if (isBellOpen) {
      // isBellOpen이 true일 때만 alert 창 표시
      alert("알림이 도착했습니다.");

      // 알림이 뜬 후에 벨 아이콘 숨기기
      setIsBellOpen(false);
    }
  };

  // const toggleSearch = () => {
  //   setIsSearchOpen(!isSearchOpen);
  // };

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
            // onClick={toggleSearch}
          />
        </S.InputWrapper>
        <S.SubWrapper>
          <S.Auth>
            <S.Text>로그인</S.Text>
            <S.Text>회원가입</S.Text>
          </S.Auth>
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
      </S.Container>
      {/* 검색 목록 스크롤 컴포넌트 */}
      {/* {isSearchOpen && (
        <div style={{ marginTop: "0px", marginLeft: "470px" }}>
          <Search />
        </div>
      )} */}
    </header>
  );
};
