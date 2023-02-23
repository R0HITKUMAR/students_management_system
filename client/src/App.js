import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Add from "./components/Form";
import List from "./components/List";
import Update from "./components/Update";

function App() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1 className="text-center m-3">Student Management System</h1>
      <div className="row">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            onClick={() => navigate("/")}
            defaultChecked
          />
          <label className="btn btn-outline-danger" htmlFor="btnradio1">
            List of Students
          </label>
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
            onClick={() => navigate("/add")}
          />
          <label className="btn btn-outline-danger" htmlFor="btnradio2">
            Add Student
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
