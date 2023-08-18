import { useState, useEffect } from "react";
import { useGetCategoryBrandList } from "../../hooks";
import { GetBrandDataRes } from "../../services";
import * as S from "./Brand.styled";

export function Brand({ category }: { category: string }) {
  const groupSize = 5; //분할 개수
  const [brandData, setBrandData] = useState<GetBrandDataRes[]>([]);
  const [groups, setGroups] = useState<GetBrandDataRes[][]>([]);

  const getCategoryBrandList = useGetCategoryBrandList();

  const mapDataInGroups = (groupSize: number, brandData: GetBrandDataRes[]) => {
    const groups = [];
    for (let i = 0; i < brandData.length; i += groupSize) {
      groups.push(brandData.slice(i, i + groupSize));
    }
    return groups;
  };

  useEffect(() => {
    getCategoryBrandList(category).then((res) => {
      setBrandData(res);
      const groups = mapDataInGroups(groupSize, brandData);
      setGroups(groups);
    });
  }, []);

  return (
    <S.Container>
      {groups.map((group, groupIndex) => (
        <S.BrandGroup key={groupIndex}>
          {group.map((brand: GetBrandDataRes, idx: number) => (
            <S.Brand key={idx} brandImgUrl={brand.brandImgUrl}></S.Brand>
          ))}
        </S.BrandGroup>
      ))}
    </S.Container>
  );
}
