import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
} from "../actions";

const initialState = {
  token: "",
  name: "",
  role: "",
  isLogin: false,
  isLoadingLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, isLoadingLogin: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoadingLogin: false,
        isLogin: true,
        token: action.payload.token,
        role: action.payload.role,
        name: action.payload.name,
      };
    case LOGIN_ERROR:
      return { ...state, isLoadingLogin: false };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: initialState.token,
        role: initialState.role,
        name: initialState.name,
      };
    default:
      return state;
  }
};
