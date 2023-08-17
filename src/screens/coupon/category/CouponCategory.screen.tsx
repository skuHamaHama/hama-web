import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Screen, Brand } from "../../../components";
import { useGetCategory } from "../../../hooks";
import * as S from "./Category.styled";

export function CouponCategoryScreen() {
  const [category, setCategory] = useState("음식");
  const { categoryId } = useParams();
  const getCategory = useGetCategory();

  useEffect(() => {
    const value = getCategory(Number(categoryId)) as string | undefined;
    if (typeof value === "string") {
      setCategory(value);
    }
  }, []);

  return (
    <Screen header={true} nav={true} side={false} footer={true}>
      <S.Container>
        <S.MyCoupon>
          <S.Text>{category}</S.Text>
          <S.Line />
          <Brand category={category} />
        </S.MyCoupon>
      </S.Container>
    </Screen>
  );
}
