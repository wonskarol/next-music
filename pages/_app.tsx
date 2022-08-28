import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../styles/globalStyles";
import { Layout } from "../components/layout/Layout";
import { lightTheme, darkTheme } from "../components/theme/Themes";
import { useTheme } from "../components/theme/use-theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, handleThemeChange, mountedComponent] = useTheme();

  if (!mountedComponent) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Layout theme={theme} onThemeChange={handleThemeChange}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
