import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import {
  AccountBox,
  
  GitHub,
  LinkedIn,
  Twitter,
  MailOutline,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
}));

export default function Perfil({ data }) {
  const classes = useStyles();

  return (
    <>
      <br /><br /><br /><br /><br />

      <Card className={classes.paper}>
        <CardActionArea>
        {/* <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.basics.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.basics.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
        <>
      <Divider variant="middle" />
      <div className={classes.chip} align="center">
        <ButtonGroup
          color="default"
          aria-label="outlined primary button group"
          
        >

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
      </Card>
    </>
  );
}
