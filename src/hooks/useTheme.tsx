import { useEffect, useState } from "react";

export type Theme = "Light" | "Dark";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("Light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, setTheme] as const;
};

export default useTheme;
