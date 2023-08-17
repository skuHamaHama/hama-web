import styled from "styled-components";
import { Header } from "../../../components/common";
import { Screen } from "../../../components";
import { HomeScreen, CenterScreen } from "../../main";
export function MainScreen() {
  return (
    <Screen header={false} nav={false} side={false} footer={true}>
      <Container>
        <Header />
        <HomeScreen />
        <CenterScreen />
      </Container>
    </Screen>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${process.env.PUBLIC_URL}/img/home/home.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
`;
