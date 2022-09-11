import { createTheme, responsiveFontSizes } from "@mui/material";
import globalTheme from "./globalTheme";

let lightTheme = createTheme({
  ...globalTheme("light"),
  palette: {
    mode: "light",
    ...globalTheme("light").palette,
  },
  components: {
    ...globalTheme("light").components,
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#e4e5f1",
          textShadow: "2px 2px 4px rgb(0 0 0 / 45%)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          textShadow: "2px 2px 4px rgb(0 0 0 / 45%)",
        },
      },
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);

export default lightTheme;
