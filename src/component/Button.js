import React from "react";

export const Button = ({ onClick, children }) => {
  return (
    <div>
      <button
        className="px-6 py-2 my-10 text-white bg-indigo-600 rounded hover:bg-indigo-800"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
