import React from "react";
import BookMarks from "./BookMarks";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { selectRepositories,unSelectRepositories } from "../actions/respoDetails_actions";

import { connect } from "react-redux";
import AddBookMarkAlert from "./AddBookMarkAlert";


function BookMarksList({ repositories, selectRepositories, selectedRepository}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };
  const handleClickClose = () => {
    setOpen(false);
   // unSelectRepositories();
  };
 
  const handleSelect = (repo) => {
    selectRepositories(repo);
    console.log(selectedRepository);
    setOpen(true);
  };
  const handleUnSelect= () => {
    //unSelectRepositories();
    setOpen(true);
  };

  console.log(repositories);
  return (
    <Container maxWidth="xl">
      <AddBookMarkAlert open={open} handleClickOpen={handleClickOpen} handleClickClose={handleClickClose} />
      <Grid container spacing={2}>
        {/* addBookMark = {props.addBookMark} */}
        {repositories.map((bookmark) => (
          <BookMarks
            bookmark={bookmark}
            key={bookmark.id}
            handleSelect={handleSelect}
            handleUnSelect={handleUnSelect}

          />
        ))}
      </Grid>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  repositories: state.reposDetails.repositories,
  selectedRepository: state.reposDetails.selectedRepository,
});

const mapDispatchToProps = {
  selectRepositories,
  unSelectRepositories
};

export default connect(mapStateToProps, mapDispatchToProps)(BookMarksList);
