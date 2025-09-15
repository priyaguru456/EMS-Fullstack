import React, { useState } from "react";
import { createEmployee } from "../services/EmployeeService";

export default function AddEmployee() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEmployee(employee);
      alert("Employee added successfully!");
      setEmployee({ firstName: "", lastName: "", email: "" });
    } catch (err) {
      alert("Error: " + err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={employee.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        /><br/>
        <input
          type="text"
          name="lastName"
          value={employee.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        /><br/>
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          placeholder="Email"
          required
        /><br/>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}
