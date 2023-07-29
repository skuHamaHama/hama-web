import styled from "styled-components";

const Container = styled.div`
    background-image: url("./img/intro/background.svg");
    background-size: cover;
    margin: 0px;
    width: 100vw;  //실행중인 스크린 크기에 맞춰 상대적 크기 반환
    height: 100vh;
    background-repeat: no-repeat;
`;

const Logo = styled.div`
    background-image: url("./img/intro/intro_logo.svg");
    background-repeat: no-repeat;
    position: absolute;
    top: 30px;
    left: 30px;
    width: 156.4px;
    height: 27.24px;
`;

const Computer = styled.div`
    background-image: url("./img/intro/computer.svg");
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 775px;
    height: 458px;
`;

const Receipt = styled.div`
    background-image: url("./img/intro/receipt.svg");
    background-repeat: no-repeat;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 187px;
    height: 109px;
`;

export function Intro() {
    return (
        <Container>
            <Logo />
            <Computer />
            <Receipt />
        </Container>
    );
  }