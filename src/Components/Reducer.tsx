import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { increment } from "../store/slices/counter";


const Reducer: React.FC = () => {
  const dispatch = useAppDispatch();  
  const count = useAppSelector((state) => state.counter.value);

  
  return (
    <div>
      <h1>Counter with Reducer Example </h1>
      <h2>Counter Value : {count}</h2>
      <div className="card">
        <button onClick={()=>{ dispatch(increment())}}>Click here to increment the count</button>
      </div>
    </div>
  );
};

export default Reducer;
