import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { AuthAction, AuthState, UserTypes } from "./types";
import { actionTypes } from "./actions";
import reduxKeys from "../reduxKeys";
import { isNil, isNull, isUndefined } from "lodash";
import { Reducer } from "redux";

const initialState: AuthState = {
  isSuperAdmin: false,
  userRole: UserTypes.RegularUser,
  userId: "",
};

const reducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case actionTypes.login: {
      if (isNil(action.payload)) {
        return { ...state };
      }

      const { idToken } = action.payload;

      return { ...state, idToken };
    }
    case actionTypes.userLoaded: {
      if (
        isUndefined(action.payload) ||
        isUndefined(action.payload.user) ||
        isNull(action.payload.user)
      ) {
        return state;
      }

      const { user } = action.payload;

      return { ...state, user };
    }
    case actionTypes.sessionLoaded: {
      if (
        isUndefined(action.payload) ||
        isUndefined(action.payload.session) ||
        isNull(action.payload.session)
      ) {
        return state;
      }

      const { session } = action.payload;

      let userCurrentRole: UserTypes = UserTypes.RegularUser;
      if (session?.groups) {
        const role = session.groups[0];
        if (role === UserTypes.SuperAdmin) {
          userCurrentRole = UserTypes.SuperAdmin;
        } else if (role === UserTypes.Administration) {
          userCurrentRole = UserTypes.Administration;
        } else if (role === UserTypes.RegularUser) {
          userCurrentRole = UserTypes.RegularUser;
        }
      }

      return {
        ...state,
        session,
        isSuperAdmin: userCurrentRole === UserTypes.SuperAdmin,
        userRole: userCurrentRole,
      };
    }

    case actionTypes.logout: {
      return initialState;
    }

    default:
      return state;
  }
};

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: reduxKeys.auth,
  // Storage provider
  storage: storage,
  // Whitelist (Save Specific Reducers)
  whitelist: ["user", "idToken"],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ["isSuperAdmin", "userId"],
  // Transform In/Out Bound States
  // transforms: [encrypt],
};

export default persistReducer(persistConfig, reducer) as Reducer;
