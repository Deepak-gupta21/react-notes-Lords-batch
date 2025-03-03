import React from "react";

export default function Input({ label, value, onChange }) {
  return (
    <div>
      <h3>{label}</h3>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
      />
      <p>Typed: {value}</p>
    </div>
  );
}

