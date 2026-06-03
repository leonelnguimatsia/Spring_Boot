/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Klasse     : EmployeeDto                              *
 * Paket      : dto                                      *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

package net.javaspringboot.employee.management.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Data Transfer Object (DTO) für die Übertragung von Mitarbeiterdaten.
 *
 * <p>Wird zwischen der API-Schicht und dem Client ausgetauscht,
 * um die interne {@code Employee}-Entität von der Außenschnittstelle zu entkoppeln.</p>
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {

    /** Eindeutige ID des Mitarbeiters. */
    private Long id;

    /** Vorname des Mitarbeiters. */
    private String firstName;

    /** Nachname des Mitarbeiters. */
    private String lastName;

    /** E-Mail-Adresse des Mitarbeiters. */
    private String email;
}