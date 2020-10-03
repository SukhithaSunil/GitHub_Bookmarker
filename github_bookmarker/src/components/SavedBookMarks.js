import React from "react";
import { connect } from "react-redux";
import BookMarks from "./BookMarks";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { removeBookMark,selectBookMark,unSelectBookMark } from "../actions/bookmarks_actions";



const SavedBookMarks = ({ bookmarks, removeBookMark, selectBookMark, selectedBookmark}) => {
 
const handleRemoveBookMark =(repo) =>{
  console.log(selectedBookmark);

    selectBookMark(repo);//selected
    console.log(selectedBookmark);
     removeBookMark(repo);
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
            handleUnSelect={handleRemoveBookMark}
          />
        ))}
      </React.Fragment>
    );
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedBookMarks);
