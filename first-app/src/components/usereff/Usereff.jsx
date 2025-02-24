import React, { useRef } from "react";

const UncontrolledComponent = () => {
  const inputRef = useRef(null); // Reference to the input field
  const emailRef = useRef(null);

  const handleSubmit = () => {
    alert(`Entered Name: ${inputRef.current.value}`); // Access value directly
  };


  const handleEmail = () => {
    alert(`Entered email: ${emailRef.current.value}`); // Access value directly
  };

  return (
    <div>
      <input type="text" ref={inputRef} /> {/* No state management */}
      <button onClick={handleSubmit}>Submit</button>



      <input type="text" ref={emailRef} /> {/* No state management */}
      <button onClick={handleEmail}>Email</button>
    </div>
  );
};

export default UncontrolledComponent;
