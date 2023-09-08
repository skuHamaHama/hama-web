import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostLogin, useUser } from "../../../hooks";
import { PostLoginReq } from "../../../services";

import { DownCircleOutlined } from "@ant-design/icons";
import * as S from "./Login.styled";

export function LoginScreen() {
  const [form, setForm] = useState<PostLoginReq>({
    email: "",
    password: "",
    loginKeep: false,
  });
  const user = useUser();
  const login = usePostLogin();
  const navigate = useNavigate();

  const submit = () =>
    login.mutate(form, {
      onError: (error) => {
        console.log(error);
        alert("로그인에 실패하였습니다.");
      },
      onSuccess: (res) => {
        const userToken = {
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
          userEmail: form.email,
        };
        user.updateUser(userToken);
        navigate("/home");
      },
    });

  return (
    <S.Container>
      <img
        style={{ width: "280px", height: "50px", marginTop: "90px" }}
        alt="Logo_IMG"
        src={`${process.env.PUBLIC_URL}/img/header/logo.svg`}
      />
      <S.Ticket>
        <S.LoginForm>
          <S.InputForm>
            <S.Icon
              alt="person_Icon.png"
              src={`${process.env.PUBLIC_URL}/icon/auth/person_Icon.svg`}
            />
            <S.Input
              placeholder="아이디"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              value={form.email}
            />
          </S.InputForm>
          <S.InputForm>
            <S.Icon
              alt="Password.png"
              src={`${process.env.PUBLIC_URL}/icon/auth/lock_Icon.svg`}
            />
            <S.Input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              value={form.password}
            />
          </S.InputForm>
          <S.StateForm>
            <DownCircleOutlined
              style={{
                opacity: form.loginKeep ? "100%" : "55%",
                marginRight: "10px",
              }}
              onClick={() => {
                setForm({ ...form, loginKeep: !form.loginKeep });
              }}
            />
            <S.State>로그인 상태 유지</S.State>
          </S.StateForm>
          <S.Button onClick={submit}>로그인</S.Button>
        </S.LoginForm>
      </S.Ticket>

      <S.Find>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/user/help");
          }}
        >
          비밀번호 찾기
        </div>
        <div style={{ margin: "0 15px 0 15px" }}>|</div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/join");
          }}
        >
          회원가입
        </div>
      </S.Find>
      <div>
        <S.SocialIcon
          alt="kakao_Icon.png"
          src={`${process.env.PUBLIC_URL}/icon/social/kakao_Icon.png`}
        />
        <S.SocialIcon
          alt="naver_Icon.png"
          src={`${process.env.PUBLIC_URL}/icon/social/naver_Icon.png`}
        />
        <S.SocialIcon
          alt="google_Icon.png"
          src={`${process.env.PUBLIC_URL}/icon/social/google_Icon.png`}
        />
      </div>
    </S.Container>
  );
}
