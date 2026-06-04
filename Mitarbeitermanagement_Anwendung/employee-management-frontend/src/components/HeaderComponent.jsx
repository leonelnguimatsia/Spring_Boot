/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Datei      : HeaderComponent.jsx                      *
 * Ordner     : components                               *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

import React from 'react';

/* Navigationsleiste oben auf der Seite */
export const HeaderComponent = () => {
  return (
    <div>
      <header>
        {/* Dunkle Bootstrap-Navbar */}
        <nav className="navbar navbar-dark bg-dark">
          {/* Link zur GitHub-Seite des Autors */}
          <a
            className="navbar-brand"
            href="https://github.com/leonelnguimatsia"
            target="_blank"
            rel="noreferrer"
          >
            Employee Management System
          </a>
        </nav>
      </header>
    </div>
  );
};
