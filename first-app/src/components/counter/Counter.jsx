import "./Counter.css";
import { useState } from "react";

export default function Counter() {

  const [count, setCount] = useState(0); //   state=0
  const [name,setName] =useState("Faiz");

  return (
    <div>
      <h2>Count: {count}</h2>
      <h1>{name}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setName("Ibrahim")}>Change Name</button>


      {/* setCount(count + 1);
      setCount(count + 1); */}
    </div>
  );
}
