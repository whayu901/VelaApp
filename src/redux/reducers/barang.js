const initialState = {
  isLoadingDataBarang: false,
  dataListBarang: [],
  isLoadingDetailBarang: false,
  dataDetailBarang: null,
  isLoadingEdit: false,
  dataEdit: null,
  isLoadingDelete: false,
  isLoadingTambah: false,
  isLoadingReport: false,
  dataReport: null,
  isLoadingKeluar: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_BARANG_PENDING":
      return { ...state, isLoadingDataBarang: true };
    case "GET_LIST_BARANG_SUCCESS":
      return {
        ...state,
        isLoadingDataBarang: false,
        dataListBarang: action.payload.dataBarang,
      };
    case "GET_LIST_BARANG_ERROR":
      return { ...state, isLoadingDataBarang: false };
    case "GET_DETAIL_BARANG_PENDING":
      return { ...state, isLoadingDetailBarang: true };
    case "GET_DETAIL_BARANG_SUCCESS":
      return {
        ...state,
        isLoadingDetailBarang: false,
        dataDetailBarang: action.payload.data,
      };
    case "GET_DETAIL_BARANG_ERROR":
      return { ...state, isLoadingDetailBarang: false };
    case "EDIT_BARANG_PENDING":
      return { ...state, isLoadingEdit: true };
    case "EDIT_BARANG_SUCCESS":
      return { ...state, isLoadingEdit: false, dataEdit: action.payload.data };
    case "EDIT_BARANG_ERROR":
      return { ...state, isLoadingEdit: false };
    case "DELETE_BARANG_PENDING":
      return { ...state, isLoadingDelete: true };
    case "DELETE_BARANG_SUCCESS":
      return { ...state, isLoadingDelete: false };
    case "DELETE_BARANG_ERROR":
      return { ...state, isLoadingDelete: false };
    case "ADD_BARANG_PENDING":
      return { ...state, isLoadingTambah: true };
    case "ADD_BARANG_SUCCESS":
      return { ...state, isLoadingTambah: false };
    case "ADD_BARANG_ERROR":
      return { ...state, isLoadingTambah: false };
    case "GET_REPORT_PENDING":
      return { ...state, isLoadingReport: true };
    case "GET_REPORT_SUCCESS":
      return {
        ...state,
        isLoadingReport: false,
        dataReport: action.payload.data,
      };
    case "GET_REPORT_ERROR":
      return { ...state, isLoadingReport: false };
    case "KELUAR_BARANG_PENDING":
      return { ...state, isLoadingKeluar: true };
    case "KELUAR_BARANG_SUCCESS":
      return { ...state, isLoadingKeluar: false };
    case "KELUAR_BARANG_ERROR":
      return { ...state, isLoadingKeluar: false };
    default:
      return state;
  }
};
