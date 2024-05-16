import React from "react";
import ReactDOM from "react-dom/client";
import { persistor, store } from "./store/store";
import ServerErrorPage from "./pages/errors/ServerErrorPage";
import App from "./App";

/**
 * Bootstrap App.
 */
import { bootstrap } from "./services/bootstrap";

/**
 * Styles.
 */
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Base URL of the website.
 */
const { PUBLIC_URL } = process.env;

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

bootstrap()
  .then(() => {
    root.render(
      <React.StrictMode>
        <App store={store} persistor={persistor} basename={PUBLIC_URL} />
      </React.StrictMode>,
    );
  })
  .catch(() => {
    root.render(
      <React.StrictMode>
        <ServerErrorPage />
      </React.StrictMode>,
    );
  });
