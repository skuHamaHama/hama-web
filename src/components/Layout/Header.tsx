import styled from "styled-components";

const Header = () => {
    return (
        <header 
            style={{
                top: "0", 
                left: "0", 
                width: "100%",
                position: "fixed"}}>
            <Container>
                <Logo src="./img/header/logo.svg"/>
                <Input />
                <SearchIcon src="./img/header/searchIcon.svg"/>
                <Menu src="./img/header/menu.svg"/>
            </Container>
        </header>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color: white;
`;

const Logo = styled.img`
    margin: 30px;
    width: 214px;
    height: 40px;
    display: flex;
`;

const Input = styled.input`
    display: flex;
    text-align: center;
    border: 1px solid #3C87BD;
    border-radius: 25px;
    outline: none;
    width: 520px;
    height: 41px;
    margin: 30px 0px 0px 100px;
`;


const SearchIcon = styled.img`
    width: 40px;
    height: 38px;
    margin: 30px;
`;

const Menu = styled.img`
    width: 33px;
    height: 19px;
    margin: 40px 0px 0px 300px;
`;

export default Header