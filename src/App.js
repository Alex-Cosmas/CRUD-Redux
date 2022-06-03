import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import UserList from "./feature/user/UserList";
import { AddUser } from "./feature/user/AddUser";
import { EditUser } from "./feature/user/EditUser";

function App() {
  return (
    <main className="container px-2 pt-10 mx-auto max-5xl md:pt-32">
      {/* font-main hyphens-manual  */}

      <div className="flex items-center justify-center space-x-10 ">
        <Link to="/">
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>{" "}
            <div className="font-semibold"> Home</div>
          </div>
        </Link>
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Crud with Redux toolkit
        </h1>
      </div>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </main>
  );
}

export default App;

// https://codingstatus.com/create-dynamic-table-from-json-in-react-js/
