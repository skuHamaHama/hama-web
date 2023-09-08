import { useState, useEffect } from "react";
import { useGetMyPageBrand, useUser } from "../../hooks";
import { GetBrandRes } from "../../services";
import { tempBrandData } from "./";
import * as S from "./Brand.styled";

export function MyPageBrand() {
  const groupSize = 5; //분할 개수
  const [brandData, setBrandData] = useState<GetBrandRes[]>([]);
  const [groups, setGroups] = useState<GetBrandRes[][]>([]);

  const user = useUser();
  const getMyPageBrand = useGetMyPageBrand(user.token?.userEmail || "");

  const mapDataInGroups = (groupSize: number, brandData: GetBrandRes[]) => {
    const groups = [];
    for (let i = 0; i < brandData.length; i += groupSize) {
      groups.push(brandData.slice(i, i + groupSize));
    }
    return groups;
  };

  useEffect(() => {
    if (getMyPageBrand.isSuccess) {
      setBrandData(getMyPageBrand.data.data);
      const groups = mapDataInGroups(groupSize, brandData);
      setGroups(groups);
    } else if (getMyPageBrand.isError) {
      const groups = mapDataInGroups(groupSize, tempBrandData);
      setGroups(groups);
    }
  }, []);

  return (
    <S.Container>
      {groups.map((group, groupIndex) => (
        <S.BrandGroup key={groupIndex}>
          {group.map((brand: GetBrandRes, idx: number) => (
            <S.Brand key={idx} brandImgUrl={brand.brandImgUrl}></S.Brand>
          ))}
        </S.BrandGroup>
      ))}
    </S.Container>
  );
}
