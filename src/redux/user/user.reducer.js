
import UserTypes from './user.types';
const INITIAL_STATE = {
  currentUser: null,
  users : null,
  isAuthenticated: false,
}
// set an initial value for the state
const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserTypes.SET_CURRENT_USER :
      return {
        ...state,
        currentUser : action.payload,
        isAuthenticated: true,
      }
      case UserTypes.REVOKE_AUTH: 
      return {
        ...state,
        isAuthenticated : false,
      }
    default:
      return state;
  }
};

export default userReducer;
