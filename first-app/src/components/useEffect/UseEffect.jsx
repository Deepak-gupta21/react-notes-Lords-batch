import { useState, useEffect } from "react";

function Example1() {
  const [count, setCount] = useState(0);

  let val = count;

  useEffect(() => {
    console.log("Effect runs on every render!");
    return () => {
        console.log("Component Unmounted! Cleanup function runs.");
      };
  },[val]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Example1;
