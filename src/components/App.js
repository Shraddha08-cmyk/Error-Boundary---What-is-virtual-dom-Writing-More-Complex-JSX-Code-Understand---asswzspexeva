import React from "react";
import "../styles/App.css";
import Component from "./Component";
import ErrorBoundary from "./ErrorBoundary";
const App = () => {
  let setFunc;

  let changeFunc = (func) => {
    setFunc = func;
  };

  const errorGenerator = () => {
    setFunc(true);
  };

  return (
    <div id="main">
      <h2>React Error Boundaries</h2>
      <ErrorBoundary>
        <Component change={changeFunc} />
      </ErrorBoundary>
      <button id="gen" onClick={errorGenerator}>
        Generate Error
      </button>
    </div>
  );
};

export default App;
