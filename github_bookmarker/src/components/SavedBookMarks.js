import React from "react";
import { connect } from "react-redux";
import BookMarks from "./BookMarks";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { removeBookMark,selectBookMark,unSelectBookMark,editBookMark } from "../actions/bookmarks_actions";
import AddBookMarkAlert from "./AddBookMarkAlert";




const SavedBookMarks = ({ bookmarks, removeBookMark, selectBookMark, selectedBookmark, editBookMark}) => {
  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   selectBookMark(bookmark);//selected
  //   setOpen(!open);
  // };
  const handleClickClose = () => {
    setOpen(false);
   // unSelectRepositories();
  };
 
 
  const handleEditDialoge = (bookmark) =>{
    selectBookMark(bookmark);//selected
    console.log(selectedBookmark);
    setOpen(true);//edit box
  }

  const handleEditBookmark = (name) => {
    const updatedBookmark = {...selectedBookmark,customizedName : name};// edit name
    console.log(updatedBookmark.customizedName);
    editBookMark(updatedBookmark);
  }
  
  

const handleRemoveBookMark =() =>{
  // console.log(selectedBookmark);
  //   selectBookMark(bookMark);//selected
    console.log(selectedBookmark);

    //if it is already bookmarked show edit alert with remove and done;
     removeBookMark(selectedBookmark);
     setOpen(false);//close edit box
    // unSelectBookMark()//removed
}

  const renderBookmarks = (bookmarks) => {
    if (bookmarks.length == 0) return <p>No Bookmarks.</p>;

    return (
      <React.Fragment>
        
        {bookmarks.map((bookmark) => (
          <BookMarks
            bookmark={bookmark}
            key={bookmark.id}
            handleUnSelect={handleEditDialoge}
          />
        ))}
      </React.Fragment>
    );
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
      <AddBookMarkAlert open={open} 
             handleClose={handleClickClose} 
             handleBookMark={handleEditBookmark}
                                          handleRemove = {handleRemoveBookMark}
                          dialogeTitle="Edit Bookmark"
                                button="Edit"/>
      {renderBookmarks(bookmarks)}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  bookmarks: state.bookmarks.savedBookMarks,
  selectedBookmark: state.bookmarks.selectedBookmark

});

const mapDispatchToProps = {
  selectBookMark,
  unSelectBookMark,
  removeBookMark,
  editBookMark
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedBookMarks);
