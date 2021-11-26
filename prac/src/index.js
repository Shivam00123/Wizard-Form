import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configStore } from "./store";
import { Provider } from "react-redux";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>;

let store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
