/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Klasse     : EmployeeRepository                       *
 * Paket      : repository                               *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

package net.javaspringboot.employee.management.backend.repository;

import net.javaspringboot.employee.management.backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository-Interface für den Datenbankzugriff auf {@link Employee}-Entitäten.
 *
 * <p>Erbt alle Standard-CRUD-Operationen von {@link JpaRepository}.
 * Der Primärschlüssel vom Typ {@code Long} identifiziert jeden Mitarbeiter eindeutig.</p>
 */
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}