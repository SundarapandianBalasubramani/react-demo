import { useState } from "react";
import { IUser } from "../../Components/Users/User";
import { useGetUsersQuery } from "../../store/services/user";
import { Events } from "../../Components/Modal/Actions";
import {
    TableBody,
    TableCell,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
    TableCellLayout,
    Avatar,
    Button,
  } from "@fluentui/react-components";
  import { AddRegular, DeleteRegular, EditRegular } from "@fluentui/react-icons";
import { UserForm } from "./UserForm";
import { Modal } from "../Dialog";
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

const columns = [
  { columnKey: "id", label: "Id" },
  { columnKey: "name", label: "Name" },
  { columnKey: "updatedAt", label: "Last updated" },
  { columnKey: "createdAt", label: "Created" },
  { columnKey: "age", label: "Age" },
  { columnKey: "actions", label: "Actions" },
];

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


export const Users: React.FC = () => {  
    const { isLoading, data } = useGetUsersQuery();
    const [user, setUser] = useState<UserFormState>(initialState);
  
    const showModal = (
      show: boolean,
      action: "edit" | "add" | "delete" | "none" = "none"
    ) => {    
    setUser({ ...initialState, showModal: show, action })
    
  };
  
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
    return(
        <>
        <div>
        <h2>Users</h2>
        <Button icon={<AddRegular />} onClick={() => showModal(true, "add")}>
          Add User
        </Button>
        
      </div>

      <Table arial-label="Default table" style={{ minWidth: "510px" }}>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHeaderCell key={column.columnKey}>
                {column.label}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isLoading && data
            ? data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <TableCellLayout>{item.id}</TableCellLayout>
                  </TableCell>
                  <TableCell>
                    <TableCellLayout
                      media={<Avatar aria-label={item.name} name={item.name} />}
                    >
                      {item.name}
                    </TableCellLayout>
                  </TableCell>
                  <TableCell>
                    {item.updatedAt
                      ? new Date(item.updatedAt).toLocaleDateString("en-US")
                      : ""}
                  </TableCell>
                  <TableCell>
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleDateString("en-US")
                      : ""}
                  </TableCell>
                  <TableCell>{item.age}</TableCell>
                  <TableCell>
                    <Button
                      icon={<EditRegular />}
                      onClick={() => onGridEvent(Events.Edit, item)}
                    />
                    &nbsp;&nbsp;
                    <Button
                      icon={<DeleteRegular />}
                      onClick={() => onGridEvent(Events.Delete, item)}
                    />
                  </TableCell>
                </TableRow>
              ))
            : undefined}
        </TableBody>
      </Table>
      <Modal title="User Details" open={user.showModal}>
        <UserForm onEvent={onEvent} data={user.data} />
      </Modal>
      </>
    )

}