import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import SavedBookMarks from '../components/SavedBookMarks';
import {Link}   from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));
const DashBoard = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Bookmarks</h1>
      <Link to="/" className="button">
      Add Bookmarks
    </Link>
      <SavedBookMarks/>
    </div>
  );
};

export default DashBoard;
