import { Screen } from "../../../components";
import { CenterScreen } from "../../main";
export function MainScreen() {
  return (
    <Screen header={true} nav={false} side={false} footer={true}>
      <CenterScreen />
    </Screen>
  );
}
