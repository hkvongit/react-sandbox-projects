import React from "react";
import { createStore } from "redux";

export default class ReduxDemo extends React.Component {
  render() {
    // step2 : create reducer, requires state and action
    const reducer = function(state, action) {
      if (action.type === "ATTACK") {
        return action.payload;
      }
      if (action.type === "LOCKY") {
        return action.payload;
      }
      return state;
    };
    // Step 1: createStore , requires reducer and state
    const store = createStore(reducer, "peace");

    // Step 3 : Subscribe
    store.subscribe(() => {
      console.log("Store is now", store.getState());
    });

    //Step 4 : dispatch action
    store.dispatch({ type: "ATTACK", payload: "IRONMAN IS HERE" });
    store.dispatch({ type: "LOCKY", payload: "HULK" });

    return <div>REDUX REACT BASICS</div>;
  }
}
