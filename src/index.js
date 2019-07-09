import React from "react";
import ReactDOM from "react-dom";
import ReduxDemo from "./ReduxDemo";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ReduxDemo />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
