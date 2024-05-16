import { AuthAction, AuthDispatchProps } from "./types";
import { Session, User } from "@lbucior/tiander-sdk";

/**
 * [Auth] action types.
 */
export const actionTypes = {
  login: "[User][Login] Action",
  logout: "[User][Logout] Action",

  userRequested: "[User][Request User] Action",
  userLoaded: "[User][Load User] Action",
  sessionLoaded: "[User][Loaded Session] Action",
};

/**
 * User auth actions.
 */
const actions: AuthDispatchProps = {
  login: (idToken: string): AuthAction => ({
    type: actionTypes.login,
    payload: { idToken },
  }),
  requestUser: (): AuthAction => ({
    type: actionTypes.userRequested,
  }),
  fulfillUser: (user: User): AuthAction => ({
    type: actionTypes.userLoaded,
    payload: { user },
  }),
  loadedUserSession: (session: Session): AuthAction => ({
    type: actionTypes.sessionLoaded,
    payload: { session },
  }),

  /**
   * Logout user action.
   */
  logout: (): AuthAction => ({
    type: actionTypes.logout,
  }),
};

export default actions;
