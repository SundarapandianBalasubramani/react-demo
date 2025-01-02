import React, { useContext, useState } from "react";
import { AppContext } from "../Theme";
import {
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useLazyGetLastEmployeeQuery,
} from "../../store/services/employees";
import { Events } from "../../Components/Modal/Actions";
import { InputOnChangeData, Button } from "@fluentui/react-components";
import { Fields, IField } from "../Fields";

const fields: IField[] = [
  { label: "Name", name: "name", type: "TEXT" },
  { label: "Email", name: "email", type: "TEXT" },
];
export const EmployeeForm: React.FC<{
  onEvent: (e: Events) => void;
  data: {
    name: string;
    email: string;
    id?: number | string;
  };
}> = (props) => {
  const { toast } = useContext(AppContext);

  const [employee, setEmployee] = useState(props.data);

  const [addEmployee] = useCreateEmployeeMutation();
  const [updateEmployee] = useUpdateEmployeeMutation();
  const [getEmployee] = useLazyGetLastEmployeeQuery();

  const onChange = (
    ev: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    const { name } = ev.currentTarget;
    setEmployee({
      ...employee,
      [name]: data.value,
    });
  };

  const onEvent = async (e: Events) => {
    console.log("Employee Details:", employee);
    if (e === Events.Close) props.onEvent(Events.Close);
    else {
      if (Number(employee.id) === 0) {
        const data = await getEmployee().unwrap();
        await addEmployee({
          ...employee,
          id: String(Number(data[0] ? data[0].id : 0) + 1),
        });
        toast("success", "Employee details added successfully");
      } else {
        await updateEmployee({
          ...employee,
        });
        toast("success", "Employee details updated successfully");
      }
      props.onEvent(Events.Close);
    }
    console.log("Employee Details:", employee);
  };

  return (
    <>
      <Fields data={fields} onChange={onChange} />
      &nbsp;&nbsp; &nbsp;&nbsp;
      <br />
      <Button appearance={"primary"} onClick={() => onEvent(Events.Submit)}>
        Submit
      </Button>
      &nbsp;&nbsp;
      <Button onClick={() => onEvent(Events.Close)}>Cancel</Button>
    </>
  );
};
