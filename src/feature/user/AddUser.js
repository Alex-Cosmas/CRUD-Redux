import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../component/Button";
import { TextField } from "../../component/TextField";
import { addUser } from "./UserSlice";

import { v4 as uuidv4 } from "uuid";

export const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "" });

    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
    console.log(values);
    navigate("/");
  };
  return (
    <div className="max-w-xl mx-auto mt-10">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "enter your name here" }}
      />

      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "enter your email here" }}
      />

      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

// Add User
