import { axios, baseUrl } from "../../utils";

export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const REGISTER_PENDING = "REGISTER_PENDING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const login = ({ email, password, cb }) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_PENDING });

    const url = `${baseUrl.API_URL}login`;
    let response = await axios.Post({
      url,
      data: {
        email,
        password,
      },
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        token: response.data.token,
        name: response.data.name,
        role: response.data.role_id,
      },
    });
    cb();
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
      dispatch({ type: LOGIN_ERROR });
    }
  }
};

export const register = ({ data, cb }) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_PENDING });

    const url = `${baseUrl.API_URL}signup`;
    let response = await axios.Post({
      url,
      data: { ...data },
    });

    dispatch({
      type: REGISTER_SUCCESS,
      payload: {
        token: response.data.token,
        name: response.data.name,
        role: response.data.role_id,
      },
    });
    cb();
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
      dispatch({ type: REGISTER_ERROR });
    }
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};
