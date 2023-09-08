import { useState, useEffect } from "react";
import { GetCouponRes } from "../../services";
import * as S from "./SubCoupon.Styled";

export function Coupon({ active }: { active: boolean }) {
  const groupSize = 4; //분할 개수

  const [currentPage, setCurrentPage] = useState(false); //페이지 번호
  const [couponData, setCouponData] = useState<GetCouponRes[]>([]);
  const [groups, setGroups] = useState<GetCouponRes[][]>([]);

  const mapDataInGroups = (dataList: GetCouponRes[], size: number) => {
    const mappedGroups: GetCouponRes[][] = [];
    for (let i = 0; i < dataList.length; i += size) {
      mappedGroups.push(dataList.slice(i, i + size));
    }
    return mappedGroups;
  };

  useEffect(() => {
    const list = localStorage.getItem("recentCoupon");
    if (list) {
      const parsedList: GetCouponRes[] = JSON.parse(list);
      setCouponData(parsedList);
    }
  }, []);

  useEffect(() => {
    const dataList = couponData.map((coupon) => ({
      couponId: coupon.couponId,
      couponName: coupon.couponName,
      brandName: coupon.brandName,
      category: coupon.category,
      brandId: coupon.brandId,
      startDate: coupon.startDate,
      endDate: coupon.endDate,
      brandImgUrl: coupon.brandImgUrl,
      couponCode: coupon.couponCode,
      couponUrl: coupon.couponUrl,
      description: coupon.description,
      popularity: coupon.popularity,
      useCount: coupon.useCount,
      likeCount: coupon.likeCount,
      dislikeCount: coupon.dislikeCount,
    }));

    const mappedGroups = mapDataInGroups(dataList, groupSize);
    setGroups(mappedGroups);
  }, [couponData]);

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
          console.log(active);
        }} //버튼 클릭 시 페이지 번호 바뀜
      />
    </S.Container>
  );
}
