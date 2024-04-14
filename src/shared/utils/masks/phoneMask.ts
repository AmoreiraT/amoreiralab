export const phoneMask = (value?: string) => {
  if (value) {
    const numericValue = value.replace(/\D/g, '');

    return numericValue
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1');
  }

  return '';
};

export const phoneMaskNddi = (value?: string) => {
  if (value) {
    const numericValue = value.replace(/\D/g, '');

    return (
      numericValue
        // .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '+$1$2')
    );
    // .replace(/(\d{2})(\d)/, '($1) $2')
    // .replace(/(\d{4})(\d)/, '$1-$2')
    // .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    // .replace(/(-\d{4})\d+?$/, '$1');
  }

  return '';
};

// export const phoneMaskNddiOnlyPlus = (value?: string) => {
//   if (value) {
//     const numericValue = value.replace(/\D/g, '');

//     return numericValue.replace(/\D/g, '').replace(/(\d{1})(\d)/, '+$1');
//   }

//   return '';
// };

export const phoneMaskNddd = (value?: string) => {
  if (value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1');
  }

  return '';
};
