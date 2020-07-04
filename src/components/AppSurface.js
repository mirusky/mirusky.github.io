import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "gatsby-theme-material-ui";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

export default function AppSurface() {
  const dark = useSelector((s) => s.dark);
  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  const handleChange = (event) => {
    dispatch({ type: "DARK" });
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar style={{ alignItems: "center", justifyContent: "center" }}>
        <Link to="/" color="secondary">
          <IconButton
            title="Home"
            edge="start"
            color="inherit"
            aria-label="home"
            className={classes.menuButton}
          >
            <HomeIcon />
          </IconButton>
        </Link>

        <Link to="/projects" color="secondary">
          <IconButton
            title="Projects"
            edge="start"
            color="inherit"
            aria-label="projects"
            className={classes.menuButton}
          >
            <CodeIcon />
          </IconButton>
        </Link>

        <Link to="/blog" color="secondary">
          <IconButton
            title="Blog"
            edge="start"
            color="inherit"
            aria-label="blog"
            className={classes.menuButton}
          >
            <MenuBookIcon />
          </IconButton>
        </Link>

        <Link to="/resume" color="secondary">
          <IconButton
            title="Resume"
            edge="start"
            color="inherit"
            aria-label="account"
            className={classes.menuButton}
          >
            <AccountCircleIcon />
          </IconButton>
        </Link>

        <Switch
          checked={dark}
          onChange={handleChange}
          name="Dark"
          title="Dark Mode"
          edge="end"
          inputProps={{ "aria-label": "checkbox" }}
        />
      </Toolbar>
    </AppBar>
  );
}
