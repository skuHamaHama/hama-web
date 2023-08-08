import {
  DownCircleOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { PostLoginReq } from "@services/auth";
import Layout from "../../../../components/common/Layout";
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
      <Layout>
        <img
          style={{ width: "280px", height: "50px", marginTop: "80px" }}
          alt="Logo_IMG"
          src="img/Logo.png"
        />
        <S.Ticket>
          <div style={{ marginTop: "10px", padding: "60px 0 10px 0" }}>
            <S.InputStyle>
              <UserOutlined style={{ fontSize: "25px", margin: "5px" }} />
              <S.Input placeholder="아이디" onChange={onEmail} value={email} />
            </S.InputStyle>
            <S.InputStyle>
              <LockOutlined
                style={{
                  fontSize: "25px",
                  margin: "5px",
                }}
              />
              <S.Input
                type="password"
                placeholder="비밀번호"
                onChange={onPassword}
                value={password}
              />
            </S.InputStyle>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                margin: "10px",
                cursor: "pointer",
              }}
            >
              <DownCircleOutlined
                style={{ opacity: "55%", marginRight: "10px" }}
              />
              <div
                style={{ fontSize: "15px", width: "100%", fontWeight: "bold" }}
              >
                로그인 상태 유지
              </div>
            </div>
            <S.Button onClick={onLogin}>로그인</S.Button>
          </div>
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
          <S.Icon alt="kakao_Icon.png" src="icon/kakao_Icon.png" />
          <S.Icon alt="naver_Icon.png" src="icon/naver_Icon.png" />
          <S.Icon alt="google_Icon.png" src="icon/google_Icon.png" />
        </div>
      </Layout>
    </S.Container>
  );
}
