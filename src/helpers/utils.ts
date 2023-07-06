/** object를 query string으로 변환해주는 함수입니다. */
export const objectToQueryString = (obj: Record<string, any>): string => {
  const keyValuePairs: string[] = [];

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value: any = obj[key];
      const encodedKey: string = encodeURIComponent(key);
      const encodedValue: string = encodeURIComponent(value);
      keyValuePairs.push(`${encodedKey}=${encodedValue}`);
    }
  }

  return keyValuePairs.join('&');
};
