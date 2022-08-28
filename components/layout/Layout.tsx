import { Theme } from "../theme/types";
import { Header } from "./Header";
import * as Styled from "./styled";

interface Props {
  children: React.ReactNode;
  theme: Theme;
  onThemeChange: () => void;
}

export const Layout = ({ children, theme, onThemeChange }: Props) => {
  return (
    <Styled.Wrapper>
      <Header theme={theme} onThemeChange={onThemeChange} />
      <main>{children}</main>
    </Styled.Wrapper>
  );
};
