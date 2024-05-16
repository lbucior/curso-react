import { SystemInfoAction, SystemInfoDispatchProps } from "./types";

/**
 * [SystemInfo] action types.
 */
export const actionTypes = {
  loadSystemInfo: "[System][Loading Info] Action",
  loadedSystemInfo: "[System][Loaded Info] Action",

  clear: "[System][Clear Info] Action",
};

/**
 * System info actions.
 */
const actions: SystemInfoDispatchProps = {
  loadSystemInfo: (): SystemInfoAction => ({
    type: actionTypes.loadSystemInfo,
  }),
  loadedSystemInfo: (systemInfo): SystemInfoAction => ({
    type: actionTypes.loadedSystemInfo,
    payload: systemInfo,
  }),

  clear: (): SystemInfoAction => ({
    type: actionTypes.clear,
  }),
};

export default actions;
