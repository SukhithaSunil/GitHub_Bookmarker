import React from "react";
import BookMarks from "./BookMarks";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { selectRepositories,unSelectRepositories } from "../actions/respoDetails_actions";
import { connect } from "react-redux";
import AddBookMarkAlert from "./AddBookMarkAlert";
import { addBookMark } from "../actions/bookmarks_actions";
import Skeltons from "../UI/Skeltons";
import { useSnackbar } from 'notistack';


function BookMarksList({ repositories, selectRepositories, selectedRepository, addBookMark, loading, error}) {
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
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
    enqueueSnackbar('Added Bookmark',{ variant: 'success'});

}

const handleRemove = () => { //remove button ....close dialoge
  //or remove bookmark
  setOpen(false);

}
    if (error) return  enqueueSnackbar('Something went wrong',{ variant:'error'});
  
    
  return (
    <Container maxWidth="xl">
    
      <AddBookMarkAlert open={open} 
                  handleClose={handleClickClose} 
                          dialogeTitle="Enter a name"
                                      handleBookMark={saveBookmark}
                                          handleRemove = {handleRemove}/>

      <Grid container spacing={3} style={{padding: '15px'}}>

      {(loading ? Array.from(new Array(15)) : repositories).map((item) => {

          if (item) {
              return <BookMarks bookmark={item}
              key={item.id}
              handleSelect={handleSelect}
              handleUnSelect={handleUnSelect} />}
          else
           { return (
            <Skeltons/>
            )}
        })}
      </Grid>
    </Container>
  )
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
