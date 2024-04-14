export const onlyNumbers = (value?: string) => {
  if (value) {
    return value.replace(/\D/g, '');
  }

  return '';
};
