export const validNameAndLastName = (value: string) => {
  if (!value) return false;
  const words = value.trim().split(' ');
  return words.length >= 2;
};
