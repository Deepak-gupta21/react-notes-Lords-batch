// import { useState , useCallback} from "react";
// import Button from "./Botton"; // Child component

// function Counter() {
//   const [count, setCount] = useState(0);

// //   const handleClick = useCallback(() => {
// //     setCount(count + 1);
// //   }, [count]); 
//   // Function is re-created only if 'count' changes

//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]); // Function is re-created only if 'count' changes

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <Button onClick={handleClick}>Increment</Button>
//     </div>
//   );
// }

// export default Counter;



// Example: Optimizing Form Data Submission with useCallback()

// Scenario:
// A form collects name and age.
// A button allows users to submit the form.
// The submit function should only be re-created when either name or age changes.

import { useState, useCallback } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Memoized function: Prevents re-creation unless `name` or `age` changes
  const handleSubmit = useCallback(() => {
    console.log("Submitting form with:", { name, age });
    alert(`Submitted: Name - ${name}, Age - ${age}`);
  }, [name, age]); // Only recreates when `name` or `age` changes


  // const handleSubmit = () => {
  //   console.log("Submitting form with:", { name, age });
  //   alert(`Submitted: Name - ${name}, Age - ${age}`);
  // }; 

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "auto", textAlign: "center" }}>
      <h2>Form with useCallback</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }}
      />
      <button onClick={handleSubmit} style={{ padding: "8px", marginTop: "10px", cursor: "pointer" }}>
        Submit
      </button>
    </div>
  );
}

export default UserForm;
