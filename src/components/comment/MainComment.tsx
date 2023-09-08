import { useState, useEffect } from "react";
import { GetCommentRes } from "../../services";
import { useGetComment } from "../../hooks";
import { commentData_3 } from "./tempCommentData";

import * as S from "./MainComment.styled";

export function MainComment() {
  const groupSize = 3;
  const [commentData, setCommentData] = useState<GetCommentRes[]>([]);
  const [groups, setGroups] = useState<GetCommentRes[][]>([]);

  const getComment = useGetComment();

  const mapDataInGroups = (groupSize: number, commentData: GetCommentRes[]) => {
    const groups = [];
    for (let i = 0; i < commentData.length; i += groupSize) {
      groups.push(commentData.slice(i, i + groupSize));
    }
    return groups;
  };

  useEffect(() => {
    if (getComment.isSuccess) {
      setCommentData(getComment.data.data);
      const groups = mapDataInGroups(groupSize, commentData);
      setGroups(groups);
    } else if (getComment.isError) {
      const groups = mapDataInGroups(groupSize, commentData_3);
      setGroups(groups);
    }
  }, [getComment, commentData]);

  return (
    <S.Container>
      {groups.map((group, groupIndex) => (
        <S.CommentGroup key={groupIndex}>
          {group.map((comment: GetCommentRes, idx: number) => (
            <S.BlueContainer key={idx}>
              <S.Img
                src={`${process.env.PUBLIC_URL}/icon/auth/profile_Icon.svg`}
              />
              <S.CommentInfo>
                <S.Brand>{comment.brandName}</S.Brand>
                <S.Coupon>{comment.couponName}</S.Coupon>
                <S.Comment>{comment.comment}</S.Comment>
              </S.CommentInfo>
            </S.BlueContainer>
          ))}
        </S.CommentGroup>
      ))}
    </S.Container>
  );
}
