/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Klasse     : Employee                                 *
 * Paket      : entity                                   *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

package net.javaspringboot.employee.management.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Repräsentiert einen Mitarbeiter in der Mitarbeitermanagement-Anwendung.
 *
 * <p>Diese JPA-Entität wird auf die Datenbanktabelle {@code employees} abgebildet
 * und enthält die grundlegenden Stammdaten eines Mitarbeiters. Getter, Setter sowie
 * beide Konstruktoren werden automatisch durch Lombok generiert.</p>
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees") // Datenbankname der Tabelle
public class Employee {

    /** Eindeutige ID des Mitarbeiters (Primärschlüssel, automatisch generiert). */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-Increment durch die Datenbank
    private Long id;

    /** Vorname des Mitarbeiters. */
    @Column(name = "first_name")
    private String firstName;

    /** Nachname des Mitarbeiters. */
    @Column(name = "last_name")
    private String lastName;

    /** E-Mail-Adresse des Mitarbeiters (Pflichtfeld, muss eindeutig sein). */
    @Column(name = "email_id", nullable = false, unique = true)
    private String email;
}