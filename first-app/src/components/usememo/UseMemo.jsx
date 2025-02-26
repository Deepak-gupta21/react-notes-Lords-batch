// import { useState, useMemo } from "react";

// function OptimizedComponent() {
//   const [count, setCount] = useState(0);
//   const [dark, setDark] = useState(false);

//   const memoizedValue = useMemo(() => {
//     console.log("Performing expensive calculation...");
//     let result = 0;
//     for (let i = 0; i < 100; i++) {
//       result += i;
//     }
//     return result;
//   }, [count]); // Only recalculates when 'count' changes

//   return (
//     <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black" }}>
//       <h2>Expensive Value: {memoizedValue}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//       <button onClick={() => setDark(!dark)}>Toggle Theme</button>
//     </div>
//   );
// }

// export default OptimizedComponent;



import { useState, useMemo } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Memoized calculation: Determines if the user is an adult or a minor
  const ageCategory = useMemo(() => {
    console.log("Calculating age category..."); // Debugging log
    return age >= 18 ? "Adult" : "Minor";
  }, [age]); // Only recalculates when `age` changes


  // const ageCategory = () => {
  //   console.log("Calculating age category..."); // Debugging log
  //   return age >= 18 ? "Adult" : "Minor";
  // }; 

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "auto", textAlign: "center" }}>
      <h2>Form with useMemo</h2>
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
      <h3>Name: {name}</h3>
      <h3>Age Category: {ageCategory}</h3>
    </div>
  );
}

export default UserForm;
