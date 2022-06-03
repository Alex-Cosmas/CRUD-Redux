import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../component/Button";
import { TextField } from "../../component/TextField";
import { editUser } from "./UserSlice";

export const EditUser = () => {
  const params = useParams();
  console.log(params.id);

  const dispatch = useDispatch();

  const users = useSelector((store) => store.users);

  console.log(users);

  const existingUser = users.filter((user) => user.id === params.id);

  const { name, email } = existingUser[0];
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: name,
    email: email,
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    console.log(values);
    dispatch(
      editUser({ id: params.id, name: values.name, email: values.email })
    );
    navigate("/");
  };
  return (
    <div className="max-w-xl mx-auto mt-10">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter your name here" }}
      />

      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "Enter your email here" }}
      />

      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};
