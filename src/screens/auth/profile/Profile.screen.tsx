import { useState } from "react";
import { PostProfileReq, PostNicknameConfirmReq } from "../../../services";
import * as S from "./Profile.styled";
import { usePostNicknameAccess } from "@hooks/axios/auth/usePostNicknameAccess";

export function ProfileScreen() {
  const [form, setForm] = useState({
    nickname: "",
    password: "",
  });
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const accessNickname = usePostNicknameAccess;
  const onPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, password: event.target.value });
  };
  return (
    <div>
      <S.BlueContainer>
        <S.Profile>
          <div>프로필 수정</div>
          <img></img>
        </S.Profile>
        <S.ProfileInfo>
          <S.InputForm>
            <S.Text>닉네임 변경</S.Text>
            <S.Button
              onClick={() => {
                const postReq: PostNicknameConfirmReq = {
                  nickname: form.nickname,
                };
                accessNickname(postReq);
              }}
            ></S.Button>
          </S.InputForm>
          <S.InputForm>
            <S.Text>비밀번호 변경</S.Text>
            <S.Input value={form.password} onChange={onPassword} />
          </S.InputForm>
          <S.InputForm>
            <S.Text>비밀번호 확인</S.Text>
            <S.Input
              value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />
          </S.InputForm>
        </S.ProfileInfo>
        <input
          placeholder="인증번호 입력"
          onChange={(e) => setVerify(e.target.value)}
          value={nickname}
        />
      </S.BlueContainer>
    </div>
  );
}
