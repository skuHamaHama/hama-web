import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Idincury.styled";

export function ChangePassword() {
  const [ID, setId] = useState("");
  const navigate = useNavigate();
  const onID = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const checkIdAndSubmit = () => {
    navigate("/ChangePassword");
  };

  return (
    <S.Container>
      <img
        style={{ width: "280px", height: "50px", marginTop: "90px" }}
        alt="Logo_IMG"
        src="img/Logo.png"
      />
      <S.Ticket>
        <S.Form>
          <S.InputForm>
            <S.Icon alt="person_Icon.png.png" src="icon/person_Icon.png.png" />
            <S.Input placeholder="아이디" onChange={onID} value={ID} />
          </S.InputForm>
          <S.Button onClick={checkIdAndSubmit}>다음</S.Button>
        </S.Form>
      </S.Ticket>
    </S.Container>
  );
}
