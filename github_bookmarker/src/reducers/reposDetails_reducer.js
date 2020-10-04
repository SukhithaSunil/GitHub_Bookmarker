import * as actions from "../actions/respoDetails_actions";

const initialState = {
  repositories:[],
  loading: false,
  error: null,
  selectedRepository:{}
};

export default function reposDetails_reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_REPOS_REQUEST:
      return { ...state, loading: true };
    case actions.FETCH_REPOS_SUCCESS:
      return { ...state, repositories: [].concat(action.repositories) , loading: false, error:null};
    case actions.FETCH_REPOS_FAILURE:
      return { ...state, error: action.error,  loading: false};
    case actions.SELECT_REPOSITORIES:
      return {...state, selectedRepository: action.repository}
      case actions.UNSELECT_REPOSITORIES:
      return { ...state, selectedRepository: {}};

    default:
      return state;
  }
}
