
export const GET_BOOKMARKS = 'GET_BOOKMARKS';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const SELECT_BOOKMARK = 'SELECT_BOOKMARK';
export const UNSELECT_BOOKMARK = 'UNSELECT_BOOKMARK';

export const ADD_BOOKMARK = 'ADD_BOOKMARK';

export const addBookMark = bookMark => ({
    type: ADD_BOOKMARK,
    bookMark
})

export const removeBookMark = bookMark => ({
    type: REMOVE_BOOKMARK,
    bookMark
})

export const selectBookMark = bookMark => ({
    type: SELECT_BOOKMARK,
    bookMark
})

export const unSelectBookMark = () => ({
    type: UNSELECT_BOOKMARK
})


