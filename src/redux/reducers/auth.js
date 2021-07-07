const initialState = {
  token: "",
  name: "",
  role: "",
  isLogin: false,
  isLoadingLogin: false,
  isLoadingRegister: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return { ...state, isLoadingLogin: true };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoadingLogin: false,
        isLogin: true,
        token: action.payload.token,
        role: action.payload.role,
        name: action.payload.name,
      };
    case "LOGIN_ERROR":
      return { ...state, isLoadingLogin: false };
    case "REGISTER_PENDING":
      return { ...state, isLoadingRegister: true };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        isLoadingRegister: false,
        token: action.payload.token,
        role: action.payload.role,
        name: action.payload.name,
      };
    case "REGISTER_ERROR":
      return { ...state, isLoadingRegister: false };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        token: initialState.token,
        role: initialState.role,
        name: initialState.name,
        isLogin: initialState.isLogin,
        isLoadingLogin: initialState.isLoadingLogin,
      };
    default:
      return state;
  }
};
