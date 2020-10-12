import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SavedBookMarks from '../components/SavedBookMarks';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));
const DashBoard = () => {
  return (
    <div>
      <h1>Bookmarks</h1>
      <SavedBookMarks/>
    </div>
  );
};

export default DashBoard;
