import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import reposDetails_reducer from '../reducers/reposDetails_reducer';
import bookmarks_reducer from '../reducers/bookmarks_reducer';
import gitUsers_reducer from '../reducers/gitUsers_reducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    reposDetails: reposDetails_reducer,
    bookmarks: bookmarks_reducer,
    usersDetails: gitUsers_reducer


  },
});
