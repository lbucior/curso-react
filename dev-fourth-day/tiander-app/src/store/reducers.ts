import { combineReducers } from "redux";
import { RootState } from "./baseTypes";

/**
 * Map reducers and combined at the root.
 */
import { authReducer } from "./auth";
import { systemInfoReducer } from "./system";

const rootReducers = combineReducers<RootState>({
  auth: authReducer,
  systemInfo: systemInfoReducer,
});

export default rootReducers;
