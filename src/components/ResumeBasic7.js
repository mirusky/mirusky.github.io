import React from "react";
import { Grid, Typography, makeStyles, Divider } from "@material-ui/core";

export default function ResumeBasic7({ data }) {
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
    data.work.length > 0 && (
      <>
        <Divider variant="middle" />
        <div className={classes.section}>
          <Grid container alignItems="center">
            <Grid item xs={4} sm={3} md={2}>
              <Typography gutterBottom variant="h5">
                Work
              </Typography>
            </Grid>

            <Typography variant="subtitle2">
              {data.work.map((e) => {
                return (
                  <React.Fragment key={e.position + e.startDate}>
                    <b>{e.position}</b>
                    {" - " +
                      e.company +
                      " " +
                      "( " +
                      e.startDate.substring(0, 4) +
                      " - " +
                      e.endDate.substring(0, 4) +
                      " )"}
                    <br />
                    {e.summary}
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
