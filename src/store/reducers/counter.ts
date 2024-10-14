
export const counter = (state: { count: number }, action: { type: string }) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      default:
        return { count: 0 };
    }
  };