/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Klasse     : EmployeeService                          *
 * Paket      : service                                  *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

package net.javaspringboot.employee.management.backend.service;

import net.javaspringboot.employee.management.backend.dto.EmployeeDto;

import java.util.List;

/**
 * Service-Interface für die Mitarbeiterverwaltung.
 *
 * <p>Definiert den Vertrag (die Methoden) für alle Operationen rund um Mitarbeiter.
 * Die konkrete Implementierung erfolgt in {@link net.javaspringboot.employee.management.backend.service.impl.EmployeeServiceImpl}.</p>
 */
public interface  EmployeeService {

    /**
     * Erstellt einen neuen Mitarbeiter und speichert ihn in der Datenbank.
     *
     * @param employeeDto DTO mit den Daten des neuen Mitarbeiters
     * @return DTO des gespeicherten Mitarbeiters (inkl. generierter ID)
     */
    EmployeeDto createEmployee(EmployeeDto employeeDto);


    /**
     * Gibt einen Mitarbeiter anhand seiner ID zurück.
     *
     * @param employeeId die eindeutige ID des gesuchten Mitarbeiters
     * @return DTO des gefundenen Mitarbeiters
     */
    EmployeeDto getEmployeeById(Long employeeId);


    /**
     * Gibt eine Liste aller gespeicherten Mitarbeiter zurück.
     *
     * @return Liste von DTOs aller Mitarbeiter (leer, wenn keine vorhanden)
     */
    List<EmployeeDto> getAllEmployees();


    /**
     * Aktualisiert die Daten eines vorhandenen Mitarbeiters.
     *
     * @param employeeId  die eindeutige ID des zu aktualisierenden Mitarbeiters
     * @param employeeDto DTO mit den neuen Mitarbeiterdaten
     * @return DTO des aktualisierten Mitarbeiters
     */
    EmployeeDto updateEmployee(Long employeeId, EmployeeDto employeeDto);

    /**
     * Löscht einen Mitarbeiter anhand seiner ID aus der Datenbank.
     *
     * @param employeeId die eindeutige ID des zu löschenden Mitarbeiters
     * @throws net.javaspringboot.employee.management.backend.exception.RessourceNotFoundException
     *         wenn kein Mitarbeiter mit der gegebenen ID existiert
     */
    void deleteEmployee(Long employeeId);
}