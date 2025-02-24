import { useState , useCallback} from "react";
import Button from "./Botton"; // Child component

function Counter() {
  const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]); 
  // Function is re-created only if 'count' changes

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Function is re-created only if 'count' changes

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
}

export default Counter;
