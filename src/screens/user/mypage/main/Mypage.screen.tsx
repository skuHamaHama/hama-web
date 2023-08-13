import { useNavigate } from "react-router-dom";
import { SubCoupon, Screen } from "../../../../components";
import * as S from "./MyPage.styled";

export function MyPageScreen() {
  const navigate = useNavigate();
  const GroupSize = 4; //분할 개수

  return (
    <Screen header={true} nav={true} side={true} footer={true}>
      <S.Container>
        <S.MainText>마이페이지</S.MainText>
        <S.MyCoupon>
          <S.TextGroup>
            <S.Text>최근 본 쿠폰</S.Text>
            <S.ViewText
              onClick={() => {
                navigate("./recent");
              }}
            >
              전체 보기
            </S.ViewText>
          </S.TextGroup>
          <S.Line />
          <SubCoupon groupSize={GroupSize} />
        </S.MyCoupon>
        <S.MyCoupon>
          <S.TextGroup>
            <S.Text>사용한 쿠폰</S.Text>
            <S.ViewText
              onClick={() => {
                navigate("./used");
              }}
            >
              전체 보기
            </S.ViewText>
          </S.TextGroup>
          <S.Line />
          <SubCoupon groupSize={GroupSize} />
        </S.MyCoupon>
        <S.MyCoupon>
          <S.TextGroup>
            <S.Text>찜한 쿠폰</S.Text>
            <S.ViewText
              onClick={() => {
                navigate("./wish");
              }}
            >
              전체 보기
            </S.ViewText>
          </S.TextGroup>
          <S.Line />
          <SubCoupon groupSize={GroupSize} />
        </S.MyCoupon>
        <S.MyCoupon>
          <S.TextGroup>
            <S.Text>등록한 쿠폰</S.Text>
            <S.ViewText
              onClick={() => {
                navigate("./recent");
              }}
            >
              전체 보기
            </S.ViewText>
          </S.TextGroup>
          <S.Line />
          <SubCoupon groupSize={GroupSize} />
        </S.MyCoupon>
      </S.Container>
    </Screen>
  );
}
