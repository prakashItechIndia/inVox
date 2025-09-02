import { format } from 'date-fns';

export { cn } from 'shared';

export enum OrderEnum {
  DESC = 'DESC',
  ASC = 'ASC',
}

export const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9); // Generates a random string of 9 characters
};

export const isValidDateFormat = (value: string) => {
  // Matches m/d/yyyy or mm/dd/yyyy (01/01/2020 or 1/1/2020)
  return /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/\d{4}$/.test(value);
};

export const parseDateFlexible = (dateStr: string): string => {
  return dateStr && !isNaN(new Date(dateStr).getTime())
    ? format(new Date(dateStr), 'MM/dd/yyyy')
    : '';
};

export const deepEqual = <T>(obj1: T, obj2: T): boolean => {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (
      !keys2.includes(key) ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      !deepEqual((obj1 as any)[key], (obj2 as any)[key])
    ) {
      return false;
    }
  }

  return true;
};

export const formatWebAddress = (url?: string) => {
  url = url ? url.trim() : '';
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://${url}`;
};

export const dateFormate = (date?: Date) => {
  if (!date) return undefined;
  // Get local year, month, and day
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
