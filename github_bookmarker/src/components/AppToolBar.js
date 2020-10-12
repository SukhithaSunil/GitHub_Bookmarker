import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";

import BookmarksIcon from '@material-ui/icons/Bookmarks';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import { Link } from "react-router-dom";
import { Button, Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },

  title: {
    flexGrow: 1,
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            GitHub Bookmarker
          </Typography>

          <Button className ={classes.link} component={Link} to="/" variant="outlined" color="inherit">
           <Icon><BookmarksIcon></BookmarksIcon></Icon> Bookmarks
          </Button>
          <Button className ={classes.link}
            component={Link}
            to="/search"
            variant="outlined"
            color="inherit"
          >
           <Icon><SearchSharpIcon></SearchSharpIcon></Icon> Search
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
