export const getAreaOfTriangle = (
  side1: number,
  side2: number,
  side3: number
) => {
  const s = (side1 + side2 + side3) / 2;
  const area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
  return area;
};
