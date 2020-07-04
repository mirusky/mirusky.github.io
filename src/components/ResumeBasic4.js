import React from "react";
import { Grid, Typography, makeStyles, Divider } from "@material-ui/core";

export default function ResumeBasic4({ data }) {
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
    data.skills.length > 0 && (
      <>
        <Divider variant="middle" />
        <div className={classes.section}>
          <Grid container alignItems="center">
            <Grid item xs={4} sm={3} md={2}>
              <Typography gutterBottom variant="h5">
                Skills
              </Typography>
            </Grid>
            
            <Typography variant="subtitle2">
              {data.skills.map((e) => {
                const nameLvl =
                  e.name + (e.level.length > 0 ? " (" + e.level + "):" : ": ");
                const keywords = e.keywords.join(", ");
                return (
                  <React.Fragment key={e.name}>
                    <b>{nameLvl}</b>
                    {keywords}
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
