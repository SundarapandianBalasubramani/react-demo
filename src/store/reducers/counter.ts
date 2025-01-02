type Action = "INCREMENT" | "DECREMENT" | "CUSTOM";

export const counter = (
  state = { count: 0 },
  action: { type: Action; payload?: number }
) => {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  } else if (action.type === "CUSTOM" && action.payload) {
    return { count: state.count + action.payload };
  }
  return state;
};
