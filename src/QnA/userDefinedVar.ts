export const userDefinedVar = (input: string) => {
  const obj = {
    [input]: "User Input",
  };
  return obj[input];
};
