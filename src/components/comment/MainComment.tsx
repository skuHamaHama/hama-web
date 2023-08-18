import { useState, useEffect } from "react";
import { GetCommentDataRes } from "../../services";
import { useGetComment } from "../../hooks";
import { commentData_3 } from "./";

import * as S from "./MainComment.styled";

export function MainComment() {
  const groupSize = 3;
  const [commentData, setCommentData] = useState<GetCommentDataRes[]>([]);
  const [groups, setGroups] = useState<GetCommentDataRes[][]>([]);

  const getComment = useGetComment();
  const mapDataInGroups = (
    groupSize: number,
    commentData: GetCommentDataRes[]
  ) => {
    const groups = [];
    for (let i = 0; i < commentData.length; i += groupSize) {
      groups.push(commentData.slice(i, i + groupSize));
    }
    return groups;
  };

  useEffect(() => {
    getComment().then((res) => {
      if (res) setCommentData(res);
      if (commentData) {
        const groups = mapDataInGroups(groupSize, commentData.flat());
        setGroups(groups);
      } else {
        const groups = mapDataInGroups(groupSize, commentData_3.flat());
        setGroups(groups);
        alert("댓글 정보가 없습니다.");
      }
    });
  }, []);

  return (
    <S.Container>
      {groups.map((group, groupIndex) => (
        <S.BlueContainer key={groupIndex}>
          {group.map((comment: GetCommentDataRes, idx: number) => (
            <div key={idx}>
              <S.Img
                src={`${process.env.PUBLIC_URL}/icon/auth/profile_Icon.svg`}
              />
              <S.CommentInfo>
                <S.Brand>{comment.brandName}</S.Brand>
                <S.Coupon>{comment.couponName}</S.Coupon>
                <S.Comment>{comment.comment}</S.Comment>
              </S.CommentInfo>
            </div>
          ))}
        </S.BlueContainer>
      ))}
    </S.Container>
  );
}
