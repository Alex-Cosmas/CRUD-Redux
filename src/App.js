import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AddUser } from "./feature/user/AddUser";
import UserList from "./feature/user/UserList";

function App() {
  return (
    <main className="container px-2 pt-10 mx-auto max-5xl md:pt-32">
      {/* font-main hyphens-manual  */}

      <h1 className="text-2xl font-bold text-center text-gray-700">
        Crud with Redux toolkit
      </h1>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </main>
  );
}

export default App;

// https://codingstatus.com/create-dynamic-table-from-json-in-react-js/
