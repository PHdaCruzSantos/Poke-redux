import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_AUTH_ERROR,
} from "../actions/userActions";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case LOGOUT_USER:
      return initialState;
    case SET_AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
