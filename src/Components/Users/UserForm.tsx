import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { Events, ModalActions } from "../Modal/Actions";
import { useCreateUserMutation, useUpdateUserMutation } from "../../store/services/user";
import { data } from "../Compound/data";
import { IRole } from "./User";

const UserForm: React.FC<{onEvent:(e:Events)=>void, data: {
    name: string,
    email: string,
    firstName: string,
    age: number,
    lastName: string,
    roles: string,
    id?: number,
  }}> = (props) => {
  const [user, setUser] = useState(props.data);

  const [addUser]  = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;  
    setUser({
      ...user,
      [name]: value,
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Details:", user);
    // Add your form submission logic here
    
  };


  const onEvent = async(e: Events) => {
        if(e === Events.Close) props.onEvent(Events.Close);
        else{
            console.log("User Details:", user);            
            if(Number(user.id) === 0){
              await  addUser({...user, roles: [user.roles as IRole], id: undefined});
            }
            else{
              await   updateUser({...user, roles: [user.roles as IRole]});
            }
            props.onEvent(Events.Close);
        }
        console.log("User Details:", user);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Form.Label for="name">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={user.name}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label for="firstName">First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your First Name"
            value={user.firstName}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label for="lastName">Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your Last Name"
            value={user.lastName}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label for="email">Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label for="password">Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            id="age"
            placeholder="Enter your Age"
            value={user.age === 0 ? "" : user.age}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label for="role">Role</Form.Label>
          <Form.Select id="role" value={user.roles} name="roles" aria-label="Role" onChange={onSelectionChange}>
            <option>Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>            
          </Form.Select>
        </FormGroup>
      </Form>
      <ModalActions onEvent={onEvent} />
    </>
  );
};

export default UserForm;
