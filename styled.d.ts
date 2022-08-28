import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colorScheme: "light" | "dark";
    primary: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
    backgroundSecondaryHover: string;
  }
}
