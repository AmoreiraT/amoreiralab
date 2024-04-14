export const unCnpjMask = (value?: string) => {
  if (value) {
    return value
      .replace('.', '')
      .replace('.', '')
      .replace('-', '')
      .replace('/', '');
  }

  return '';
};
