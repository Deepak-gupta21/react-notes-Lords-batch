import React, { useState } from "react";
export default function InputB() {
  const [text, setText] = useState("");

  return (
    <div>
      <h3>Input B</h3>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
      />
      <p>Typed: {text}</p>
    </div>
  );
}