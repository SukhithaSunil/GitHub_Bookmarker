import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { unSelectRepositories } from "../actions/respoDetails_actions";



function AddBookMarkAlert({ open, handleClose, handleBookMark ,handleRemove,dialogeTitle}) {
 
  const [name, setName] = React.useState("");// selected bookmark name "" for addig bookmark
  const handlevalue = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleChanges = () => { // on add or edit button
    handleClose();//close dialoge
    handleBookMark(name);// add or edit 
    
  };
  
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add A Bookmark</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogeTitle}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Bookmark"
            type="name"
            fullWidth
            value={name}
            onChange={(e) => {
              handlevalue(e);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRemove} color="primary">
            Remove
          </Button>
          <Button onClick={handleChanges} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
const mapStateToProps = (state) => ({
  selectedBookmark: state.bookmarks.selectedBookmark
});

const mapDispatchToProps = {
    unSelectRepositories
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBookMarkAlert);
