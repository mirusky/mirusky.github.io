import React from "react";
import { Grid, Typography, makeStyles, Divider } from "@material-ui/core";

export default function ResumeBasic8({ data }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    section: {
      margin: theme.spacing(2, 2),
    },
    grid: {
      padding: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  return (
    data.references.length > 0 && (
      <>
        <Divider variant="middle" />
        <div className={classes.section}>
          <Grid container alignItems="center">
            <Grid item xs={8} sm={3} md={2}>
              <Typography gutterBottom variant="h5">
                References
              </Typography>
            </Grid>

            <Typography variant="subtitle2">
              {data.references.map((e) => {
                return (
                  <React.Fragment key={e.reference}>
                    <b>{e.name}</b> {e.reference}
                    <br />
                  </React.Fragment>
                );
              })}
            </Typography>
          </Grid>
        </div>
      </>
    )
  );
}
