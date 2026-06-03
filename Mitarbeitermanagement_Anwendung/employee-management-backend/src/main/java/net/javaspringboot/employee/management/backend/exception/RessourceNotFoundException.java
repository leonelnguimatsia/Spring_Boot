/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Klasse     : RessourceNotFoundException               *
 * Paket      : exception                                *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

package net.javaspringboot.employee.management.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Ausnahme, die ausgelöst wird, wenn eine angeforderte Ressource nicht gefunden wurde.
 *
 * <p>Erweitert {@link RuntimeException} und ist mit {@code @ResponseStatus(NOT_FOUND)}
 * annotiert, damit Spring automatisch einen HTTP-Status 404 zurückgibt,
 * sobald diese Ausnahme geworfen wird.</p>
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND) // HTTP 404 wird automatisch zurückgegeben
public class RessourceNotFoundException extends RuntimeException {

    /**
     * Erstellt eine neue Ausnahme mit einer beschreibenden Fehlermeldung.
     *
     * @param message Fehlermeldung, die den Grund des Fehlers beschreibt
     *                (z. B. "Mitarbeiter mit ID 5 nicht gefunden")
     */
    public RessourceNotFoundException(String message) {

        // Fehlermeldung an die Elternklasse RuntimeException weitergeben
        super(message);
    }
}