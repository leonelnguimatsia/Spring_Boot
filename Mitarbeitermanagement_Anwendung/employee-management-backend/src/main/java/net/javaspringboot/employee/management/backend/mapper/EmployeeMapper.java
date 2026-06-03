/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Klasse     : EmployeeMapper                           *
 * Paket      : mapper                                   *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

package net.javaspringboot.employee.management.backend.mapper;

import net.javaspringboot.employee.management.backend.dto.EmployeeDto;
import net.javaspringboot.employee.management.backend.entity.Employee;

/**
 * Hilfsklasse zur Konvertierung zwischen {@link Employee}-Entität und {@link EmployeeDto}.
 *
 * <p>Alle Methoden sind statisch — die Klasse muss nicht instanziiert werden.</p>
 */
public class EmployeeMapper {

    /**
     * Konvertiert eine {@link Employee}-Entität in ein {@link EmployeeDto}.
     *
     * @param employee die zu konvertierende Entität
     * @return das entsprechende DTO
     */
    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    /**
     * Konvertiert ein {@link EmployeeDto} in eine {@link Employee}-Entität.
     *
     * @param employeeDto das zu konvertierende DTO
     * @return die entsprechende Entität
     */
    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}