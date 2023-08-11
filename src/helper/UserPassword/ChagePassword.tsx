import { useState } from "react";
import * as S from "./ChangePassword.styled";

export function ChangePassword() {
  const [newPW, setNewPW] = useState("");
  const [confPW, setConfPW] = useState("");

  const onNewPW = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPW(event.target.value);
  };
  const onConfPW = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfPW(event.target.value);
  };

  return (
    <S.Container>
      <img
        style={{ width: "280px", height: "50px", marginTop: "90px" }}
        alt="Logo_IMG"
        src="img/Logo.png"
      />
      <S.Ticket>
        <S.Form>
          <S.InputForm>
            <S.Icon alt="lockCheck_Icon.png" src="icon/lockCheck_Icon.png" />
            <S.Input placeholder="비밀번호" onChange={onNewPW} value={newPW} />
          </S.InputForm>
          <S.InputForm>
            <S.Icon alt="lock_Icon.png" src="icon/lock_Icon.png" />
            <S.Input
              type="password"
              placeholder="비밀번호 확인"
              onChange={onConfPW}
              value={confPW}
            />
          </S.InputForm>
          <S.Button>다음</S.Button>
        </S.Form>
      </S.Ticket>
    </S.Container>
  );
}
