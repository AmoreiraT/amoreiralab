type SetLocalStorageProps = {
  key: string;
  value: string | unknown;
};

export const setLocalStorage = ({ key, value }: SetLocalStorageProps) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  const response = localStorage.getItem(key);

  if (!response) return null;

  return JSON.parse(response);
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
