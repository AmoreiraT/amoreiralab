export const pisMask = (value?: string) => {
  if (value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{5})(\d)/, '$1.$2')
      .replace(/(\d{5}\.)(\d{2})(\d)/, '$1$2-$3')
      .replace(/(-\d)\d+?$/, '$1');
  }

  return '';
};
