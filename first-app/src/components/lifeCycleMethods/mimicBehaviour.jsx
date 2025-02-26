// We are memicing the behaviour of life cycle methods using useEffect() hook

import React, { useState, useEffect } from "react";

export default function FunctionalComponent() {
  const [count, setCount] = useState(0);

  // Equivalent to componentDidMount
  useEffect(() => {
    console.log("Component mounted!");
    return () => {
      // Equivalent to componentWillUnmount
      console.log("Component unmounted!");
    };
  }, []);

  // Equivalent to componentDidUpdate
  useEffect(() => {
    console.log("Component updated!");
  }, [count]); // Runs when `count` changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}
