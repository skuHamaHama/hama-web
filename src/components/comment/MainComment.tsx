import { GetCommentData } from "../../services";
import { Comment } from "./";
import * as S from "./MainComment.styled";

export function MainComment({ page }: { page: string }) {
  const groupSize = 3;
  const mapDataInGroups = (data: GetCommentData[], groupSize: number) => {
    const groups = [];
    for (let i = 0; i < data.length; i += groupSize) {
      groups.push(data.slice(i, i + groupSize));
    }
    return groups;
  };

  // const data = mapDataInGroups(couponData_3, groupSize);

  return (
    <S.Container>
      {/* {data.map((group, groupIndex) => (
        <S.CouponGroup key={groupIndex}>
          {group.map((comment: GetCommentData, idx: number) => (
            <S.Comment key={idx} />
          ))}
        </S.CouponGroup>
      ))} */}
    </S.Container>
  );
}
