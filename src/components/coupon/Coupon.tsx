import { useState, useEffect } from "react";
import { GetCouponDataRes } from "../../services";
import * as S from "./SubCoupon.Styled";

export function Coupon({ active }: { active: boolean }) {
  const groupSize = 4; //분할 개수

  const [currentPage, setCurrentPage] = useState(false); //페이지 번호
  const [couponData, setCouponData] = useState<GetCouponDataRes[]>([]);
  const [groups, setGroups] = useState<GetCouponDataRes[][]>([]);

  const list = localStorage.getItem("recentCoupon");
  if (list) setCouponData(JSON.parse(list));
  const couponList = couponData.map((coupon) => {
    return [
      coupon.brandName,
      coupon.couponName,
      coupon.startDate,
      coupon.endDate,
      coupon.couponUrl,
    ];
  });

  const mapDataInGroups = (couponData: GetCouponDataRes[][]) => {
    const groups = [];
    for (let i = 0; i < couponList.length; i += groupSize) {
      groups.push(couponList.slice(i, i + groupSize));
    }
    return groups;
  };

  useEffect(() => {
    const list = localStorage.getItem("recentCoupon");
    if (list) setCouponData(JSON.parse(list));
    mapDataInGroups(couponList);
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
        src={`${process.env.PUBLIC_URL}/img/coupon/next_Button.png`}
        active={active} //버튼 존재 여부(고정)
        onClick={() => {
          setCurrentPage(!currentPage);
          console.log(active);
        }} //버튼 클릭 시 페이지 번호 바뀜
      />
    </S.Container>
  );
}
