import React from "react";

const theme = createTheme({
  components: {
    InputBase : {
      styleOverrides: `
          h1 {
            color: grey;
          }
        `,
    },
  },
});
const ThemWrapper = ({ child }) => {
  return <ThemeProvider theme={theme}>{child}</ThemeProvider>;
};

export default ThemWrapper;
