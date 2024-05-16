import { createTransform, persistReducer } from "redux-persist";
import { SystemInfoAction, SystemInfoState } from "./types";
import storage from "redux-persist/lib/storage";
import { actionTypes } from "./actions";
import reduxKeys from "../reduxKeys";
import CryptoJS from "crypto-js";
import { Reducer } from "redux";

const initialState: SystemInfoState = {
  apiEndpoint: undefined,
  authInfo: {
    authenticationEndpoint: "",
    firebaseConfig: {
      appId: undefined,
      apiKey: undefined,
      projectId: undefined,
      authDomain: undefined,
    },
  },
  graphqlEndpoint: undefined,
  realtimeEndpoint: undefined,
  region: undefined,
  stage: undefined,
  version: undefined,
};

const reducer = (
  state = initialState,
  action: SystemInfoAction
): SystemInfoState => {
  switch (action.type) {
    case actionTypes.loadSystemInfo: {
      return { ...state };
    }
    case actionTypes.loadedSystemInfo: {
      return { ...state, ...action.payload };
    }

    case actionTypes.clear: {
      return initialState;
    }

    default:
      return state;
  }
};

const encrypt = createTransform(
  (inboundState: any) => {
    try {
      if (!inboundState) {
        return inboundState;
      }
      const encryptedContent = CryptoJS.AES.encrypt(
        JSON.stringify(inboundState),
        reduxKeys.systemInfo
      );

      return encryptedContent.toString();
    } catch (e) {
      //
    }
  },
  (outboundState: any) => {
    try {
      if (!outboundState) {
        return outboundState;
      }
      const bytes = CryptoJS.AES.decrypt(outboundState, reduxKeys.systemInfo);
      const decryptedContent = bytes.toString(CryptoJS.enc.Utf8);

      return JSON.parse(decryptedContent);
    } catch (e) {
      //
    }
  }
);

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: reduxKeys.systemInfo,
  // Storage provider
  storage: storage,
  // Whitelist (Save Specific Reducers)
  whitelist: ["graphqlEndpoint", "authInfo"],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
  // Transform In/Out Bound States
  transforms: [encrypt],
};

export default persistReducer(persistConfig, reducer) as Reducer;
