export const onlyLetters = (value?: string) => {
  if (value) {
    return value.replace(/\d/g, '');
  }

  return '';
};
