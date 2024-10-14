import { useContext, useState } from "react";
import { AppContext } from "../Theme";
import {
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useLazyGetLastEmployeeQuery,
} from "../../store/services/employees";
import { Events } from "../../Components/Modal/Actions";
import {
  Field,
  Input,
  InputOnChangeData,
  Button,
} from "@fluentui/react-components";

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
      <Field label="Name">
        <Input onChange={onChange} name="name" value={employee.name} />
      </Field>
      <Field label="Email">
        <Input onChange={onChange} name="email" value={employee.email} />
      </Field>
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
