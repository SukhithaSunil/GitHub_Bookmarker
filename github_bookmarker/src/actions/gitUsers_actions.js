export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const SELECT_USER = 'SELECT_USER';
export const UNSELECT_USER = 'UNSELECT_USER';


export const selectUser = (user) => ({
  type: SELECT_USER,
  user
})

export const unSelectUser = () => ({
  type: UNSELECT_USER,
  
})

export const fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST,
})

export const fetchUserSuccess = (users) => ({
    type: FETCH_USER_SUCCESS,
    users
})

export const fetchUserFailure = (error) => ({
    type: FETCH_USER_FAILURE,
    error
})
 async function getUserDetails(user) {
    var url = `https://api.github.com/search/users?q=${user}&per_page=20`;
    var bearer = 'authToken '.concat('bf05840183f23729472c768d0509440488141200');
    var filteredData;
    await fetch(url
      , {
      method: 'GET',
      withCredentials: true,
      headers: {
          'Authorization': bearer,
      }
  }
  
  ).then((response) => response.json())
      .then((data) => {
        var items = JSON.parse(JSON.stringify(data)).items;
        console.log(items);
         filteredData =items.map((item) => {
            var user = {name:item.login,url:item.html_url, id:item.id,avatar:item.avatar_url}
          return user;
        });
      });
      console.log(filteredData);
    return filteredData;
  }
export const fetchUsers = (user) => async dispatch => {
    dispatch(fetchUserRequest());
    try {
      const userDetails = await getUserDetails(user)
      dispatch(fetchUserSuccess(userDetails))
    } catch (err) {
      dispatch(fetchUserFailure(err.toString()))
    }
  }