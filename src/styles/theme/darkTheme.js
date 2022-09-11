import { createTheme, responsiveFontSizes } from "@mui/material";
import globalTheme from "./globalTheme";

let darkTheme = createTheme({
  ...globalTheme("dark"),
  palette: {
    mode: "dark",
    ...globalTheme("dark").palette,
    red: {
      main: "#DA0027",
    },
    grey: {
      main: "#1e1e1e",
    },
    black: {
      main: "#171717",
    },
    white: {
      main: "#ffffff",
    },
    background: {
      default: "#141414",
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

export default darkTheme;
