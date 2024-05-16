/**
 * Define base types.
 */
import { Action, Reducer, UnknownAction } from "redux";
import { AuthState } from "./auth/types";
import { SystemInfoState } from "./system/types";

export interface BaseAction extends Action, UnknownAction {
  type: string;
  payload?: object | null;
}

export interface RootState {
  // BASE
  auth: Reducer<AuthState> & AuthState;
  systemInfo: Reducer<SystemInfoState> & SystemInfoState;
}
