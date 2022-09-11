let globalTheme = (mode) => ({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*::-webkit-scrollbar": {
          height: "10px",
          width: "12px",
          backgroundColor: "rgba(0, 24, 53, 0.5)",
        },
        "*::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(80, 80, 80, 0.1)",
        },
        "*::-webkit-scrollbar-thumb": {
          borderRadius: "2px",
          backgroundColor: "#232F3E",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          color: "#ffffff",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: mode === "dark" ? "#ffffff" : "red",
          textShadow: "2px 2px 4px rgb(0 0 0 / 45%)",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#ff0000",
        },
      },
    },
  },
});

export default globalTheme;
