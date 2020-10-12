import * as actions from "../actions/gitUsers_actions";

const initialState = {
  users:[],
  loading: false,
  error: null,
  selectedUser:{}
};

export default function gitUsers_reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case actions.FETCH_USER_SUCCESS:
      return { ...state, users: [].concat(action.users) , loading: false, error:null};
    case actions.FETCH_USER_FAILURE:
      return { ...state, error: action.error,  loading: false};
    case actions.SELECT_USER:
      return {...state, selectedUser: action.user}
      case actions.UNSELECT_USER:
      return { ...state, selectedUser: {}};

    default:
      return state;
  }
}
