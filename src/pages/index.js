import React, { useState } from "react";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppSurface from "../components/AppSurface";
import { Provider } from "react-redux";
import store from "../store";
import Perfil from "../components/Perfil"
import data from "../../content/json/resume.json";

export default function App() {
  const [dark, setDark] = useState(store.getState().dark);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    
  }));
  const classes = useStyles();

  function handleChange() {
    setDark(store.getState().dark);
  }
  store.subscribe(handleChange);

  const theme = React.useMemo(
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

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppSurface />

          <Perfil data={data}/>
        </ThemeProvider>
      </div>
    </Provider>
  );
}
