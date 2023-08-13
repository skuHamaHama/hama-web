import styled from "styled-components";
import { Screen } from "../../../components";
import { CenterScreen, HomeScreen } from "../../main";
export function MainScreen() {
  return (
    <Screen header={true} nav={false} side={false} footer={true}>
      <Container>
        <HomeScreen />
        <CenterScreen />
      </Container>
    </Screen>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: column;
`;
