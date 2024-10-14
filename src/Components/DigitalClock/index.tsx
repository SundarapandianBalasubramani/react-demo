import { memo, useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";
import { useTime } from "./useTime";

let renderCount = 0;
let renderCount1 = 0;
const MemoiezedComponent = memo(
  ({ age, id, name }: { id: number; age: number; name: string }) => {
    console.log("rendered", ++renderCount);
    return (
      <div>
        <ul>
          <li>Age: {age}</li>
          <li>Id: {id}</li>
          <li>Name: {name}</li>
        </ul>
      </div>
    );
  }
);

const Component: React.FC<{
  id: number;
  age: number;
  name: string;
}> = ({ age, id, name }) => {
  console.log("renderCount1", ++renderCount1);
  return (
   
      <div>
        <ul>
          <li>Age: {age}</li>
          <li>Id: {id}</li>
          <li>Name: {name}</li>
        </ul>
      </div>
   
  );
};

const DigitalClock: React.FC = () => {
  // const [state, setState] = useState(new Date().toLocaleTimeString());

  // const [user, setUser] = useState<{ id: number; age: number; name: string }>({
  //   id: 1,
  //   age: 40,
  //   name: "John Doe",
  // });

  // const value = useMemo(() => {
  //   return state;
  // }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setState(new Date().toLocaleTimeString());
  //     console.warn("value", value);
  //     setUser({ id: 2, age: 50, name: "Jane Doe" });
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, []);
  const time = useTime();
  return (
    <div>
      <h1 className={styles.header}>Digital Clock</h1>
      <h2>Time : {time}</h2>
      <br />
     
    </div>
  );
};
export default DigitalClock;
