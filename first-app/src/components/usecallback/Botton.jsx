import React from "react";

const Button = React.memo(({ onClick, children }) => {
  console.log("Button re-rendered");
  return <button onClick={onClick}>{children}</button>;
});

export default Button;
