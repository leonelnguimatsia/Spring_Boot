/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Klasse     : EmployeeServiceImpl                      *
 * Paket      : service.impl                             *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

package net.javaspringboot.employee.management.backend.service.impl;

import lombok.AllArgsConstructor;
import net.javaspringboot.employee.management.backend.dto.EmployeeDto;
import net.javaspringboot.employee.management.backend.entity.Employee;
import net.javaspringboot.employee.management.backend.exception.RessourceNotFoundException;
import net.javaspringboot.employee.management.backend.mapper.EmployeeMapper;
import net.javaspringboot.employee.management.backend.repository.EmployeeRepository;
import net.javaspringboot.employee.management.backend.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Implementierung des {@link EmployeeService}-Interfaces.
 * Enthält die Geschäftslogik für die Mitarbeiterverwaltung.
 */
@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    // Spring injiziert das Repository über den Konstruktor (via @AllArgsConstructor)
    private EmployeeRepository employeeRepository;


    /**
     * Erstellt einen neuen Mitarbeiter und speichert ihn in der Datenbank.
     *
     * @param employeeDto DTO mit den Daten des neuen Mitarbeiters
     * @return DTO des gespeicherten Mitarbeiters (inkl. generierter ID)
     */
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        // DTO in Entity umwandeln, damit JPA es persistieren kann
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);

        // Entity in der Datenbank speichern
        Employee savedEmployee = employeeRepository.save(employee);

        // Gespeicherte Entity zurück in ein DTO umwandeln und zurückgeben
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }


    /**
     * Gibt einen Mitarbeiter anhand seiner ID zurück.
     *
     * @param employeeId die eindeutige ID des gesuchten Mitarbeiters
     * @return DTO des gefundenen Mitarbeiters
     * @throws RessourceNotFoundException wenn kein Mitarbeiter mit der gegebenen ID existiert
     */
    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {

        // Mitarbeiter in der Datenbank suchen — wirft Exception, wenn nicht gefunden
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(()->
                        new RessourceNotFoundException("Employee is not exists withgiven id:" + employeeId));

        // Gefundene Entity in ein DTO umwandeln und zurückgeben
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    /**
     * Gibt eine Liste aller gespeicherten Mitarbeiter zurück.
     *
     * @return Liste von DTOs aller Mitarbeiter (leer, wenn keine vorhanden)
     */
    @Override
    public List<EmployeeDto> getAllEmployees() {

        // Alle Mitarbeiter-Entities aus der Datenbank laden
        List<Employee> employees = employeeRepository.findAll();

        // Jede Entity in ein DTO umwandeln und als Liste zurückgeben
        return employees.stream()
                .map((employee) -> EmployeeMapper.mapToEmployeeDto(employee))
                .collect(Collectors.toList());
    }

    /**
     * Aktualisiert die Daten eines vorhandenen Mitarbeiters.
     *
     * @param employeeId  ID des zu aktualisierenden Mitarbeiters
     * @param employeeDto DTO mit den neuen Mitarbeiterdaten
     * @return DTO des aktualisierten Mitarbeiters
     */
    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto employeeDto) {

        // Mitarbeiter anhand der ID suchen, Fehler werfen falls nicht gefunden
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                ()-> new RessourceNotFoundException("Employee is not exists with given id:" + employeeId)
        );

        // Felder mit den neuen Werten überschreiben
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());

        // Aktualisierten Mitarbeiter speichern und als DTO zurückgeben
        Employee updateEmployeeObj = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(updateEmployeeObj);
    }

    /**
     * Löscht einen Mitarbeiter anhand seiner ID aus der Datenbank.
     *
     * @param employeeId ID des zu löschenden Mitarbeiters
     * @throws RessourceNotFoundException wenn kein Mitarbeiter mit der gegebenen ID existiert
     */
    @Override
    public void deleteEmployee(Long employeeId) {

        // Mitarbeiter anhand der ID suchen, Fehler werfen falls nicht gefunden
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                ()-> new RessourceNotFoundException("Employee is not exists with given id:" + employeeId)
        );

        // Mitarbeiter aus der Datenbank löschen
        employeeRepository.delete(employee);
    }
}