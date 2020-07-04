import React from "react";
import { Grid, Typography, makeStyles, Divider } from "@material-ui/core";

export default function ResumeBasic3({ data }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    section: {
      margin: theme.spacing(2, 2),
    },
  }));
  const classes = useStyles();

  return (
    data.interests.length > 0 && (
      <>
        <Divider variant="middle" />
        <div className={classes.section}>
          <Grid container alignItems="center">
            <Grid item xs={4} sm={3} md={2}>
              <Typography gutterBottom variant="h5">
                Interests
              </Typography>
            </Grid>

            <Typography gutterBottom align="left" variant="subtitle2">
              {data.interests
                .map((e) => {
                  const keywords = e.keywords.join(", ");
                  const str =
                    e.name +
                    " " +
                    (keywords.length > 0 ? "( " + keywords + " )" : null);
                  return str;
                })
                .join(", ")}
            </Typography>
          </Grid>
        </div>
      </>
    )
  );
}
