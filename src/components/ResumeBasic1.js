import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

export default function ResumeBasic1({ data }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    section: {
      margin: theme.spacing(2,2),
    },
  }));
  const classes = useStyles();

  let location = [];
  location.push(
    data.basics.location.city,
    data.basics.location.region,
    data.basics.location.address
  );
  location = location.filter(e => e).join(", ")

  return (
    <div className={classes.section}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography gutterBottom variant="h4">
            {data.basics.name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom align="right" variant="subtitle1">
            {location}
            <br />
            {data.basics.location.postalCode} {data.basics.location.countryCode}
            <br />
            {data.basics.phone.length > 0 ? data.basics.phone : null}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
