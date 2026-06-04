/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Datei      : EmployeeComponent.jsx                    *
 * Ordner     : components                               *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

import React, { useState } from 'react';
/* Funktion zum Erstellen eines neuen Mitarbeiters im Backend */
import { createEmployee } from '../services/EmployeeService';
/* Hook für die Navigation zwischen Seiten */
import { useNavigate } from 'react-router-dom';

/* Formular zum Hinzufügen eines neuen Mitarbeiters */
export const EmployeeComponent = () => {
  /* Zustände für die Formularfelder */
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  /* Navigation-Hook für die Navigation zu anderen Seiten */
  const navigator = useNavigate();

  /* Mitarbeiter speichern (noch nicht implementiert) */
  const savedEmployee = (event) => {
    event.preventDefault();
    const employee = { firstName, lastName, email };
    console.log('Employee saved: ', employee);

    // Hier
    createEmployee(employee)
      .then((response) => {
        console.log('Employee created successfully: ', response.data);
        // Nach dem erfolgreichen Erstellen des Mitarbeiters könnte man z.B. zur Mitarbeiterliste navigieren
        navigator('/employees');
      })
      .catch((error) => {
        console.error('Error creating employee: ', error);
      });
  };

  return (
    <div className="container">
      <br /> <br /> {/* Zeilenumbruch für etwas Abstand zum Header */}
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            {/* Eingabeformular für neuen Mitarbeiter */}
            <form>
              {/* Vorname */}
              <div className="form-group mb-2">
                <label className="form-label">First Name: </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  value={firstName}
                  className="form-control"
                  onChange={(event) => setFirstName(event.target.value)} // Vorname hinzufügen
                />
              </div>
              {/* Nachname */}
              <div className="form-group mb-2">
                <label className="form-label">Last Name: </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={lastName}
                  className="form-control"
                  onChange={(event) => setLastName(event.target.value)} // Nachname hinzufügen
                />
              </div>
              {/* E-Mail */}
              <div className="form-group mb-2">
                <label className="form-label">Email: </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={(event) => setEmail(event.target.value)} // E-Mail hinzufügen
                />
              </div>

              {/* Formular absenden */}
              <button className="btn btn-success" onClick={savedEmployee}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
