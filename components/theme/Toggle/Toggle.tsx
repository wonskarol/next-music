import { MdLightMode, MdDarkMode } from "react-icons/md";

import * as Styled from "./styled";
import { Theme } from "../types";

interface Props {
  theme: Theme;
  onThemeChange: () => void;
}

export const Toggle = ({ theme, onThemeChange }: Props) => {
  return (
    <Styled.Button onClick={onThemeChange} aria-label="Toggle theme">
      {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
    </Styled.Button>
  );
};
