import React from "react";
import { Button } from "react-bootstrap";
import Edit from "../SVG/Edit";
import Delete from "../SVG/Delete";
import { Events } from "../Modal/Actions";

export type IRole = "user" | "admin" | "superadmin";
export interface IUser {
  id: number | string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  createdAt: string;
  updatedAt: string;
  roles: IRole[];
}

export const User: React.FC<{
  data: IUser;
  onEvent: (e: Events, data: IUser) => void;
}> = ({ data, onEvent }) => {
  const {
    age,
    createdAt,
    email,
    firstName,
    lastName,
    id,
    name,
    roles,
    updatedAt,
  } = data;
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
      <td>
        <Button variant="primary" onClick={() => onEvent(Events.Edit, data)}>
          <Edit />
        </Button>
        &nbsp;&nbsp;
        <Button
          variant="secondary"
          onClick={() => onEvent(Events.Delete, data)}
        >
          <Delete />
        </Button>
      </td>
    </tr>
  );
};
