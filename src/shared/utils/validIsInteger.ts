import { unCurrencyMask } from './masks';

export const validIsInteger = (value: string) => {
  const valueUnMask = unCurrencyMask(value);
  if (!value) return false;
  return Number.isInteger(valueUnMask);
};

export const validIsCleanInteger = (value: string) => {
  const valueUnMask = unCurrencyMask(value);
  if (!value) return false;

  const valueInteger = parseFloat(
    String(valueUnMask)
      .replace(/[^\d.,]/g, '')
      .replace(/[.,]/g, '')
  );

  return Number.isInteger(valueInteger);
};
