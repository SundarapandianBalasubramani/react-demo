import { useContext, useState } from "react";
import { AppContext } from "../Theme";
import {
  useCreateUserMutation,
  useLazyGetLastUserQuery,
  useUpdateUserMutation,
} from "../../store/services/user";
import { Events } from "../../Components/Modal/Actions";
import {
  Dropdown,
  Field,
  Input,
  InputOnChangeData,
  Option,
  Button,
  makeStyles,
} from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";
import { IRole } from "../../Components/Users/User";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    width: "100%",
  },
  dropdown: {
    width: "100%",
  },
});
export const UserForm: React.FC<{
  onEvent: (e: Events) => void;
  data: {
    name: string;
    email: string;
    firstName: string;
    age: number;
    lastName: string;
    roles: string;
    id?: number | string;
  };
}> = (props) => {
  const { toast } = useContext(AppContext);
  const styles = useStyles();
  const [user, setUser] = useState(props.data);

  const [addUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [getUser] = useLazyGetLastUserQuery();

  const onChange = (
    ev: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    const { name } = ev.currentTarget;
    setUser({
      ...user,
      [name]: data.value,
    });
  };

  const onOptionSelect: DropdownProps["onOptionSelect"] = (ev, data) => {
    console.log("Option Selected:", ev);
    setUser({
      ...user,
      roles: data.optionValue!,
    });
  };

  const onEvent = async (e: Events) => {
    console.log("User Details:", user);
    if (e === Events.Close) props.onEvent(Events.Close);
    else {
      if (Number(user.id) === 0) {
        const data = await getUser().unwrap();
        await addUser({
          ...user,
          roles: [user.roles as IRole],
          id: String(Number(data[0] ? data[0].id : 0) + 1),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        toast("success", "User added successfully");
      } else {
        await updateUser({
          ...user,
          roles: [user.roles as IRole],
          updatedAt: new Date().toISOString(),
        });
        toast("success", "User updated successfully");
      }
      props.onEvent(Events.Close);
    }
    console.log("User Details:", user);
  };

  return (
    <>
      <Field label="Name">
        <Input onChange={onChange} name="name" value={user.name} />
      </Field>
      <Field label="First Name">
        <Input onChange={onChange} name="firstName" value={user.firstName} />
      </Field>
      <Field label="Last Name">
        <Input onChange={onChange} name="lastName" value={user.lastName} />
      </Field>
      <Field label="Email">
        <Input onChange={onChange} name="email" value={user.email} />
      </Field>
      <Field label="Age">
        <Input
          onChange={onChange}
          name="age"
          value={String(user.age)}
          type="number"
        />
      </Field>
      <div className={styles.root}>
        <label id={"role"}>Roles</label>
        <Dropdown
          className={styles.dropdown}
          aria-labelledby={"role"}
          placeholder="Select Role"
          name="roles"
          onOptionSelect={onOptionSelect}
          value={user.roles}
        >
          {[
            { value: "admin", label: "Admin" },
            { value: "user", label: "User" },
          ].map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Dropdown>
      </div>
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
