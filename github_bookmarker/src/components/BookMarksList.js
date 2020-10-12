import React from "react";
import BookMarks from "./BookMarks";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { selectRepositories,unSelectRepositories } from "../actions/respoDetails_actions";
import { connect } from "react-redux";
import AddBookMarkAlert from "./AddBookMarkAlert";
import { addBookMark } from "../actions/bookmarks_actions";



function BookMarksList({ repositories, selectRepositories, selectedRepository, addBookMark, loading, error}) {
  const [open, setOpen] = React.useState(false);

  const handleClickClose = () => { // close dialoge
    setOpen(false);
   // unSelectRepositories();
  };
 
  const handleSelect = (repo) => {// select repo and open dialoge box to add bookmark
    selectRepositories(repo);
    console.log(selectedRepository);
    setOpen(true);
  };

  const handleUnSelect= () => { //remove bookmark
    unSelectRepositories();
  };

const saveBookmark = (customizedName)=>{
    const repository = {...selectedRepository,customizedName : customizedName};// added new name
    repository.saved = true; //status save
    console.log(repository.customizedName);
    addBookMark(repository);
}

const handleRemove = () => { //remove button ....close dialoge
  //or remove bookmark
  setOpen(false);

}
if (loading) return <p>Loading ...</p>;
    if (error) return <p>Unable to display .</p>;
    if (repositories.length === 0) 
      return <div >No results</div>;
    
  return (
    <Container maxWidth="xl">
    
      <AddBookMarkAlert open={open} 
                  handleClose={handleClickClose} 
                          dialogeTitle="Enter a name"
                                //  repo={""}
                                      handleBookMark={saveBookmark}
                                          handleRemove = {handleRemove}/>
      <Grid container spacing={3} style={{padding: '15px'}}>
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
  loading: state.reposDetails.loading,
  error: state.reposDetails.error,
});

const mapDispatchToProps = {
  selectRepositories,
  unSelectRepositories,
  addBookMark
};

export default connect(mapStateToProps, mapDispatchToProps)(BookMarksList);
