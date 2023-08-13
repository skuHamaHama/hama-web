import { useState } from "react";
import * as S from "./PwIncuiry.styled";

export function PsIncuryScreen() {
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
        src={`${process.env.PUBLIC_URL}/img/header/logo.svg`}
      />
      <S.Ticket>
        <S.Form>
          <S.InputForm>
            <S.Icon
              alt="lockCheck_Icon"
              src={`${process.env.PUBLIC_URL}/icon/auth/lockCheck_Icon.svg`}
            />
            <S.Input placeholder="비밀번호" onChange={onNewPW} value={newPW} />
          </S.InputForm>
          <S.InputForm>
            <S.Icon
              alt="lock_Icon"
              src={`${process.env.PUBLIC_URL}/icon/auth/lock_Icon.svg`}
            />
            <S.Input
              type="password"
              placeholder="비밀번호 확인"
              onChange={onConfPW}
              value={confPW}
            />
          </S.InputForm>
        </S.Form>
      </S.Ticket>
      <S.Button>다음</S.Button>
    </S.Container>
  );
}
