import { axios, baseUrl } from "../../utils";

export const getListBarang = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    dispatch({ type: "GET_LIST_BARANG_PENDING" });

    const url = `${baseUrl.API_URL}item`;
    let response = await axios.Get({
      url,
      token: token,
    });
    dispatch({
      type: "GET_LIST_BARANG_SUCCESS",
      payload: {
        dataBarang: response.data,
      },
    });
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
      dispatch({ type: "GET_LIST_BARANG_ERROR" });
    }
  }
};

export const getDetailBarang = ({ id }) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    dispatch({ type: "GET_DETAIL_BARANG_PENDING" });

    const url = `${baseUrl.API_URL}item/${id}`;
    let response = await axios.Get({
      url,
      token,
    });
    dispatch({
      type: "GET_DETAIL_BARANG_SUCCESS",
      payload: {
        data: response.data,
      },
    });
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
      dispatch({ type: "GET_DETAIL_BARANG_ERROR" });
    }
  }
};

export const editBarang = ({ id, data, cb }) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    dispatch({ type: "EDIT_BARANG_PENDING" });

    const url = `${baseUrl.API_URL}item/update/${id}`;
    let response = await axios.Put({
      url,
      token,
      data,
    });
    dispatch({
      type: "EDIT_BARANG_SUCCESS",
      payload: {
        data: response.data,
      },
    });
    cb();
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
      dispatch({ type: "EDIT_BARANG_ERROR" });
    }
  }
};

export const deleteBarang = ({ id }) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    dispatch({ type: "DELETE_BARANG_PENDING" });

    const url = `${baseUrl.API_URL}item/destroy/${id}`;
    await axios.Delete({
      url,
      token,
    });
    dispatch({ type: "DELETE_BARANG_SUCCESS" });
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
      dispatch({ type: "DELETE_BARANG_ERROR" });
    }
  }
};

export const tambahBarang = ({ data }) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    dispatch({ type: "ADD_BARANG_PENDING" });

    const url = `${baseUrl.API_URL}item/in`;
    await axios.PostFormData({
      url,
      data,
      token,
    });

    dispatch({ type: "ADD_BARANG_SUCCESS" });
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
      dispatch({ type: "ADD_BARANG_ERROR" });
    }
  }
};

export const keluarBarang = ({ data, id, cb }) => async (
  dispatch,
  getState,
) => {
  try {
    const { token } = getState().auth;
    dispatch({ type: "KELUAR_BARANG_PENDING" });

    const url = `${baseUrl.API_URL}item/out/${id}`;
    await axios.Patch({
      url,
      data,
      token,
    });
    dispatch({ type: "KELUAR_BARANG_SUCCESS" });
    cb();
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
      dispatch({ type: "KELUAR_BARANG_ERROR" });
    }
  }
};

export const reportBarang = ({ type, tglMulai, tglSelesai, cb }) => async (
  dispatch,
  getState,
) => {
  try {
    const { token } = getState().auth;
    dispatch({ type: "GET_REPORT_PENDING" });

    const url = `${baseUrl.API_URL}report/${tglMulai}/${tglSelesai}`;
    let response = await axios.Get({
      params: {
        type,
      },
      url,
      token,
    });

    dispatch({
      type: "GET_REPORT_SUCCESS",
      payload: {
        dataReport: response.data.link,
      },
    });
    cb(response.data.link);
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
      dispatch({ type: "GET_REPORT_ERROR" });
    }
  }
};

export const getRak = ({ id }) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    dispatch({ type: "GET_RAK_PENDING" });

    const url = `${baseUrl.API_URL}rack`;
    let response = await axios.Get({
      params: {
        warehouse_id: id,
      },
      url,
      token,
    });

    dispatch({
      type: "GET_RAK_SUCCESS",
      payload: {
        data: response.data,
      },
    });
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
      dispatch({ type: "GET_RAK_ERROR" });
    }
  }
};

export const getWarehouse = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    dispatch({ type: "GET_WAREHOUSE_PENDING" });

    const url = `${baseUrl.API_URL}warehouse`;
    let response = await axios.Get({
      url,
      token,
    });

    dispatch({
      type: "GET_WAREHOUSE_SUCCESS",
      payload: {
        data: response.data,
      },
    });
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
      dispatch({ type: "GET_WAREHOUSE_ERROR" });
    }
  }
};
