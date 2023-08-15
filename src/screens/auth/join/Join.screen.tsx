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
  const [confirmedVerify, setConfirmedVerify] = useState(false);
  const [confirmedNickname, setConfirmedNickname] =
    useState<PostNicknameConfirmRes>({ status: false });
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const join = usePostJoin();
  const sendEmailVerify = usePostEmailConfirm();
  const accessNickname = usePostNicknameAccess();

  const onId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, email: event.target.value });
  };
  const onPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, password: event.target.value });
  };
  const onNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, nickname: event.target.value });
  };

  const postReq: PostJoinReq = {
    email: form.email,
    password: form.password,
    nickname: form.nickname,
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
