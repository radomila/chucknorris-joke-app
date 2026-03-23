export function getItem(key: string) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}