import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/Header";
import { store } from "./store/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
    </Provider>
  </React.StrictMode>
);
