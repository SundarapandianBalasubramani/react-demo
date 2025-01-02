import { useState } from "react";
import { Events } from "../../Components/Modal/Actions";
import { Button } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";
import { EmployeeForm } from "./EmployeeForm";
import { Modal } from "../Dialog";
import { useGetEmployeesQuery } from "../../store/services/employees";
import { IEmployee } from "../../Components/Employees/Employee";

import { TableComponent } from "../TableComponent";
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
      <TableComponent
        data={data}
        isLoading={isLoading}
        columns={columns}
        onGridEvent={onGridEvent}
        keyField="id"
      />
      <Modal title="Employee Details" open={employee.showModal}>
        <EmployeeForm onEvent={onEvent} data={employee.data} />
      </Modal>
    </>
  );
};
