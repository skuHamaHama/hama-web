import { GetCommentRes } from "../../services";
import { commentData_3 } from "../../components";

import * as S from "./Comment.styled";

export function Comment({ commentData }: { commentData: GetCommentRes[] }) {
  if (!commentData) commentData = commentData_3;
  return (
    <S.Container>
      {commentData.map((comment: GetCommentRes, idx: number) => (
        <S.BlueContainer key={idx}>
          <S.Img src={`${process.env.PUBLIC_URL}/icon/auth/profile_Icon.svg`} />
          <S.CommentInfo>
            <S.Brand>{comment.brandName}</S.Brand>
            <S.Coupon>{comment.couponName}</S.Coupon>
          </S.CommentInfo>
          <S.Comment>{comment.comment}</S.Comment>
        </S.BlueContainer>
      ))}
    </S.Container>
  );
}
