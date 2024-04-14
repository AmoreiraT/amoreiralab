export const unCurrencyMask = (value?: string): number => {
  if (value) {
    let formattedValue = value;

    if (typeof formattedValue === 'number') {
      formattedValue = String(formattedValue);
    }

    const result = parseFloat(
      formattedValue
        .replace(/[^\d.,-]/g, '')
        .replace('.', '')
        .replace(',', '.')
        .replace(/\.(?=.*\.)/g, '')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1')
    );

    return result;
  }
  return 0;
};
