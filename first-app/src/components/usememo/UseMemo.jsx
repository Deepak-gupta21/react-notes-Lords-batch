import { useState, useMemo } from "react";

function OptimizedComponent() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const memoizedValue = useMemo(() => {
    console.log("Performing expensive calculation...");
    let result = 0;
    for (let i = 0; i < 100; i++) {
      result += i;
    }
    return result;
  }, [count]); // Only recalculates when 'count' changes

  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black" }}>
      <h2>Expensive Value: {memoizedValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default OptimizedComponent;
