import * as S from "./Header.styled"

const Header = () => {
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
                <S.Menu src="./img/header/menu.svg"/>
            </S.Container>
        </header>
    )
}

export default Header