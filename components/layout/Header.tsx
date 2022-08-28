import { Toggle } from "../theme/Toggle/Toggle";
import { Theme } from "../theme/types";
import * as Styled from "./styled";

interface Props {
  theme: Theme;
  onThemeChange: () => void;
}

export const Header = ({ theme, onThemeChange }: Props) => {
  return (
    <Styled.Header>
      <span>
        <Styled.LogoAccent>Next</Styled.LogoAccent>Music
      </span>
      <Toggle theme={theme} onThemeChange={onThemeChange} />
    </Styled.Header>
  );
};
