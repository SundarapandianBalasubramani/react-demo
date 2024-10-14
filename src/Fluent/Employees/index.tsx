import { useState } from "react";
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
import { EmployeeForm } from "./EmployeeForm";
import { Modal } from "../Dialog";
import { useGetEmployeesQuery } from "../../store/services/employees";
import { IEmployee } from "../../Components/Employees/Employee";
const defaultEmployee: IEmployee = {
  email: "",

  id: 0,

  name: "",
};

const columns = [
  { columnKey: "id", label: "Id" },
  { columnKey: "name", label: "Name" },
  { columnKey: "email", label: "Email" },
  { columnKey: "actions", label: "Actions" },
];

type EmployeeFormState = {
  showModal: boolean;
  action: "edit" | "add" | "delete" | "none";
  data: IEmployee;
};

const initialState: EmployeeFormState = {
  action: "none",
  showModal: false,
  data: defaultEmployee,
};

export const Employees: React.FC = () => {
  const { isLoading, data } = useGetEmployeesQuery();
  const [employee, setEmployee] = useState<EmployeeFormState>(initialState);

  const showModal = (
    show: boolean,
    action: "edit" | "add" | "delete" | "none" = "none"
  ) => {
    setEmployee({ ...initialState, showModal: show, action });
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

  const onGridEvent = (e: Events, data: IEmployee) => {
    switch (e) {
      case Events.Edit:
        setEmployee({
          showModal: true,
          action: "edit",
          data: { ...data },
        });
        break;
      case Events.Delete:
        setEmployee({
          showModal: true,
          action: "delete",
          data: { ...data },
        });
        break;
    }
  };
  return (
    <>
      <div>
        <h2>Employees</h2>
        <Button icon={<AddRegular />} onClick={() => showModal(true, "add")}>
          Add Employee
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

                  <TableCell>{item.email}</TableCell>
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
      <Modal title="Employee Details" open={employee.showModal}>
        <EmployeeForm onEvent={onEvent} data={employee.data} />
      </Modal>
    </>
  );
};
