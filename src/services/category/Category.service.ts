export interface Category {
  types: {
    음식: FoodType;
    문화생활: CulturalType;
    쇼핑: ShoppingType;
  };
}

export interface FoodType {
  types: {
    식당: string;
    카페: string;
  };
}

export interface CulturalType {
  types: {
    영화: string;
    놀이공원: string;
    게임: string;
  };
}

export interface ShoppingType {
  types: {
    옷: string;
    신발: string;
    화장품: string;
  };
}
