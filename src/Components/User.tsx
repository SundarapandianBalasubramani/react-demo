import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../Context";
import styled from "styled-components";


const User: React.FC = () => {
  const user = useContext(Appcontext);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    // make api call and check unique username
    console.log("useEffect called");
    console.log({ firstName, lastName });
  }, [firstName, lastName]);

  const onSubmit = () => {
    console.log({ firstName, lastName });
  };

  return (
    <div>
      <h1>User Component</h1>
      <div>
        <label>First Name</label>
        <input
          placeholder="First Name"
          type="text"
          defaultValue={user.firstName}
          value={firstName}
          name="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input placeholder="Last Name"
          type="text"
          value={lastName}
          name="lastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <Submit onClick={onSubmit}>Submit</Submit>
      <Submit1 onClick={onSubmit}>Submit</Submit1>
    </div>
  );
};

const Submit = styled.button`
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
`;

const Submit1 = styled(Submit)`
  background-color: green;
`;
export default User;
