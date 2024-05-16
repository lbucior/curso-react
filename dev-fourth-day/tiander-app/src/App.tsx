import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import FirebaseProvider from "./providers/firebase/FirebaseContext";
import { BrowserRouter } from "react-router-dom";
import BaseRouter from "./routes/BaseRouter";
import { HelmetProvider } from "react-helmet-async";
import { Persistor } from "redux-persist";
import { Store } from "redux";

type AppProps = {
  store: Store;
  persistor: Persistor;
  basename: string | undefined;
};

const App = (props: AppProps) => {
  return (
    /* Provide Redux store */
    <Provider store={props.store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={props.persistor} loading={<div />}>
        {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
        <React.Suspense fallback={<div />}>
          {/* Helmet page head provider. */}
          <HelmetProvider>
            {/* Override `basename` (e.g: `homepage` in `package.json`) */}
            <BrowserRouter basename={props.basename}>
              {/* Firebase application */}
              <FirebaseProvider>
                {/* Base application router */}
                <BaseRouter />
              </FirebaseProvider>
            </BrowserRouter>
          </HelmetProvider>
        </React.Suspense>
      </PersistGate>
    </Provider>
  );
};

export default App;
