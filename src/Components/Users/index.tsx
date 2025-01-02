import React, {  useState } from "react";
import { IUser, User } from "./User";
import { ModalComponent } from "../Modal";
import Table from "react-bootstrap/Table";
import UserForm from "./UserForm";
import { Button } from "react-bootstrap";
import Add from "../SVG/Add";
import { Events } from "../Modal/Actions";
import {  useGetUsersQuery } from "../../store/services/user";

type UserItem = Pick<
  IUser,
  "id" | "name" | "email" | "firstName" | "lastName" | "age"
> & { roles: string };

const defaultUser: UserItem = {
  age: 0,
  email: "",
  firstName: "",
  id: 0,
  lastName: "",
  name: "",
  roles: "",
};
export const UsersContainer: React.FC = () => {
  const { error, isLoading: loading, data: users } = useGetUsersQuery();
  // const [users, setUsers] = useState<IUser[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | undefined>();
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch(`${baseUrl}/users`);
  //       const users = await response.json();
  //       setUsers(users);
  //     } catch (e) {
  //       setError((e as Error).message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, []);
  return (
    <UsersPresentaion
      loading={loading}
      data={users || []}
      error={error as any}
    />
  );
};

type UserFormState = {
  showModal: boolean;
  action: "edit" | "add" | "delete" | "none";
  data: UserItem;
};

const initialState: UserFormState = {
  action: "none",
  showModal: false,
  data: defaultUser,
};

export const UsersPresentaion: React.FC<{
  loading: boolean;
  data: IUser[];
  error?: string;
}> = ({ loading, data, error }) => {
  const [user, setUser] = useState<UserFormState>(initialState);

  const showModal = (show: boolean, action:"edit" | "add" | "delete" | "none" = "none") =>
    setUser({ ...initialState, showModal: show, action });

  const onEvent = (e: Events) => {
    switch (e) {
      case Events.Close:
        showModal(false);
        break;
      case Events.Submit:
        console.log("Form Submitted");
        break;
    }
  };

  const onGridEvent = (e: Events, data: IUser) => {
    switch (e) {
      case Events.Edit:
        setUser({
          showModal: true,
          action: "edit",
          data: { ...data, roles: data.roles[0] },
        });
        break;
      case Events.Delete:
        setUser({
          showModal: true,
          action: "delete",
          data: { ...data, roles: data.roles[0] },
        });
        break;
    }
  };

  console.log(user);

  return (
    <>
      {loading && !error && <div>...Loading</div>}
      {!loading && error && <div>...Sorry some thing went wrong</div>}
      {!loading && !error && (
        <div>
          <h1> Users</h1>
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Age</th>
                <th>Email</th>
                <th>Roles</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id}>
                  <User data={user} onEvent={onGridEvent} />
                </tr>
              ))}
            </tbody>
          </Table>
          <div style={{ padding: "20px" }}>
            <br />
            <Button onClick={() => showModal(true,'add')}>
              <Add /> Add User
            </Button>
            <br />
          </div>
          {user.showModal && (
            <ModalComponent
              show={user.showModal}
              onHide={() => showModal(false)}
              title={user.action === "add" ? "Add User" : "Edit User"}
            >
              <UserForm onEvent={onEvent} data={user.data} />
            </ModalComponent>
          )}
        </div>
      )}
    </>
  );
};
