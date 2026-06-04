/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Datei      : EmployeeService.js                       *
 * Ordner     : services                                 *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

import axos from 'axios';

// Basis-URL des Spring Boot Backends
const REST_API_URL = 'http://localhost:8080/api/employees';

/* Sendet eine GET-Anfrage an das Backend und gibt alle Mitarbeiter zurück */
export const listEmployees = () => {
  return axos.get(REST_API_URL);
};

/* Sendet eine POST-Anfrage an das Backend, um einen neuen Mitarbeiter zu erstellen */
export const createEmployee = (employee) => {
  return axos.post(REST_API_URL, employee);
};
