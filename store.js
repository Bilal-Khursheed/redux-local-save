import { createStore } from "redux";
import rootReducer from "./rootReducer";
const _ = require("lodash");
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    console.log("Working in localStorage", state);
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log('ERRROR', err)
    // Ignore write errors.
  }
};
const persistedState = loadState();
const store = createStore(
  rootReducer,
  // persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.subscribe(
//   _.throttle(() => {
//     saveState({
//       global: store.getState().global,
//     });
//   }, 1000)
// );
export default store;
