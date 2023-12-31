import { useState, useEffect } from "react";
import { useGetMyPageCoupon } from "../../hooks";
import { GetCouponRes } from "../../services";
import * as S from "./SubCoupon.Styled";

export function MyPageCoupon({
  active,
  order,
}: {
  active: boolean;
  order: string;
}) {
  const groupSize = 4; //분할 개수
  const [currentPage, setCurrentPage] = useState(false); //페이지 번호
  const [couponData, setCouponData] = useState<GetCouponRes[]>([]);
  const [groups, setGroups] = useState<GetCouponRes[][]>([]);

  const getMyPageCoupon = useGetMyPageCoupon(order);

  const mapDataInGroups = (groupSize: number, couponData: GetCouponRes[]) => {
    const groups = [];
    for (let i = 0; i < couponData.length; i += groupSize) {
      groups.push(couponData.slice(i, i + groupSize));
    }
    return groups;
  };

  // getCouponData -> flat: 내부 배열을 풀어줌
  useEffect(() => {
    if (getMyPageCoupon.isSuccess) {
      setCouponData(getMyPageCoupon.data.data);
      const groups = mapDataInGroups(groupSize, couponData);
      setGroups(groups);
    }
  }, [getMyPageCoupon, couponData]);

  return (
    <S.Container>
      {groups.map((group, groupIndex) => (
        <S.CouponGroup key={groupIndex}>
          {group.map((coupon: GetCouponRes, idx: number) => (
            <S.Coupon key={idx}>
              <S.CouponInfo>
                <S.Text style={{ fontFamily: "bold", fontSize: "13px" }}>
                  {coupon.brandName}
                </S.Text>
                <S.Text>{coupon.couponName}</S.Text>
                <S.Text>
                  <p style={{ fontSize: "3px", margin: "0 0 -10px 0" }}>
                    {coupon.startDate}~
                  </p>
                  <p style={{ fontSize: "3px" }}>{coupon.endDate}</p>
                </S.Text>
              </S.CouponInfo>
              <S.BrandImg />
            </S.Coupon>
          ))}
        </S.CouponGroup>
      ))}
      <S.Button
        //currentPage는 boolean(고정), true일 경우 이전 버튼으로 바뀌어야 함
        src={`${process.env.PUBLIC_URL}/img/coupon/next_Button.png`}
        active={active} //버튼 존재 여부(고정)
        onClick={() => {
          setCurrentPage(!currentPage);
        }} //버튼 클릭 시 페이지 번호 바뀜
      />
    </S.Container>
  );
}
