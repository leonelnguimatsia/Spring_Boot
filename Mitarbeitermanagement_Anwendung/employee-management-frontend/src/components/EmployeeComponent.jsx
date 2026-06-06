/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Datei      : EmployeeComponent.jsx                    *
 * Ordner     : components                               *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

import React, { useState, useEffect } from 'react';
/* Funktionen zum Erstellen und Abrufen eines Mitarbeiters im Backend */
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from '../services/EmployeeService';
/* Hook für die Navigation zwischen Seiten */
import { useNavigate, useParams } from 'react-router-dom';

/* Formular zum Hinzufügen eines neuen Mitarbeiters */
export const EmployeeComponent = () => {
  /* Zustände für die Formularfelder */
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const { id } = useParams(); // ID des Mitarbeiters aus der URL (für die Bearbeitung)

  /* Speichert Fehlermeldungen für jedes Formularfeld */
  const [errors, setErrors] = useState({
    firstName: '', // Fehlermeldung für Vorname
    lastName: '', // Fehlermeldung für Nachname
    email: '', // Fehlermeldung für E-Mail
  });

  /* Navigation-Hook für die Navigation zu anderen Seiten */
  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      // Mitarbeiterdaten abrufen, wenn eine ID vorhanden ist (für die Bearbeitung)
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
    }
  }, [id]); // Effekt, der ausgeführt wird, wenn sich die ID ändert (z.B. beim Bearbeiten eines Mitarbeiters)

  /* Mitarbeiter speichern (noch nicht implementiert) */
  function savedEmployee(event) {
    event.preventDefault();

    // Validierung des Formulars vor dem Absenden
    if (validateForm()) {
      // Nur speichern wenn das Formular gültig ist
      const employee = { firstName, lastName, email };
      console.log('Employee saved: ', employee);

      if (id) {
        // Bestehenden Mitarbeiter aktualisieren
        updateEmployee(employee, id)
          .then((response) => {
            console.log('Employee updated successfully: ', response.data);
            navigator('/employees');
          })
          .catch((error) => {
            console.error('Error updating employee: ', error);
          });
      } else {
        // Neuen Mitarbeiter erstellen
        createEmployee(employee)
          .then((response) => {
            console.log('Employee created successfully: ', response.data);
            navigator('/employees');
          })
          .catch((error) => {
            console.error('Error creating employee: ', error);
          });
      }
    }
  }

  /* Validiert alle Pflichtfelder des Formulars vor dem Absenden */
  function validateForm() {
    let valid = true; // Ergebnis der Validierung — wird false wenn ein Feld leer ist
    const errorsCopy = { ...errors }; // Kopie des errors-States für die Aktualisierung

    // Vorname prüfen
    if (firstName.trim()) {
      errorsCopy.firstName = ''; // Kein Fehler
    } else {
      errorsCopy.firstName = 'First name is required'; // Fehlermeldung setzen
      valid = false;
    }

    // Nachname prüfen
    if (lastName.trim()) {
      errorsCopy.lastName = ''; // Kein Fehler
    } else {
      errorsCopy.lastName = 'Last name is required'; // Fehlermeldung setzen
      valid = false;
    }

    // E-Mail prüfen
    if (email.trim()) {
      errorsCopy.email = ''; // Kein Fehler
    } else {
      errorsCopy.email = 'Email is required'; // Fehlermeldung setzen
      valid = false;
    }

    // Aktualisiere den Fehler-Status mit den neuen Fehlermeldungen
    setErrors(errorsCopy);
    return valid;
  }

  /* Dynamischer Seitentitel abhängig davon, ob ein Mitarbeiter bearbeitet oder hinzugefügt wird */
  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  }

  return (
    <div className="container">
      <br /> <br /> {/* Zeilenumbruch für etwas Abstand zum Header */}
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
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
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} // Fehlerklasse hinzufügen, wenn es einen Fehler gibt
                  onChange={(event) => setFirstName(event.target.value)} // Vorname hinzufügen
                />
                {/* Fehlermeldung für Vorname anzeigen, wenn es einen Fehler gibt */}
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>
              {/* Nachname */}
              <div className="form-group mb-2">
                <label className="form-label">Last Name: </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={lastName}
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} // Fehlerklasse hinzufügen, wenn es einen Fehler gibt
                  onChange={(event) => setLastName(event.target.value)} // Nachname hinzufügen
                />
                {/* Fehlermeldung für Nachname anzeigen, wenn es einen Fehler gibt */}
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>
              {/* E-Mail */}
              <div className="form-group mb-2">
                <label className="form-label">Email: </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`} // Fehlerklasse hinzufügen, wenn es einen Fehler gibt
                  onChange={(event) => setEmail(event.target.value)} // E-Mail hinzufügen
                />
                {/* Fehlermeldung für E-Mail anzeigen, wenn es einen Fehler gibt */}
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Formular absenden */}
              <button className="btn btn-success" onClick={savedEmployee}>
                Submit
              </button>
              {/* Abbrechen und zur Mitarbeiterliste zurückkehren */}
              <button
                className="btn btn-danger"
                onClick={() => navigator('/employees')}
                style={{ marginLeft: '10px' }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
