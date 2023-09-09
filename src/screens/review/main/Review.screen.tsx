import React, { useState, useEffect } from "react";
import { Layout, Nav, Comment } from "../../../components";
import LeftSide from "../../../components/common/Side/LeftSide";
import { useGetCommentList } from "../../../hooks";
import { GetCommentRes } from "../../../services";
import * as S from "./Review.styled";

export function ReviewScreen() {
  const [commentData, setCommentData] = useState<GetCommentRes[]>([]);
  const getCommentList = useGetCommentList();

  useEffect(() => {
    if (getCommentList.isSuccess) {
      setCommentData(getCommentList.data.data);
    }
  }, []);

  return (
    <Layout>
      <Nav />
      <S.Layout>
        <LeftSide />
        <S.Container>
          <S.Text>댓글 목록</S.Text>
          <S.Line />
          <Comment commentData={commentData} />
        </S.Container>
      </S.Layout>
    </Layout>
  );
}
