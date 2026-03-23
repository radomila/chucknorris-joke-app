import { useEffect, useState } from 'react';
import { getItem } from '../utils/LocalStorage/getItem.ts';
import { setItem } from '../utils/LocalStorage/setItem.tsx';

interface Props<T> {
  key: string;
  initialValue: T;
}

export function usePersistedData<T>({ key, initialValue }: Props<T>) {
  const [value, setValue] = useState(() => {
    const item = getItem(key);
    return (item as T) || initialValue;
  });

  useEffect(() => {
    setItem(key, value);
  }, [value]);

  return [value, setValue] as const;
}