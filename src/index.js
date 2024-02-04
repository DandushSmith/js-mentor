import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ErrorBoundary } from "react-error-boundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary fallback={<div>Oops, something went wrong...</div>}>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);

reportWebVitals();
