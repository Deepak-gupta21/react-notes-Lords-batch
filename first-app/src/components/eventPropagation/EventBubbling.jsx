import React from "react";

function BubblingExample() {
  const handleChildClick = (e) => {

    e.stopPropagation();
    console.log("🔹 Child Clicked");
  };

  const handleParentClick = () => {
    console.log("🔸 Parent Clicked");
  };

  return (
    <div onClick={handleParentClick} style={{ padding: 20, background: "#ddd" }}>
      <h3>Parent</h3>
      <button onClick={handleChildClick} style={{ padding: 10 }}>Click Me</button>
    </div>
  );
}

export default BubblingExample;
