import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("HelloWorld Test");

  const handleClick = () => {
    setHeading("A HelloWorld Project");
  };

  return (
    <>
      <h1>{heading}</h1>
      <button type="button" onClick={handleClick}>
        Update Heading
      </button>
    </>
  );
};

export default App;
