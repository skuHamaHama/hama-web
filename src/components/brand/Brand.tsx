import { useState, useEffect } from "react";
import { useGetBrand } from "../../hooks";
import { GetBrandRes } from "../../services";
import { tempBrandData } from "../../components";
import * as S from "./Brand.styled";
import { useNavigate } from "react-router-dom";

export function Brand({ category }: { category: string }) {
  const groupSize = 5; //분할 개수
  const [brandData, setBrandData] = useState<GetBrandRes[]>([]);
  const [groups, setGroups] = useState<GetBrandRes[][]>([]);

  const navigate = useNavigate();
  const getBrand = useGetBrand(category);

  if (!category) {
    alert("잘못된 경로입니다.");
    navigate("/home");
  }

  const mapDataInGroups = (groupSize: number, brandData: GetBrandRes[]) => {
    const groups = [];
    for (let i = 0; i < brandData.length; i += groupSize) {
      groups.push(brandData.slice(i, i + groupSize));
    }
    return groups;
  };

  useEffect(() => {
    if (getBrand.isSuccess) {
      setBrandData(getBrand.data.data);
      const groups = mapDataInGroups(groupSize, brandData);
      setGroups(groups);
    } else if (getBrand.isError) {
      const groups = mapDataInGroups(groupSize, tempBrandData);
      setGroups(groups);
    }
  }, [getBrand, brandData]);

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
