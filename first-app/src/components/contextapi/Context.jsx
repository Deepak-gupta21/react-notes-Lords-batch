import React, { createContext, useContext } from "react";

const MessageContext = createContext();

const GrandChild = () => {
  const message = useContext(MessageContext);
  return <h3>{message}</h3>;
};

const Child = () => {
  return <GrandChild />;
};

const ContextCheck = () => {
  const message = "Hello from Context!";
  return (
    <MessageContext.Provider value={message}>
      <Child />
    </MessageContext.Provider>
  );
};

export default ContextCheck;
