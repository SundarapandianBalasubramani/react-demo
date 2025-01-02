
import { useAppDispatch, useAppSelector } from "../store/reducers/hooks";
import { decrement, increment } from "../store/slices/counter";

// type Action = "INCREMENT" | "DECREMENT" | "CUSTOM";

// const reducer = (
//   state = { count: 0 },
//   action: { type: Action; payload?: number }
// ) => {
//   if (action.type === "INCREMENT") {
//     return { count: state.count + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { count: state.count - 1 };
//   } else if (action.type === "CUSTOM" && action.payload) {
//     return { count: state.count + action.payload };
//   }
//   return state;
// };

const Reducer: React.FC = () => {
  const  count  = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  //const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      {/* <h1>Counter with Reducer Example </h1>
      <h2>Counter Value : {count}</h2>
      <div className="card">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div> */}
      <h1>Counter with Reducer Example </h1>
      <h2>Counter Value : {count}</h2>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Reducer;
