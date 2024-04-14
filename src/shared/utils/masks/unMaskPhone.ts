export const unMaskPhone = (input: string): string => {
  const cleanedString = input.replace(/[^\d]/g, '');
  return cleanedString;
};
