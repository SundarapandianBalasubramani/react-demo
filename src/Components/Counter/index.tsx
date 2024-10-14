import { useState } from "react";
import styles from "./styles.module.css";
const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1 className={styles.header}>Counter Component</h1>
      <p className="read-the-docs">count is {count}</p>
      <div className="card">
        <button onClick={onIncrement}>Click here to increment the count</button>
      </div>
    </>
  );
};

export default Counter;
