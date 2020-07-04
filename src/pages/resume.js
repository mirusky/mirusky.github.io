import React, { useState } from "react";
import {
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core";

import { Provider } from "react-redux";
import AppSurface from "../components/AppSurface";
import data from "../../content/json/resume.json";
import store from "../store";
import ResumeBasic1 from "../components/ResumeBasic1";
import ResumeBasic2 from "../components/ResumeBasic2";
import ResumeBasic3 from "../components/ResumeBasic3";
import ResumeBasic4 from "../components/ResumeBasic4";
import ResumeBasic5 from "../components/ResumeBasic5";
import ResumeBasic6 from "../components/ResumeBasic6";
import ResumeBasic7 from "../components/ResumeBasic7";
import ResumeBasic8 from "../components/ResumeBasic8";

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

          <br />

          <ResumeBasic1 data={data} />
          <ResumeBasic2 data={data} />
          <ResumeBasic3 data={data} />
          <ResumeBasic4 data={data} />
          <ResumeBasic5 data={data} />
          <ResumeBasic6 data={data} />
          <ResumeBasic7 data={data} />
          <ResumeBasic8 data={data} />

        </ThemeProvider>
      </div>
    </Provider>
  );
}
