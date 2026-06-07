/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Datei      : ViewEmployeeComponent.jsx                *
 * Ordner     : components                               *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployee } from '../services/EmployeeService';

export const ViewEmployeeComponent = () => {
  /* Zustände für die Mitarbeiterinformationen */
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const { id } = useParams(); // ID des Mitarbeiters aus der URL (für die Anzeige)

  const navigator = useNavigate(); // Navigation-Hook für die Navigation zu anderen Seiten

  /* Mitarbeiterdaten abrufen, wenn die Komponente geladen wird */
  useEffect(() => {
    getEmployee(id)
      .then((response) => {
        const employee = response.data;
        setFirstName(employee.firstName);
        setLastName(employee.lastName);
        setEmail(employee.email);
      })
      .catch((error) => {
        console.error('Error fetching employee: ', error);
      });
  }, [id]);

  return (
    <div className="container">
      <br /> <br />
      {/* Karte zur Anzeige der Mitarbeiterdetails */}
      <div className="card col-md-6 offset-md-3">
        <h2 className="text-center">View Employee</h2>
        <div className="card-body">
          {/* Vorname des Mitarbeiters */}
          <div className="row mb-2">
            <label className="col-md fw-bold">FirstName: </label>
            <span className="col-md-8">{firstName}</span>
          </div>
          {/* Nachname des Mitarbeiters */}
          <div className="row mb-2">
            <label className="col-md fw-bold">LastName: </label>
            <span className="col-md-8">{lastName}</span>
          </div>
          {/* E-Mail des Mitarbeiters */}
          <div className="row mb-2">
            <label className="col-md fw-bold">Email: </label>
            <span className="col-md-8">{email}</span>
          </div>
          {/* Button zum Zurücknavigieren zur Mitarbeiterliste */}
          <button
            className="btn btn-secondary"
            onClick={() => navigator('/employees')}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
