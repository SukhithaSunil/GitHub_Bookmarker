export const FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST';
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE';
export const SELECT_REPOSITORIES = 'SELECT_REPOSITORIES';
export const UNSELECT_REPOSITORIES = 'UNSELECT_REPOSITORIES';


export const selectRepositories = (repository) => ({
  type: SELECT_REPOSITORIES,
  repository
})

export const unSelectRepositories = () => ({
  type: UNSELECT_REPOSITORIES,
  
})

export const fetchReposRequest = () => ({
    type: FETCH_REPOS_REQUEST,
})

export const fetchReposSuccess = (repositories) => ({
    type: FETCH_REPOS_SUCCESS,
    repositories
})

export const fetchReposFailure = (error) => ({
    type: FETCH_REPOS_FAILURE,
    error
})
 async function getRepoDetails(repos) {
    var url = `https://api.github.com/search/repositories?q=${repos}&per_page=20`;
    var bearer = 'Bearer ' + '19eaa6d6413194be3d7d34578562f10c49cfadb9';
    var filteredData;
    await fetch(url
  //     , {
  //     method: 'GET',
  //     withCredentials: true,
  //     headers: {
  //         'Authorization': bearer,
  //     }
  // }
  
  ).then((response) => response.json())
      .then((data) => {
        var items = JSON.parse(JSON.stringify(data)).items;
        console.log(items);
         filteredData =items.map((item) => {
            var repo = {name:item.name,url:item.html_url, id:item.id,avatar:item.owner.avatar_url,owner:item.owner.login,description:item.description}
          return repo;
        });
      });
  
    return filteredData;
  }
export const fetchRepos = (repos) => async dispatch => {
    dispatch(fetchReposRequest());
    try {
      const repoDetails = await getRepoDetails(repos)
      dispatch(fetchReposSuccess(repoDetails))
    } catch (err) {
      dispatch(fetchReposFailure(err.toString()))
    }
  }