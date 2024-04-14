export const numericIdMask = (value?: string) => {
  if (value) {
    return value.replace(/[^a-zA-Z0-9]/g, '');
  }

  return '';
};
