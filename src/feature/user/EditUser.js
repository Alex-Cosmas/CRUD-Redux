import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../component/Button";
import { TextField } from "../../component/TextField";

export const EditUser = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    console.log(values);
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
