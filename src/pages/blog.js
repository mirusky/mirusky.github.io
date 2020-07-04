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
import { graphql } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link } from "gatsby-theme-material-ui";

export default function App({ data }) {
  const [dark, setDark] = useState(store.getState().dark);
  const posts = data.allMarkdownRemark.edges;

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
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

          {posts.map(({ node }) => {
            return (
              <React.Fragment key={node.frontmatter.slug}>
                <br />

                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img
                          className={classes.img}
                          alt={node.frontmatter.title}
                          src={node.frontmatter.imageSrc}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="h5" component="h2">
                            {node.frontmatter.title}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {node.frontmatter.date}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {node.frontmatter.description} <br />
                            <br />
                            {node.frontmatter.tags.length >= 0
                              ? "Tags: " + node.frontmatter.tags.toString()
                              : ""}
                          </Typography>
                        </Grid>
                        <Grid
                          container
                          direction="column"
                          justify="flex-start"
                          alignItems="flex-end"
                        >
                          <Link
                            to={node.frontmatter.slug}
                            variant="body1"
                            color={dark ? "textSecondary" : "textPrimary"}
                          >
                            READ
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </React.Fragment>
            );
          })}
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            slug
            tags
            imageSrc
          }
        }
      }
    }
  }
`;
