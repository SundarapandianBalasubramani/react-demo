import { useContext, useEffect, useState } from "react";
import styles from "./clock.module.css";
import { AppContext } from "../Context";
const DigitalClock: React.FC = () => {
  const [state, setState] = useState(new Date().toLocaleTimeString());

  const user = useContext(AppContext);

  useEffect(() => {
    const id = setInterval(() => {
      setState(new Date().toLocaleTimeString());
      console.log("Interval Id", id);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1 className={styles.header}>Digital Clock Component</h1>
      <h2>Welcome {user.name}</h2>
      <div className="card">
        <h2>Time : {state}</h2>
      </div>
    </>
  );
};

// const Time: React.FC = () => {
//     const [state, setState] = useState(new Date().toLocaleTimeString());

//     useEffect(() => {
//       const id = setInterval(() => {
//         setState(new Date().toLocaleTimeString());
//         console.log("Interval Id", id);
//       }, 1000);
//     }, []);

//     return (

//           <>{state}</>

//       )
// }

export default DigitalClock;
