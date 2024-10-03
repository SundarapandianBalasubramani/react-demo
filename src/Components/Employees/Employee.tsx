import React from "react";

export interface IEmployee {
  id: number;
  name: string;
  email: string;
}

export const Employee: React.FC<IEmployee> = ({
  email,

  id,
  name,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
};
