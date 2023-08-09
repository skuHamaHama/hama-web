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
  small: 12,
  medium: 14,
  large: 16,
  xLarge: 18,
  h3: 20,
  h2: 24,
  h1: 30,
};
