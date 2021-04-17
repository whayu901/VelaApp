import { axios, baseUrl } from "../../utils";

export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const login = ({ email, password }) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_PENDING" });

    const url = `${baseUrl.API_URL}login`;
    let response = await axios.Post({
      url,
      data: {
        email,
        password,
      },
    });
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        token: response.data.data.token,
        name: response.data.data.name,
        role: response.data.data.role_id,
      },
    });
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
      dispatch({ type: LOGIN_ERROR });
    }
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: "LOGOUT_SUCCESS" });
};
