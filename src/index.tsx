import ReactDOM from "react-dom";
import "./style/global.css";

import { App } from "./app";
import { Provider } from "react-redux";
import store from "./store";
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
