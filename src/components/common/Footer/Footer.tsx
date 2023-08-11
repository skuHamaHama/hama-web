import * as S from "./Footers.styled";

const Footer = () => {
  return (
    <footer>
      <S.Container>
        <S.Start />
        <S.Wrapper>
          <S.Logo src="./img/footer/logo.svg" />
          <p>
            <strong>페이지</strong>
          </p>
          <S.Page>
            <ul>
              <li>
                <a href="#">로그인/회원가입</a>
              </li>
              <li>
                <a href="#">관심상품</a>
              </li>
              <li>
                <a href="#">마이페이지</a>
              </li>
              <li>
                <a href="#">사용한 쿠폰</a>
              </li>
            </ul>
          </S.Page>
          <S.Line />
          <p>
            <strong>이메일</strong>
          </p>
          <S.Email>
            <ul>
              <li>happyyj01@naver.com</li>
            </ul>
          </S.Email>
          <S.Line />
          <S.Sns>
            <p>
              <strong>공식 SNS</strong>
            </p>
            <S.Insta src="./img/footer/instagram.svg" />
          </S.Sns>
          <ul>
            <li>@min_nnn.nnn</li>
            <li>@yu_deng29</li>
            <li>@boyoung_0l</li>
            <li>@yejikoo</li>
            <li>@softabc12</li>
            <li>@he_lljh</li>
          </ul>
        </S.Wrapper>
        <S.End />
      </S.Container>
    </footer>
  );
};

export default Footer;
