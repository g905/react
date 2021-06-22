import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import { addTodo, setVisibilityFilter, toggleTodo } from "./js/actions/index";
import App from "./js/components/App";
import "./index.css";
import { VisibilityFilters } from "./js/constants/action-types";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

console.log(store.getState());

//const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo("Learn redux"));
store.dispatch(addTodo("Learn react"));
store.dispatch(addTodo("Learn jsx"));
store.dispatch(toggleTodo(2));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
