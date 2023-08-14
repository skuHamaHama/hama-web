import { Screen } from "@components/screen";
import * as S from "./Category.styled";

export function CategoryScreen() {
  return (
    <Screen header={true} nav={false} footer={true}>
      <S.Container></S.Container>
    </Screen>
  );
}
