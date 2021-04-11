import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR } from "../actions";

const initialState = {
  token: "",
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
      };
    case LOGIN_ERROR:
      return { ...state, isLoadingLogin: false };
    default:
      return state;
  }
};
