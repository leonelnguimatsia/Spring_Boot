/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Datei      : ListEmployeeComponent.jsx                *
 * Ordner     : components                               *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

import React, { useEffect, useState } from 'react';
import { listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
  /* Zustand: Liste aller Mitarbeiter */
  const [employees, setEmployees] = useState([]);

  /* Navigation-Hook für die Navigation zu anderen Seiten */
  const navigator = useNavigate();

  /* Mitarbeiter beim Laden der Komponente abrufen */
  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addNewEmployee() {
    navigator('/add-employee');
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>

      <button className="btn btn-primary" onClick={addNewEmployee}>
        Add Employee
      </button>

      {/* Tabelle zur Anzeige aller Mitarbeiter */}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
          </tr>
        </thead>

        {/* Jede Zeile entspricht einem Mitarbeiter */}
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
