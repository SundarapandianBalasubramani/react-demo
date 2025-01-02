import { createContext, PropsWithChildren } from "react";

type User = {
  name: string;
  age: number;
  email: string;
  token: string;
};
export const AppContext = createContext<User>({} as User);

const value = {
  name: "John",
  age: 25,
  email: "john@abc.com",
  token: "1234567890",
};

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
