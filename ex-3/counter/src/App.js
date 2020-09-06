import React, { useState, Fragment } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <Fragment>
      <div className="center">
        <h1>Count: {count} </h1>
        <button onClick={increase} className="btn btn-primary">
          Increase
        </button>
      </div>
    </Fragment>
  );
}

export default App;
