import { useNavigate } from "react-router-dom";
import {
  PostJoinReq,
  PostEmailVerifyReq,
  PostRegisterNicknameReq,
  PostResetPasswordReq,
  PostSavePasswordReq,
  postJoin,
  postEmailVerify,
  postRegisterNickname,
  postResetPassword,
  postSavePassword,
} from "../../../services";

//회원가입
export function usePostJoin() {
  const navigate = useNavigate();
  const join = async (data: PostJoinReq) => {
    try {
      await postJoin(data);
      navigate("/login");
    } catch (error) {
      alert(error + ": 회원가입 오류");
    }
  };
  return join;
}

//인증 요청
export function usePostEmailConfirm() {
  const emailConfirm = async (email: PostEmailVerifyReq) => {
    try {
      const response = await postEmailVerify(email);
      if (response.status) alert("인증 요청이 완료되었습니다.");
      else alert("존재하지 않는 이메일입니다.");
    } catch (error) {
      alert(error + ": 인증 요청 오류");
    }
  };
  return emailConfirm;
}

//중복 확인
export function usePostRegisterNickname() {
  const registerNickname = async (data: PostRegisterNicknameReq) => {
    try {
      const response = await postRegisterNickname(data);
      if (response.status) alert("사용 가능한 닉네입 입니다.");
      else alert("존재하는 닉네임입니다.");
    } catch (error) {
      alert(error + ": 중복 확인 오류");
    }
  };
  return registerNickname;
}

//비밀번호 변경 URL
export function usePostRessetPassword() {
  const navigate = useNavigate();
  const ressetPassword = async (data: PostResetPasswordReq) => {
    try {
      const response = await postResetPassword(data);
      if (response.status) {
        alert("이메일을 확인해주세요.");
        navigate("./pwInquiry");
      } else {
        alert("존재하지 않는 이메일입니다.");
      }
    } catch (error) {
      alert(error + ": 비밀번호 변경");
    }
  };
  return ressetPassword;
}

//새 비밀번호 전송
export function usePostSavePassword() {
  const navigate = useNavigate();
  const savePassword = async (data: PostSavePasswordReq) => {
    try {
      await postSavePassword(data);
      alert("비밀번호가 변경되었습니다.");
      navigate("/login");
    } catch (error) {
      alert(error + ": 비밀번호 변경 요청 오류");
    }
  };
  return savePassword;
}
