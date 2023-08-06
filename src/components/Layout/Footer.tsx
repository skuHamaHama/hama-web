import styled from "styled-components";

const Footer = () => {
    return (
        <footer style={{
            marginTop: "auto"
        }}>
            <Start/>
            <Logo src="./img/footer/logo.svg"/>
            <End/>
        </footer>
    )
}
const Start = styled.div`
    border: 1px solid #000000;
`;

const End = styled.div`
    border: 15px solid #358CC1;
`;

const Logo = styled.img`
    width: 184px;
    height: 35px;
    margin: 90px 0px 90px 70px;
`;

export default Footer