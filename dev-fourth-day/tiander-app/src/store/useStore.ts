import {
  GetSessionDocument,
  GetSystemInfoDocument,
  Session,
  SystemInfo,
  User,
} from "@lbucior/tiander-sdk";
import { systemInfoActions } from "./system";
import { authActions } from "./auth";
import { frontSdk } from "../sdk/frontSdk";
import { Store } from "redux";

export type BaseAppState = {
  systemInfo: SystemInfo;
  me?: User;
  session?: Session;
  sessionError?: Error;
};

export interface BaseActionsStore {
  fetchSystemInfo: Function;
  fetchSession: Function;
}

export const useStore = (store: Store) => {
  const actions: BaseActionsStore = {
    async fetchSystemInfo() {
      const {
        data: { systemInfo },
      } = await frontSdk.query({
        query: GetSystemInfoDocument,
        fetchPolicy: "no-cache",
      });
      if (systemInfo) {
        store.dispatch<any>(systemInfoActions.loadedSystemInfo(systemInfo));
      }
    },
    async fetchSession() {
      const {
        data: { me, session },
      } = await frontSdk.query({
        query: GetSessionDocument,
        fetchPolicy: "no-cache",
      });

      if (me && session) {
        store.dispatch<any>(authActions.fulfillUser(me));
        store.dispatch<any>(authActions.loadedUserSession(session));
      }
    },
  };

  return actions;
};
