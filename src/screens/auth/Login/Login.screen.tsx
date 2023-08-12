import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostLogin } from "@hooks/axios";
import { PostLoginReq } from "@services/auth";

import { DownCircleOutlined } from "@ant-design/icons";
import * as S from "./Login.styled";

export function LoginScreen() {
  const [form, setForm] = useState<PostLoginReq>({
    id: "",
    password: "",
    state: false,
  });
  const [state, setState] = useState(false);
  const login = usePostLogin();
  const navigate = useNavigate();

  const postReq: PostLoginReq = {
    id: form.id,
    password: form.password,
    state: form.state,
  };

  return (
    <S.Container>
      <img
        style={{ width: "280px", height: "50px", marginTop: "90px" }}
        alt="Logo_IMG"
        src={`img/auth/Logo.svg`}
      />
      <S.Ticket>
        <S.LoginForm>
          <S.InputForm>
            <S.Icon alt="person_Icon.png" src={`icon/auth/person_Icon.svg`} />
            <S.Input
              placeholder="아이디"
              onChange={(e) => setForm({ ...form, id: e.target.value })}
              value={form.id}
            />
          </S.InputForm>
          <S.InputForm>
            <S.Icon alt="Password.png" src={`icon/auth/lock_Icon.svg`} />
            <S.Input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              value={form.password}
            />
          </S.InputForm>
          <S.StateForm>
            <DownCircleOutlined
              style={{ opacity: state ? "100%" : "55%", marginRight: "10px" }}
              onClick={() => {
                setState(!state);
              }}
            />
            <S.State>로그인 상태 유지</S.State>
          </S.StateForm>
          <S.Button
            onClick={() => {
              login(postReq).then(() => {
                navigate("/user/main");
              });
            }}
          >
            로그인
          </S.Button>
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
        <S.SocialIcon alt="kakao_Icon.png" src="./icon/social/kakao_Icon.png" />
        <S.SocialIcon alt="naver_Icon.png" src="./icon/social/naver_Icon.png" />
        <S.SocialIcon
          alt="google_Icon.png"
          src="./icon/social/google_Icon.png"
        />
      </div>
    </S.Container>
  );
}
