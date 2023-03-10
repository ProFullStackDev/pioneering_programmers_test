import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<string>("Light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, setTheme] as const;
};

export default useTheme;
