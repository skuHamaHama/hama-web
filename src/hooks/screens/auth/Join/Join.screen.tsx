import { useState } from "react";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";

const InputLogoStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 460px;
  height: 50px;
  border: 2px solid #3c87bd;
  border-radius: 20px;
  margin-bottom: 50px;
  background: linear-gradient(to left, white 85%, #3c87bd 15%);
`;

const InputLogo = {
  background: "linear-gradient(to left, white 85%, #3c87bd 15%)",
};

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

  // const handleSubmit = () => {
  //   const match = password === confirmedPassword;
  //   setPasswordMatch(match);
  // };

  // const onJoin = async () => {
  //   const joinData: postJoinReq = {
  //     id: email,
  //     password: password,
  //     nickname: nickname,
  //   };

  //   try {
  //     axios.post("localhost:8080/auth/login", joinData);
  //     navigate("/login");
  //   } catch {
  //     alert("회원가입 오류");
  //   }
  // };

  // useEffect(() => {
  //   //Password Confirmation
  //   const match = password === confirmedPassword;
  //   setPasswordMatch(match);
  // }, [password, confirmedPassword]);

  // const sendAuthorizationRequest = () => {
  //   //Authentication Request
  //   try {
  //     axios.post("localhost:8080/join/authorization", { email });
  //   } catch {
  //     alert("인증 요청에 실패하였습니다.");
  //   }
  // };

  // const handleAuthorizationConfirm = () => {
  //   //Authentication Confirmation
  //   try {
  //     axios.post("localhost:8080/join/authorization", { code });
  //   } catch {
  //     alert("인증 오류");
  //   }
  // };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "280px", height: "50px", marginTop: "80px" }}
        alt="Logo_IMG"
        src="img/Logo.png"
      />
      <div
        style={{
          fontWeight: "bold",
          margin: "45px 440px 45px 0",
        }}
      >
        회원정보를 입력해주세요
      </div>
      <div>
        <InputLogoStyle>
          <MailOutlined
            style={{
              color: "white",
              fontSize: "30px",
              margin: "0 20px 0 20px",
            }}
          />

          <input
            style={{
              border: "none",
              outline: "none",
              placeContent: "#C6C6C6",
              fontWeight: "bold",
              fontSize: "20px",
              margin: "0 35px 0 30px",
              opacity: "55%",
            }}
            placeholder="아이디(이메일)"
            onChange={onChange}
            value={email}
          />
          <button
            style={{
              backgroundColor: "#3C87BD",
              borderRadius: "7px",
              border: "none",
              color: "white",
              width: "130px",
              height: "35px",
              fontSize: "15px",
              cursor: "pointer",
              marginLeft: "30px",
            }}
          >
            인증요청
          </button>
        </InputLogoStyle>
        <div
          style={{
            ...InputLogo,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "600px",
            height: "30px",
            border: "2px solid #3C87BD",
            borderRadius: "20px",
            padding: "15px",
            marginBottom: "50px",
          }}
        >
          <img
            style={{ width: "35px", height: "35px", margin: "0 20px 0 15px" }}
            alt="Code_IMG"
            src="icon/code_Icon.png"
          />

          <input
            style={{
              border: "none",
              outline: "none",
              placeContent: "#C6C6C6",
              fontWeight: "bold",
              fontSize: "20px",
              marginLeft: "30px",
              opacity: "55%",
            }}
            placeholder="인증번호 입력"
            value={code}
            onChange={onChange}
          />
          <button
            style={{
              backgroundColor: "#3C87BD",
              borderRadius: "7px",
              border: "none",
              color: "white",
              width: "130px",
              height: "35px",
              fontSize: "15px",
              cursor: "pointer",
              marginLeft: "65px",
            }}
          >
            인증확인
          </button>
        </div>
        <div
          style={{
            ...InputLogo,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "600px",
            height: "30px",
            border: "2px solid #3C87BD",
            borderRadius: "20px",
            padding: "15px",
            marginBottom: "50px",
          }}
        >
          <LockOutlined
            style={{
              color: "white",
              fontSize: "30px",
              margin: "0 20px 0 20px",
            }}
          />

          <input
            style={{
              border: "none",
              outline: "none",
              placeContent: "#C6C6C6",
              fontWeight: "bold",
              fontSize: "20px",
              marginLeft: "30px",
              opacity: "55%",
            }}
            placeholder="비밀번호"
            value={password}
            onChange={onChange}
          />
        </div>
        <div
          style={{
            ...InputLogo,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "600px",
            height: "30px",
            border: "2px solid #3C87BD",
            borderRadius: "20px",
            padding: "15px",
            marginBottom: "50px",
          }}
        >
          <UserOutlined
            style={{
              color: "white",
              fontSize: "30px",
              margin: "0 20px 0 20px",
            }}
          />

          <input
            style={{
              border: "none",
              outline: "none",
              placeContent: "#C6C6C6",
              fontWeight: "bold",
              fontSize: "20px",
              marginLeft: "30px",
              opacity: "55%",
            }}
            placeholder="닉네임"
            value={nickname}
            onChange={onChange}
          />
        </div>
        <div
          style={{
            ...InputLogo,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "600px",
            height: "30px",
            border: "2px solid #3C87BD",
            borderRadius: "20px",
            padding: "15px",
            marginBottom: "50px",
          }}
        >
          <LockOutlined
            style={{
              color: "white",
              fontSize: "30px",
              margin: "0 20px 0 20px",
            }}
          />
          <input
            style={{
              border: "none",
              outline: "none",
              placeContent: "#C6C6C6",
              fontWeight: "bold",
              fontSize: "20px",
              marginLeft: "30px",
              opacity: "55%",
            }}
            placeholder="비밀번호 확인"
            value={confirmedPassword}
            onChange={onChange}
          />
        </div>
      </div>
      <button></button>

      <br />
      <label>
        비밀번호:
        <input type="password" value={password} onChange={onChange} />
      </label>
      <br />
      <br />
      <label>
        비밀번호 확인:
        <input type="password" value={confirmedPassword} onChange={onChange} />
      </label>
      {/* <button onClick={handleSubmit}>확인</button> */}
      {/* {passwordMatch && <p>비밀번호가 일치합니다.</p>}
      {!passwordMatch && confirmedPassword !== "" && (
        <p>비밀번호가 일치하지 않습니다.</p>
      )} */}
    </div>
  );
};
