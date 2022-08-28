import { useEffect, useState } from "react";

import { Theme } from "./types";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode: Theme) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const handleThemeChange = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme as Theme);
    setMountedComponent(true);
  }, []);

  return [theme, handleThemeChange, mountedComponent] as const;
};
