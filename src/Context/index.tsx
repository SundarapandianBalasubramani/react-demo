import React, { createContext, PropsWithChildren } from "react";

export const Appcontext = createContext<User>({} as User);

type User = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  bio: string;
  image: string;
};

const user = {
  firstName: "John",
  lastName: "",
  email: "",
  username: "",
  bio: "",
  image: "",
};
export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <Appcontext.Provider value={user}>{children}</Appcontext.Provider>;
};
