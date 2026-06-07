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
        <nav className="navbar navbar-dark bg-dark w-100">
          {/* container-fluid: füllt die volle Breite auf allen Geräten */}
          <div className="container-fluid justify-content-center">
            {/* Link zur GitHub-Seite des Autors — text-center zentriert auf Handy */}
            <a
              className="navbar-brand w-100 text-center"
              href="https://github.com/leonelnguimatsia"
              target="_blank"
              rel="noreferrer"
            >
              Employee Management System
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};
