import { useState } from "react";
import * as S from "./Header.styled"
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
                }}>
            <S.Container>
                <S.Logo src="./img/header/logo.svg"/>
                <S.Input />
                <S.SearchIcon src="./img/header/searchIcon.svg"/>
                <S.MenuBtn role="button" onClick={toggleSide}>
                    <img src="./img/header/menu.svg"/>
                </S.MenuBtn>
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </S.Container>
        </header>
    )
}

export default Header;