import { useState } from "react";
import {
  PostJoinReq,
  PostEmailVerifyReq,
  PostNicknameConfirmReq,
  PostNicknameConfirmRes,
} from "../../../services";
import {
  usePostJoin,
  usePostEmailConfirm,
  usePostNicknameAccess,
} from "../../../hooks";

import * as S from "./Join.styled";

export const JoinScreen: React.FC = () => {
  const [form, setForm] = useState<PostJoinReq>({
    email: "",
    password: "",
    nickname: "",
  });
  const [verify, setVerify] = useState("");
  const [isEmailRequestCompleted, setIsEmailRequestCompleted] = useState(false); // 이메일 인증 요청 완료 여부 상태 추가
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true); //비밀번호 일치
  const [passwordIsValid, setPasswordIsValid] = useState(true); //유효성검사
  const [isCodeValid, setIsCodeValid] = useState(false); //인증번호 일치 여부
  const [isVerificationCompleted, setIsVerificationCompleted] = useState(false); // 인증 완료 여부 상태 추가
  const join = usePostJoin();
  const sendEmailVerify = usePostEmailConfirm();
  const accessNickname = usePostNicknameAccess();

  const onId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, email: event.target.value });
  };
  const onPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setForm({ ...form, password: newPassword });
    setPasswordsMatch(newPassword === confirmedPassword);
    setPasswordIsValid(validatePassword(newPassword));
  };

  const onConfirmedPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = event.target.value;
    setConfirmedPassword(confirmPassword);
    setPasswordsMatch(form.password === confirmPassword);
    setIsVerificationCompleted(false); // 비밀번호 입력이 변경되면 인증 완료 여부 초기화
  };

  const onNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, nickname: event.target.value });
  };

  const postReq: PostJoinReq = {
    email: form.email,
    password: form.password,
    nickname: form.nickname,
  };

  const isEmailValid = (id: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(id);
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  //임시 인증번호
  const testCode = "user123";

  const onVerifyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerify(event.target.value);
    setIsCodeValid(event.target.value === testCode);
  };

  const handleEmailVerifyClick = () => {
    if (isEmailValid(form.id)) {
      const postReq: PostEmailVerifyReq = { id: form.id };
      sendEmailVerify(postReq);
      setIsEmailRequestCompleted(true); // 이메일 인증 요청 완료 상태 업데이트
    }
    if (!isEmailValid(form.id)) {
      alert("이메일 형식으로 입력해주세요.");
    }
  };

  const handleVerifyClick = () => {
    if (!isCodeValid) {
      alert("인증번호가 일치하지 않습니다.");
    } else {
      const postReq: PostEmailConfirmReq = { verify: verify };
      accessEmail(postReq);
      setIsVerificationCompleted(true); // 인증이 완료되었음을 표시
    }
  };

  return (
    <S.Container>
      <img
        style={{ width: "280px", height: "50px", marginTop: "90px" }}
        alt="Logo_IMG"
        src={`${process.env.PUBLIC_URL}/img/header/logo.svg`}
      />
      <S.JoinForm>
        <S.Text>회원정보를 입력해주세요</S.Text>

        <S.InputForm>
          <S.Icon
            alt="mail_Icon"
            src={`${process.env.PUBLIC_URL}/icon/auth/mail_Icon.svg`}
          />
          <S.InputStyle>
            <S.Input
              placeholder="아이디(이메일)"
              onChange={onId}
              value={form.email}
            />
            <S.Button
              onClick={() => {
                const postReq: PostEmailVerifyReq = { email: form.email };
                sendEmailVerify(postReq);
              }}
            >
              인증요청
            </S.Button>
          </S.InputStyle>
        </S.InputForm>
        <S.InputForm>
          <S.Icon
            alt="code_Icon"
            src={`${process.env.PUBLIC_URL}/icon/auth/code_Icon.svg`}
          />
          <S.InputStyle>
            <S.Input
              placeholder="인증번호 입력"
              onChange={(e) => setVerify(e.target.value)}
              value={verify}
            />
            <S.Button>인증확인</S.Button>
          </S.InputStyle>
        </S.InputForm>
        <S.InputForm>
          <S.Icon
            alt="password_Icon"
            src={`${process.env.PUBLIC_URL}/icon/auth/password_Icon.svg`}
          />
          <S.Input
            placeholder="비밀번호"
            value={form.password}
            onChange={onPassword}
          />
        </S.InputForm>
        <S.InputForm>
          <S.Icon
            alt="passwordCheck_Icon"
            src={`${process.env.PUBLIC_URL}/icon/auth/passwordCheck_Icon.svg`}
          />
          <S.Input
            placeholder="비밀번호 확인"
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
        </S.InputForm>
        {form.password !== confirmedPassword && (
          <p>비밀번호가 일치하지 않습니다.</p>
        )}
        <S.InputForm>
          <S.Icon
            alt="nickname_Icon"
            src={`${process.env.PUBLIC_URL}/icon/auth/nickname_Icon.svg`}
          />
          <S.Input
            placeholder="닉네임"
            value={form.nickname}
            onChange={onNickname}
          />
        </S.InputForm>
        <S.Button
          onClick={() => {
            const postReq: PostNicknameConfirmReq = { nickname: form.nickname };
            const confirmedNickname = accessNickname(postReq);
            setConfirmedNickname(confirmedNickname);
          }}
        >
          중복확인
        </S.Button>
        <S.SubmitButton
          onClick={() => {
            if (confirmedVerify && confirmedNickname) {
              join(postReq);
            }
          }}
        >
          하마하마 시작하기
        </S.SubmitButton>
      </S.JoinForm>
    </S.Container>
  );
};
