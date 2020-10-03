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
import { addBookMark } from "../actions/bookmarks_actions";



function AddBookMarkAlert({ open, handleClickOpen, selectedRepository ,addBookMark,unSelectRepositories,handleClickClose}) {
  const [name, setName] = React.useState("");
  const handlevalue = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleAddBookMark = () => {
    handleClickClose();
    const repository = {...selectedRepository,customizedName : name};
    repository.saved = true;
    console.log(repository.customizedName);
    addBookMark(repository);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClickOpen}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add A Bookmark</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter a name</DialogContentText>
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
          <Button onClick={handleClickClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddBookMark} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
const mapStateToProps = (state) => ({
    selectedRepository: state.reposDetails.selectedRepository
});

const mapDispatchToProps = {
    addBookMark,
    unSelectRepositories
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBookMarkAlert);
