import { useState } from "react";
import Home from "./components/Home";
import Student from "./components/student_data";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Student App</h2>

        <ul className="nav-links">
          <li>
            <button onClick={() => setPage("home")}>
              Home
            </button>
          </li>

          <li>
            <button onClick={() => setPage("student")}>
              Student
            </button>
          </li>
        </ul>
      </nav>

      <div className="page-content">
        {page === "home" && <Home />}
        {page === "student" && <Student />}
      </div>
    </>
  );
}

export default App;