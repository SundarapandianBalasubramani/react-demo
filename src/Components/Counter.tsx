import React, { useState } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: red;
  font-size: 24px;
`;

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <H1>Counter Component</H1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};

export default Counter;
