export const dayOfMonth = (value?: string) => {
  if (value) {
    return value.replace(/\D/g, '').slice(0, 2);
  }

  return '';
};
