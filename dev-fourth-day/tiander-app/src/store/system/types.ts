import { BaseAction } from "../baseTypes";
import { SystemInfo } from "@lbucior/tiander-sdk";

/**
 * Define [SystemInfo] types.
 */

export type SystemInfoState = SystemInfo;

export interface SystemInfoAction extends BaseAction {
  payload?: SystemInfoState;
}

export interface SystemInfoOwnProps {
  systemInfo?: SystemInfoState;
}

export interface SystemInfoConnectedProps {
  systemInfo?: SystemInfoState;
}

/**
 * Dispatch props.
 * fn(): BaseAction;
 */
export type SystemInfoDispatchProps = {
  loadSystemInfo: () => SystemInfoAction;
  loadedSystemInfo: (systemInfo: SystemInfo) => SystemInfoAction;

  clear: () => SystemInfoAction;
};

export type SystemInfoStoreProps = SystemInfoOwnProps &
  SystemInfoConnectedProps &
  SystemInfoDispatchProps;
