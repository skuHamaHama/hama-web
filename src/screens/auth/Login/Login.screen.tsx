import { DownCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { PostLoginReq } from "@services/auth";
import * as S from "./Login.styled";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onLogin = async () => {
    const postReq: PostLoginReq = {
      id: email,
      password: password,
    };

    //에러 처리 로직
    alert(postReq);
  };

  return (
    <S.Container>
      <img
        style={{ width: "280px", height: "50px", marginTop: "90px" }}
        alt="Logo_IMG"
        src="img/Logo.png"
      />
      <S.Ticket>
        <S.LoginForm>
          <S.InputForm>
            <S.Icon alt="person_Icon.png" src="icon/person_Icon.png" />
            <S.Input placeholder="아이디" onChange={onEmail} value={email} />
          </S.InputForm>
          <S.InputForm>
            <S.Icon alt="Password.png" src="icon/lock_Icon.png" />
            <S.Input
              type="password"
              placeholder="비밀번호"
              onChange={onPassword}
              value={password}
            />
          </S.InputForm>
          <S.StateForm>
            <DownCircleOutlined
              style={{ opacity: "55%", marginRight: "10px" }}
            />
            <S.State>로그인 상태 유지</S.State>
          </S.StateForm>
          <S.Button onClick={onLogin}>로그인</S.Button>
        </S.LoginForm>
      </S.Ticket>

      <S.Find>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            alert("아이디 찾기");
          }}
        >
          아이디 찾기
        </div>
        <div style={{ margin: "0 15px 0 15px" }}>|</div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            alert("비밀번호 찾기");
          }}
        >
          비밀번호 찾기
        </div>
        <div style={{ margin: "0 15px 0 15px" }}>|</div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            alert("회원가입");
          }}
        >
          회원가입
        </div>
      </S.Find>
      <div>
        <S.SocialIcon alt="kakao_Icon.png" src="social/kakao_Icon.png" />
        <S.SocialIcon alt="naver_Icon.png" src="social/naver_Icon.png" />
        <S.SocialIcon alt="google_Icon.png" src="social/google_Icon.png" />
      </div>
    </S.Container>
  );
}
