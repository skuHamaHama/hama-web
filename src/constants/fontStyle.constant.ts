export type FontStyleUnion = (typeof fontStyleUnionList)[number];
export const fontStyleUnionList = [
  "small",
  "medium",
  "large",
  "x-Large",
  "h1",
  "h2",
  "h3",
] as const;
export const fontStyles = {
  small: 18,
  medium: 20,
  large: 22,
  xLarge: 24,
  h3: 20,
  h2: 24,
  h1: 30,
};
