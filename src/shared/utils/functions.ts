export const normalizeString = (str: string) => {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[. ]/g, '_');
};

export const formatLink = (link: string, fullPath: string) => {
  const pathCleaned = normalizeString(fullPath).slice(5);
  const linkCleaned = normalizeString(link);

  return `${pathCleaned}/${linkCleaned}`;
};

export const generateUniqueID = (baseID: string): string => {
  let newID = baseID;
  newID = `${baseID}_${Math.random().toString(36).substring(2, 9)}`;
  return newID;
};

export const capitalizeString = (str: string) => {
  const sentence = str.toLowerCase().replace(/-/g, ' ').split(' ');
  const capitalizedSentence = sentence.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedSentence.join(' ');
};

/* export const camelCaseString = (str: string) => {
  const sentence = str.toLowerCase().replace(/-/g, ' ').split(' ');

  const capitalizedSentence = sentence.map((word, i) => {
    if (i === 0) return word;
    else return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const flattenedSentence = capitalizedSentence.join('');

  return flattenedSentence;
}; */

export const getKeys = <T extends object>(obj: T) => {
  return Object.keys(obj) as Array<keyof T & string>;
};

export const camelCaseToSentence = (str: string) => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (string) => string.toUpperCase());
};
