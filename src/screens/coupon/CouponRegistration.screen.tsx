import { useState } from "react";
import { Layout } from "../../components/common/Layout";
import { Nav } from "../../components/common/Nav";
import * as S from "./CouponRegistration.styled";
import LeftSide from "../../components/common/Side/LeftSide";

export function CouponRegistration() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    brand: "",
    name: "",
    date: "",
    link: "",
    code: "",
    userText: "",
  });

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handlePutButtonClick = () => {
    // 사용자가 입력한 값 출력 테스트
    console.log("Input values:", inputValues);
  };

  return (
    <Layout>
      <Nav />
      <S.Container>
        <LeftSide />
        <S.Wrapper>
          <S.Text>쿠폰 등록</S.Text>
          <S.InputWrapper>
            <S.Input
              placeholder="브랜드"
              name="brand"
              value={inputValues.brand}
              onChange={handleInputChange}
            />
            <S.SearchIcon
              role="button"
              src={`${process.env.PUBLIC_URL}/icon/auth/searchIcon.svg`}
              onClick={toggleSearch}
            />
          </S.InputWrapper>
          <S.Name
            placeholder="상품 이름"
            name="name"
            value={inputValues.name}
            onChange={handleInputChange}
          />
          <S.Date
            placeholder="2023.00.00~2024.00.00"
            name="date"
            value={inputValues.date}
            onChange={handleInputChange}
          />
          <S.Link
            placeholder="링크"
            name="link"
            value={inputValues.link}
            onChange={handleInputChange}
          />
          <S.Code
            placeholder="쿠폰번호"
            name="code"
            value={inputValues.code}
            onChange={handleInputChange}
          />
          <S.Bottom>
            <S.ReviewBox>
              <S.User
                name="userText"
                value={inputValues.userText}
                onChange={handleInputChange}
                placeholder="이 쿠폰에 대한 소개글을 작성해주세요 (200자)"
                maxLength={200}
              ></S.User>
            </S.ReviewBox>
            <S.Put
              role="button"
              src={`${process.env.PUBLIC_URL}/img/auth/registration.svg`}
              onClick={handlePutButtonClick}
            />
          </S.Bottom>
        </S.Wrapper>
      </S.Container>
    </Layout>
  );
}
