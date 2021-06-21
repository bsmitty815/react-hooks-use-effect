import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

    //   useEffect(() => {}): No dependencies array
    //      Run the side effect every time our component renders (whenever state or props change)
    //   useEffect(() => {}, []): Empty dependencies array
    //      Run the side effect only the first time our component renders
    //   useEffect(() => {}, [variable1, variable2]): Dependencies array with elements in it
    //      Run the side effect any time the variable(s) change

  useEffect(() => {
    document.title = text;
  }, [text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
} 

export default App;
