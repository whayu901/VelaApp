import { combineReducers } from "redux";

import auth from "./auth";
import barang from "./barang";

export default combineReducers({
  auth,
  barang,
});
