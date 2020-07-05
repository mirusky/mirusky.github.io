import React from "react";
import {
  AccountBox,
  Home,
  GitHub,
  LinkedIn,
  Twitter,
  MailOutline,
} from "@material-ui/icons";
import {
  Button,
  makeStyles,
  ButtonGroup,
  Divider,
  useMediaQuery,
} from "@material-ui/core";

export default function ResumeBasic2({ data }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }));
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:900px)");

  return (
    <>
      <Divider variant="middle" />
      <div className={classes.chip} align="center">
        <ButtonGroup
          color="default"
          aria-label="outlined primary button group"
          orientation={matches ? "horizontal" : "vertical"} // TODO: Check if is mobile or not
        >
          {data.basics.website.length > 0 && (
            <Button
              href={"https://" + data.basics.website} // HACK: Adding "https://" to call another page
              variant="text"
              color="inherit"
              className={classes.button}
              startIcon={<Home />}
            >
              {data.basics.website}
            </Button>
          )}

          {data.basics.email.length > 0 && (
            <Button
              href={"mailto:" + data.basics.email} // HACK: Adding "mailto:" to call email app
              variant="text"
              color="inherit"
              className={classes.button}
              startIcon={<MailOutline />}
            >
              {data.basics.email}
            </Button>
          )}

          {data.basics.profiles.map((e) => {
            const icon =
              e.network.toLowerCase() === "twitter" ? (
                <Twitter />
              ) : e.network.toLowerCase() === "linkedin" ? (
                <LinkedIn />
              ) : e.network.toLowerCase() === "github" ? (
                <GitHub />
              ) : (
                <AccountBox />
              );
            return (
              <Button
                key={e.network}
                href={e.url} // HACK: Adding "https://" to call another page
                variant="text"
                color="inherit"
                className={classes.button}
                startIcon={icon}
              >
                {e.username}
              </Button>
            );
          })}
        </ButtonGroup>
      </div>
    </>
  );
}
