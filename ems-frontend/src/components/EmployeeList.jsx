import React, { useEffect, useState } from "react";
import { getEmployees } from "../services/EmployeeService";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees()
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.firstName} {emp.lastName} - {emp.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
