import React, { useEffect, useState } from "react";

const PREFIX = "codepen-clone-";

export default function useLocalStorage(
  key: string,
  initialValue: string | (() => string)
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState<string>(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue !== null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
