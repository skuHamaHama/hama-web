import { useState, useEffect } from "react";
import { useGetCouponList } from "../../hooks";
import { GetCouponDataRes } from "../../services";
import { couponData_4 } from "./"; //임시 데이터
import * as S from "./SubCoupon.Styled";

export function SubCoupon({
  active,
  brandId,
}: {
  active: boolean;
  brandId: number;
}) {
  const groupSize = 4; //분할 개수
  const [currentPage, setCurrentPage] = useState(true); //페이지 번호
  const [groups, setGroups] = useState<GetCouponDataRes[][]>([]);
  const getCouponList = useGetCouponList();

  const mapDataInGroups = (
    groupSize: number,
    couponData: GetCouponDataRes[]
  ) => {
    const groups = [];
    for (let i = 0; i < couponData.length; i += groupSize) {
      groups.push(couponData.slice(i, i + groupSize));
    }
    return groups;
  };

  // getCouponData -> flat: 내부 배열을 풀어줌
  useEffect(() => {
    getCouponList(brandId).then((res) => {
      if (res) {
        const groups = mapDataInGroups(groupSize, res.flat());
        setGroups(groups);
      } else {
        const groups = mapDataInGroups(groupSize, couponData_4.flat());
        setGroups(groups);
        alert("쿠폰 정보가 없습니다.");
      }
    });
  }, []);

  return (
    <S.Container>
      {groups.map((group, groupIndex) => (
        <S.CouponGroup key={groupIndex}>
          {group.map((coupon: GetCouponDataRes, idx: number) => (
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
        src={`${process.env.PUBLIC_URL}/img/coupon/next_Button.png`} // currentPage 값에 따라 다른 이미지 선택
        active={active} //버튼 존재 여부(고정)
        onClick={() => {
          console.log("Button clicked! Current page:", currentPage);
          setCurrentPage(!currentPage);
        }} //버튼 클릭 시 페이지 번호 바뀜
      />
    </S.Container>
  );
}
