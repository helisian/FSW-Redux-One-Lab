import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import CounterContainer from "./containers/CounterContainer";

let store = createStore(() => {})

const App = () => (
  <div>
    <h2> My Counter App </h2>
    <CounterContainer />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
