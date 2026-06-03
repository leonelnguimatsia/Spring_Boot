/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Klasse     : EmployeeController                       *
 * Paket      : controller                               *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

package net.javaspringboot.employee.management.backend.controller;

import lombok.AllArgsConstructor;
import net.javaspringboot.employee.management.backend.dto.EmployeeDto;
import net.javaspringboot.employee.management.backend.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST-Controller für die Mitarbeiterverwaltung.
 *
 * <p>Stellt HTTP-Endpunkte unter {@code /api/employees} bereit
 * und delegiert die Geschäftslogik an den {@link EmployeeService}.</p>
 */
@CrossOrigin("*") // Erlaubt CORS-Anfragen von allen Ursprüngen (z. B. vom React-Frontend)
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees") // Basis-URL für alle Endpunkte dieses Controllers
public class EmployeeController {

    // Spring injiziert den Service über den Konstruktor (via @AllArgsConstructor)
    private EmployeeService employeeService;

    /**
     * Erstellt einen neuen Mitarbeiter (HTTP POST).
     *
     * <p>Endpunkt: {@code POST /api/employees}</p>
     *
     * @param employeeDto JSON-Body mit den Daten des neuen Mitarbeiters
     * @return den gespeicherten Mitarbeiter als DTO mit HTTP-Status 201 (Created)
     */
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {

        // Geschäftslogik an den Service delegieren
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);

        // Gespeicherten Mitarbeiter mit Status 201 zurückgeben
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }


    /**
     * Gibt einen Mitarbeiter anhand seiner ID zurück (HTTP GET).
     *
     * <p>Endpunkt: {@code GET /api/employees/{id}}</p>
     *
     * @param employeeId die ID des gesuchten Mitarbeiters (aus der URL)
     * @return den gefundenen Mitarbeiter als DTO mit HTTP-Status 200 (OK)
     */
    @GetMapping("{id}") // HTTP GET /api/employees/{id}
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId) {

        // Mitarbeiter über den Service anhand der ID laden
        EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId);

        // Mitarbeiter mit Status 200 zurückgeben
        return ResponseEntity.ok(employeeDto);
    }


    /**
     * Gibt alle gespeicherten Mitarbeiter zurück (HTTP GET).
     *
     * <p>Endpunkt: {@code GET /api/employees}</p>
     *
     * @return Liste aller Mitarbeiter als DTOs mit HTTP-Status 200 (OK)
     */
    @GetMapping // HTTP GET /api/employees — kein {id}, da alle Mitarbeiter abgerufen werden
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {

        // Alle Mitarbeiter über den Service laden
        List<EmployeeDto> employees = employeeService.getAllEmployees();

        // Liste mit Status 200 zurückgeben
        return ResponseEntity.ok(employees);
    }
}