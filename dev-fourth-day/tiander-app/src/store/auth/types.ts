import { BaseAction } from "../baseTypes";
import { Session, User } from "@lbucior/tiander-sdk";

/**
 * Define auth types.
 */

export interface AuthState {
  user?: User;
  session?: Session;
  idToken?: string;
  isSuperAdmin?: boolean;
  userRole?: UserTypes;
}

export type UserAction = {
  action: string;
  userId?: string;
};

export enum UserTypes {
  SuperAdmin = "SuperAdmin",
  Administration = "Administration",
  RegularUser = "RegularUser",
  ReadOnly = "ReadOnly",
}

export interface AuthAction extends BaseAction {
  payload?: AuthState;
}

export interface AuthOwnProps {
  //
}

export interface AuthConnectedProps {
  user?: User;
  session?: Session;
  isSuperAdmin?: boolean;
  userRole?: UserTypes;
}

/**
 * Dispatch props.
 * fn: () => BaseAction;
 */
export type AuthDispatchProps = {
  login: (idToken: string) => AuthAction;
  logout: () => AuthAction;

  requestUser: () => AuthAction;
  fulfillUser: (user: User) => AuthAction;
  loadedUserSession: (session: Session) => AuthAction;
};

export type AuthStoreProps = AuthOwnProps &
  AuthConnectedProps &
  AuthDispatchProps;
