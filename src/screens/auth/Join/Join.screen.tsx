import { useState } from "react";
import * as S from "./Join.styled";

export const Join: React.FC = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setPassword(event.target.value);
    setConfirmedPassword(event.target.value);
    setCode(event.target.value);
    setNickname(event.target.value);
  };

  return (
    <S.Container>
      <img
        style={{ width: "280px", height: "50px", marginTop: "80px" }}
        alt="Logo_IMG"
        src="img/Logo.png"
      />
      <S.JoinForm>
        <S.Text>회원정보를 입력해주세요</S.Text>

        <S.InputForm>
          <S.Icon alt="mail_Icon.png" src="icon/mail_Icon.png" />
          <S.InputStyle>
            <S.Input
              placeholder="아이디(이메일)"
              onChange={onChange}
              value={email}
            />
            <S.Button>인증요청</S.Button>
          </S.InputStyle>
        </S.InputForm>
        <S.InputForm>
          <S.Icon alt="code_Icon.png" src="icon/code_Icon.png" />
          <S.InputStyle>
            <S.Input
              placeholder="인증번호 입력"
              value={code}
              onChange={onChange}
            />
            <S.Button>인증확인</S.Button>
          </S.InputStyle>
        </S.InputForm>
        <S.InputForm>
          <S.Icon alt="password_Icon.png" src="icon/password_Icon.png" />
          <S.Input
            placeholder="비밀번호"
            value={password}
            onChange={onChange}
          />
        </S.InputForm>
        <S.InputForm>
          <S.Icon
            alt="passwordCheck_Icon.png"
            src="icon/passwordCheck_Icon.png"
          />
          <S.Input
            placeholder="비밀번호 확인"
            value={confirmedPassword}
            onChange={onChange}
          />
        </S.InputForm>
        <S.InputForm>
          <S.Icon alt="nickname_Icon.png" src="icon/nickname_Icon.png" />
          <S.Input placeholder="닉네임" value={nickname} onChange={onChange} />
        </S.InputForm>
        <S.SubmitButton>하마하마 시작하기</S.SubmitButton>
      </S.JoinForm>
    </S.Container>
  );
};
