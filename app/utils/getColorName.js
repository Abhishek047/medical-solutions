const COLORS = ["default", "primary", "secondary"];

export const getColorName = (str = "") => {
  const selectedColor = str.toLowerCase();
  return COLORS.includes(selectedColor) ? selectedColor : COLORS[0];
};
