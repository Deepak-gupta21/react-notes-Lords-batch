import React, { useState } from "react";

const ConditionalComponent = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={() => setShowText(!showText)}>
        {showText ? "Hide" : "Show"} Message
      </button>

      {/* Conditional Rendering */}
      {showText && <p style={{ marginTop: "10px" }}>Hello, this is a conditional message!</p>}  
      {/* show rext = false  */}
    </div>
  );
};

export default ConditionalComponent;
