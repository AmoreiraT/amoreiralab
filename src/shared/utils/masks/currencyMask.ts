export const currencyMask = (
  currencyValue?: string,
  currency?: 'BRL' | 'USD'
) => {
  if (currencyValue) {
    let value = currencyValue;

    value = value.replace(/[^\d-]/g, '');

    if (value.length > 2) {
      value = value.replace(/^0+/, '');
    }

    value = value.padStart(3, '0');

    if (currency === 'USD') {
      return `$ ${new Intl.NumberFormat('pt-BR', {
        currency: currency || 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(Number(value) / 100)}`;
    }

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: currency || 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(value) / 100);
  }
  return '';
};

// export const currencyMask = (
//   currencyValue?: string,
//   currency?: 'BRL' | 'USD'
// ) => {
//   if (currencyValue) {
//     let value = currencyValue;

//     value = value.replace(/\D/g, '');

//     if (value.length > 2) {
//       value = value.replace(/^0+/, '');
//     }

//     value = value.padStart(3, '0');

//     if (Number(value) < 0) return '';

//     return new Intl.NumberFormat('pt-BR', {
//       style: 'currency',

//       currency: currency || 'BRL',
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     }).format(Number(value) / 100);
//   }
//   return '';
// };

export const currencyMaskWithFixedCents = (
  currencyValue?: string,
  currency?: 'BRL' | 'USD'
) => {
  if (currencyValue) {
    let value = currencyValue.replace(/\D/g, ''); // Remove tudo exceto dígitos
    if (value.length > 2) {
      value = value.replace(/^0+/, ''); // Remove zeros à esquerda
    }
    value = value.padStart(1, '0'); // Garante pelo menos um dígito antes da divisão

    if (Number(value) < 0) return ''; // Retorna vazio para valores negativos

    // Multiplica por 100 para tratar como um valor inteiro sem centavos
    // value = (Number(value) * 100).toString();

    return `${new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: currency || 'BRL',
      minimumFractionDigits: 0, // Mostra dois dígitos fracionários
      maximumFractionDigits: 0, // Mostra dois dígitos fracionários
    }).format(Number(value))}`; // Divida por 100 para corrigir o valor
  }

  // Retorna R$0,00 ou $0.00 se nenhum valor for fornecido
  // return currency === 'USD' ? '$0.00' : 'R$0,00';
  return currency === 'USD' ? '$0' : 'R$0';
};
