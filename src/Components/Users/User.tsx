import React from "react";

export type IRole = "user" | "admin" | "superadmin";
export interface IUser {
  id: number;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  age: 35;
  createdAt: string;
  updatedAt: string;
  roles: IRole[];
}

export const User: React.FC<IUser> = ({
  age,
  createdAt,
  email,
  firstName,
  lastName,
  id,
  name,
  roles,
  updatedAt,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{createdAt}</td>
      <td>{updatedAt}</td>
      <td>{age}</td>
      <td>{email}</td>
      <td>{roles.join(", ")}</td>
    </tr>
  );
};
