import { createMuiTheme } from "@material-ui/core/styles";
import { useMemo } from "react";

export const theme = useMemo(
  () =>
    createMuiTheme({
      palette: {
        type: dark ? "dark" : "light",
        primary: {
          main: "#3d3d45",
        },
        secondary: {
          main: "#1b1b26",
        },
      },
    }),
  [dark]
);
