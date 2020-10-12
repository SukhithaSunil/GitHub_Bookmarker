import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    // minHeight: 300,
    // maxHeight:400
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
    height: 200,
  },
  root: {
    maxWidth: 400,
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  bookmarked: {
    color: "red",
  },
  notBookmarked: {
    color: "silver",
  },
}));

function User({ user }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
      {/* //className={classes.root} */}
      <Card>
        <CardHeader
          avatar={
            <Avatar
              aria-label={user.name}
              className={classes.small}
              src={user.avatar}
            ></Avatar>
          }
          title={
            <Typography component="h2" variant="h5">
              {user.name}
            </Typography>
          }
        />

        <CardActions>
          <Link
            rel="nooliener noreferrer"
            href={user.url}
            target="_blank"
            component="a"
            variant="subtitle1"
            color="primary"
          >
            Learn More
          </Link>

          <Button
            component={RouterLink}
            to={`/search/${user.name}`}
            color="primary"
            size="small"
            variant="contained"
          >
            View Repos..
          </Button>
          
        </CardActions>
      </Card>
    </Grid>
  );
}

export default User;
