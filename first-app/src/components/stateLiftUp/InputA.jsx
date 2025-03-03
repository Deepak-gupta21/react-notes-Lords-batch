import React, { useState } from "react";

export  default function InputA() {
  const [text, setText] = useState("");

  return (
    <div>
      <h3>Input A</h3>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
      />
      <p>Typed: {text}</p>
    </div>
  );
}




