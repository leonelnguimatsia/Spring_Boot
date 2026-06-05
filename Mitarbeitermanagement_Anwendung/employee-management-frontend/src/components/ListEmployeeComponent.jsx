/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Datei      : ListEmployeeComponent.jsx                *
 * Ordner     : components                               *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

import React, { useEffect, useState } from 'react';
import { listEmployees, deleteEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
  /* Zustand: Liste aller Mitarbeiter */
  const [employees, setEmployees] = useState([]);

  /* Navigation-Hook für die Navigation zu anderen Seiten */
  const navigator = useNavigate();

  /* Mitarbeiter beim Laden der Komponente abrufen */
  useEffect(() => {
    getAllEmployees();
  }, []);

  /* Alle Mitarbeiter aus dem Backend abrufen und im Zustand speichern */
  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /* Seite zum Hinzufügen eines neuen Mitarbeiters anzeigen */
  function addNewEmployee() {
    navigator('/add-employee');
  }

  /* Seite zum Aktualisieren eines bestehenden Mitarbeiters anzeigen */
  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  /* Seite zum Löschen eines Mitarbeiters anzeigen */
  function removeEmployee(id) {
    console.log('Employee deleted successfully: ', id);
    if (window.confirm('Are you sure you want to delete this employee?')) {
      deleteEmployee(id)
        .then((response) => {
          getAllEmployees(); // Mitarbeiterliste aktualisieren, nachdem ein Mitarbeiter gelöscht wurde
        })
        .catch((error) => {
          console.error('Error deleting employee: ', error);
        });
    }
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
            <th>Actions</th>
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
              <td>
                {/* Button zum Bearbeiten — navigiert zur Edit-Seite mit der Mitarbeiter-ID */}
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
                {/* Button zum Löschen — fragt zur Bestätigung und entfernt den Mitarbeiter */}
                <button
                  className="btn btn-danger"
                  onClick={() => removeEmployee(employee.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
