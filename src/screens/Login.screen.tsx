import axios from "axios";
import { useState } from "react";
import Layout from "../components/Layout/Layout";

interface postLoginReq {
  id: string;
  password: string;
}

interface postLoginRes {
  accessToken: string;  //로컬스토리지
  refreshToken: string;  //쿠키
}

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
    const postReq: postLoginReq ={
      id: email,
      password: password
    }
    console.log(email, password);
    try {
      const res = await axios.post<postLoginRes>('https://kacpta-stg.mommoss.com/api/v3/auth/login', postReq);
      const accessToken = res.data.accessToken;
      localStorage.setItem('accessToken', accessToken);

      const refreshToken = res.data.refreshToken;
      document.cookie = `refreshToken=${refreshToken}; path=/; secure; HttpOnly`;
    } catch (error) {
      alert('없는 아이디 혹은 비밀번호 오류');
    }

  };

  return (
    <Layout>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        style={{ width: "315.23px", height: "58.21px", margin: "10px" }}
        alt="Logo_IMG"
        src="img/Logo.png"
      />
      <div
        style={{
          height: "300px",
          width: "10px",
          backgroundImage: "url(./img/Ticket.png)",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "500px",
              height: "40px",
              border: "2px solid #3C87BD",
              borderRadius: "30px",
              padding: "15px",
              marginBottom: "5px",
            }}
          >
            <img
              style={{ width: "35px", height: "35px", margin: "10px" }}
              alt="person_Icon.png"
              src="icon/person_Icon.png"
            />
            <input
              style={{ border: "none", outline: "none", fontSize: "20px" }}
              placeholder="아이디"
              onChange={onEmail}
              value={email}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "500px",
              height: "40px",
              border: "2px solid #3C87BD",
              borderRadius: "30px",
              padding: "15px",
            }}
          >
            <img
              style={{ width: "35px", height: "35px", margin: "10px" }}
              alt="lock_Icon.png"
              src="icon/lock_Icon.png"
            />
            <input
              style={{ border: "none", outline: "none", fontSize: "20px" }}
              placeholder="비밀번호"
              onChange={onPassword}
              value={password}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            style={{ width: "20px", height: "20px", margin: "5px" }}
            alt="check_circle_Icon.png"
            src="icon/check_circle_Icon.png"
          />
          <div style={{ fontSize: "15px", width: "100%" }}>
            로그인 상태 유지
          </div>
        </div>
        <button
          style={{
            backgroundColor: "#3C87BD",
            borderRadius: "7px",
            border: "none",
            color: "white",
            width: "618px",
            height: "67px",
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={onLogin}
        >
          로그인
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{ cursor: "pointer", margin: "10px" }}
          onClick={() => {
            alert("아이디 찾기");
          }}
        >
          아이디 찾기 |
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            alert("비밀번호 찾기");
          }}
        >
          비밀번호 찾기 |
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            alert("회원가입");
          }}
        >
          회원가입
        </div>
      </div>
      <div>
        <img
          style={{ width: "35px", height: "35px", margin: "5px" }}
          alt="kakao_Icon.png"
          src="icon/kakao_Icon.png"
        />
        <img
          style={{ width: "35px", height: "35px", margin: "5px" }}
          alt="naver_Icon.png"
          src="icon/naver_Icon.png"
        />
        <img
          style={{ width: "35px", height: "35px", margin: "5px" }}
          alt="google_Icon.png"
          src="icon/google_Icon.png"
        />
      </div>
    </div>
    </Layout>
  );
}