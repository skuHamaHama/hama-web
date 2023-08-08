export const fontStyleUnionList = [
  "small",
  "medium",
  "large",
  "xLarge",
  "h1",
  "h2",
  "h3",
] as const;
export type FontStyleUnion = (typeof fontStyleUnionList)[number];
export const fontStyles = {
  small: 10,
  medium: 12,
  large: 14,
  xLarge: 16,
  h3: 20,
  h2: 24,
  h1: 30,
};
