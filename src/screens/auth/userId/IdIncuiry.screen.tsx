import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./IdIncuiry.styled";

export function IdIncuryScreen() {
  const [ID, setId] = useState("");
  const navigate = useNavigate();

  const onID = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const isEmailValid = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const checkIdAndSubmit = () => {
    navigate("./pwInquiry");
  };

  return (
    <S.Container>
      <img
        style={{ width: "280px", height: "50px", marginTop: "90px" }}
        alt="Logo_IMG"
        src={`${process.env.PUBLIC_URL}/img/Logo.png`}
      />
      <S.Text>비밀번호를 찾기 위해 아이디를 입력해주세요.</S.Text>
      <S.Ticket>
        <S.Form>
          <S.InputForm>
            <S.Icon
              alt="person_Icon.png"
              src={`${process.env.PUBLIC_URL}/icon/auth/person_Icon.svg`}
            />
            <S.Input placeholder="아이디" onChange={onID} value={ID} />
          </S.InputForm>
        </S.Form>
      </S.Ticket>
      {!isEmailValid(ID) && <p>이메일 형식으로 입력해주세요.</p>}
      <S.Button onClick={checkIdAndSubmit} disabled={!isEmailValid(ID)}>
        다음
      </S.Button>
    </S.Container>
  );
}
