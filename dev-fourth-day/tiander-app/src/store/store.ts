import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

// Root Reducers
import rootReducers from "./reducers";

const store = configureStore({
  reducer: rootReducers,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      // Ignore these field paths in all actions.
      ignoredActionPaths: [],
      // Ignore these paths in the state.
      ignoredPaths: [],
    }).concat(logger),
  devTools: process.env.NODE_ENV !== "production",

  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers({
      autoBatch: false,
    }),
});

// Middleware: Redux Persist
const persistor = persistStore(store);

export { store, persistor };
