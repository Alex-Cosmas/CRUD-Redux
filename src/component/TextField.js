import React from "react";

export const TextField = ({ label, inputProps }) => {
  return (
    <div className="flex flex-col ">
      <label>{label}</label>
      <input />
    </div>
  );
};
