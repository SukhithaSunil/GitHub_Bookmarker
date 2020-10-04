import * as actions from "../actions/bookmarks_actions";

const initialState = {
  savedBookMarks: [],
  loading: false,
  error: null,
  selectedBookmark: {},
};

export default function bookmarks_reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_BOOKMARK:
      return {
        ...state,
        savedBookMarks: state.savedBookMarks.concat(action.bookMark),
      };
    case actions.REMOVE_BOOKMARK:
      return {
        ...state,
        savedBookMarks: state.savedBookMarks.filter(
          (item) => item !== action.bookMark
        ),
      };
    case actions.UNSELECT_BOOKMARK:
      return {
        ...state,
        selectedBookmark: {},
      };
    case actions.SELECT_BOOKMARK:
      return {
        ...state,
        selectedBookmark: action.bookMark,
      };
    case actions.EDIT_BOOKMARK:
      return {
        ...state,
        savedBookMarks: state.savedBookMarks.map((bookMark) =>
          bookMark.id === action.updatedBookMark.id
            ? // transform the one with a matching id
              action.updatedBookMark
            : // otherwise return original todo
              bookMark
        ),
      };
    default:
      return state;
  }
}
